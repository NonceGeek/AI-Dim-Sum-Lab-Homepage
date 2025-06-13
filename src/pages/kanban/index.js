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
  return 'https://avatars.githubusercontent.com/u/9919?s=200&v=4' // github logo
}

export default function Kanban() {
  const [items, setItems] = useState([])
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
            query: `{
              organization(login: \"NonceGeek\") {
                projectV2(number: 11) {
                  title
                  items(first: 20) {
                    nodes {
                      content {
                        ... on Issue {
                          title
                          url
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
        const nodes = data?.data?.organization?.projectV2?.items?.nodes || []
        setItems(nodes.map(n => n.content).filter(Boolean))
      } catch (e) {
        // 可加错误提示
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <main className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
      <header className="py-16 sm:text-center">
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
        <div className="space-y-16">
          {items.map((item, index) => (
            <article key={index} className="relative group">
              <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50" />
              <svg
                viewBox="0 0 9 9"
                className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
              >
                <circle
                  cx="4.5"
                  cy="4.5"
                  r="4.5"
                  stroke="currentColor"
                  className="fill-white dark:fill-slate-900"
                  strokeWidth={2}
                />
              </svg>
              <div className="relative flex items-center gap-4 pt-8 lg:pt-0">
                <img
                  src={getRepoAvatar(item.url)}
                  alt="repo avatar"
                  className="w-10 h-10 rounded-full border flex-shrink-0"
                  onError={e => (e.target.src = 'https://avatars.githubusercontent.com/u/9919?s=200&v=4')}
                />
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200">
                    {item.title}
                  </h3>
                  <Link href={item.url} className="flex items-center text-sm text-sky-500 font-medium mt-2">
                    <span className="relative">View Issue</span>
                    <svg
                      className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
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
