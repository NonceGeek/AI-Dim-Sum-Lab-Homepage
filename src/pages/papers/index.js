import { useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

export default function Papers() {
  const dateFormat = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }
  const [papers, setPapers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPapers() {
      try {
        const response = await fetch('https://api.desci.cyou/api/top_sci_rss/rss?category=cs.AI')
        const data = await response.json()
        if (data.code === 0) {
          setPapers(data.data)
        }
      } catch (error) {
        console.error("Failed to fetch papers:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchPapers()
  }, [])

  return (
    <main className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
      <header className="py-16 sm:text-center">
        <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
          Latest Papers of Lab
        </h1>
        <p className="text-lg text-slate-700 dark:text-slate-400">
          let's build the really cool stuff.
        </p>
      </header>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-500 dark:border-sky-300"></div>
        </div>
      ) : (
        <div className="space-y-16">
          {papers.map((paper, index) => (
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
              <div className="relative">
                <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                  {paper.title}
                </h3>
                <p className="mt-2 mb-4 text-sm text-slate-700 dark:text-slate-400 line-clamp-3">
                  {paper.summary}
                </p>
                <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                  <dt className="sr-only">Date</dt>
                  <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                    {paper.id.split(':')[2].substring(0,7)}
                  </dd>
                </dl>
              </div>
              <Link href={paper.link} className="flex items-center text-sm text-sky-500 font-medium">
                <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                <span className="relative">
                  Read more<span className="sr-only">, {paper.title}</span>
                </span>
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
            </article>
          ))}
        </div>
      )}
    </main>
  )
}

Papers.layoutProps = {
  meta: {
    title: 'URANIA Papers',
    description: 'The papers from URANIA.',
  },
}
