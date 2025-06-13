import { useEffect, useState } from 'react'
import Link from 'next/link'

const API_URL = 'https://api.github.com/graphql'
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN

function getRepoAvatar(url) {
  try {
    const match = url.match(/github.com\/(.*?)\//)
    if (match) {
      const [_, owner] = match
      return `https://github.com/${owner}.png`
    }
  } catch {}
  return 'https://avatars.githubusercontent.com/u/9919?s=200&v=4'
}

export default function Kanban() {
  const [columns, setColumns] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
          },
          body: JSON.stringify({
            query: `query {
  organization(login: \"NonceGeek\") {
    projectV2(number: 11) {
      title
      fields(first: 20) {
        nodes {
          ... on ProjectV2SingleSelectField {
            id
            name
            options {
              id
              name
            }
          }
        }
      }
      items(first: 20) {
        nodes {
          content {
            ... on Issue {
              title
              url
              repository { name }
            }
            ... on PullRequest {
              title
              url
              repository { name }
            }
          }
          fieldValues(first: 10) {
            nodes {
              ... on ProjectV2ItemFieldSingleSelectValue {
                field {
                  ... on ProjectV2SingleSelectField {
                    name
                  }
                }
                optionId
              }
            }
          }
        }
      }
    }
  }
}`,
          }),
        })
        const data = await res.json()
        const project = data?.data?.organization?.projectV2
        // Find the status field (usually the only single-select field)
        const statusField = project.fields.nodes.find((f) => f.name === 'Status')
        const statusOptions = statusField ? statusField.options : []
        // Group by optionId
        const columnsMap = {}
        statusOptions.forEach((opt) => {
          columnsMap[opt.id] = { name: opt.name, items: [] }
        })
        // Fallback: No Status
        columnsMap['NO_STATUS'] = { name: 'No Status', items: [] }
        // Iterate through items
        project.items.nodes.forEach((node) => {
          const content = node.content
          if (!content) return
          // Find the status optionId for this item
          let optionId = null
          const fv = node.fieldValues.nodes.find((v) => v.field && v.field.name === 'Status')
          if (fv && fv.optionId) optionId = fv.optionId
          if (optionId && columnsMap[optionId]) {
            columnsMap[optionId].items.push(content)
          }
        })
        // Convert to array, ordered by statusOptions + No Status
        const columnsArr = statusOptions.map((opt) => columnsMap[opt.id])
        setColumns(columnsArr)
      } catch (e) {
        // 可加错误提示
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <main className="max-w-full mx-auto px-2 pb-28 sm:px-4 md:px-8 xl:px-12">
      <header className="py-8 sm:text-center">
        <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
          Project Kanban
        </h1>
        <p className="text-lg text-slate-700 dark:text-slate-400">
          Visualize project issues as a kanban.
        </p>
      </header>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-500 dark:border-sky-300"></div>
        </div>
      ) : (
        <div className="flex gap-4 overflow-x-auto">
          {columns.map((col, idx) => (
            <div key={col.name} className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 min-w-[280px] w-80 flex-shrink-0">
              <h2 className="text-lg font-bold mb-4 text-slate-700 dark:text-slate-200 text-center">{col.name}</h2>
              <div className="space-y-4">
                {col.items.length === 0 && (
                  <div className="text-slate-400 text-center">No items</div>
                )}
                {col.items.map((item, i) => (
                  <article key={i} className="relative group bg-white dark:bg-slate-900 rounded-xl shadow p-4 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                    <img
                      src={getRepoAvatar(item.url)}
                      alt="repo avatar"
                      className="w-8 h-8 rounded-full border flex-shrink-0"
                      onError={e => (e.target.src = 'https://avatars.githubusercontent.com/u/9919?s=200&v=4')}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-slate-900 dark:text-slate-100 truncate">{item.title}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 truncate">{item.repository?.name}</div>
                    </div>
                    <Link href={item.url} className="ml-2 text-sky-500 text-xs font-medium" target="_blank" rel="noopener noreferrer">
                      View
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}

Kanban.layoutProps = {
  meta: {
    title: 'Project Kanban',
    description: 'Visualize project issues as a kanban.',
  },
}
