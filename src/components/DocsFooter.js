import Link from 'next/link'
import clsx from 'clsx'

export function DocsFooter({ children, previous, next }) {
  return (
    <footer className={clsx('text-sm leading-6', previous || next ? 'mt-12' : 'mt-16')}>
      {(previous || next) && (
        <div className="mb-10 text-slate-700 font-semibold flex items-center dark:text-slate-200">
          {previous && (
            <Link
              href={previous.href}
              className="group flex items-center hover:text-slate-900 dark:hover:text-white"
            >
              <svg
                viewBox="0 0 3 6"
                className="mr-3 w-auto h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300"
              >
                <path
                  d="M3 0L0 3L3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {previous.shortTitle || previous.title}
            </Link>
          )}
          {next && (
            <Link
              href={next.href}
              className="group ml-auto flex items-center hover:text-slate-900 dark:hover:text-white"
            >
              {next.shortTitle || next.title}
              <svg
                viewBox="0 0 3 6"
                className="ml-3 w-auto h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300"
              >
                <path
                  d="M0 0L3 3L0 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          )}
        </div>
      )}
      <div className="pt-10 pb-28 border-t border-slate-200 sm:flex justify-between text-slate-500 dark:border-slate-200/5">
        <div className="mb-6 sm:mb-0 sm:flex">
          <p>Copyright &copy; {new Date().getFullYear()} Ai Dim Sum Lab.</p>
          <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200 dark:sm:border-slate-200/5">
            <Link href="/brand" className="hover:text-slate-900 dark:hover:text-slate-400">
              Trademark Policy
            </Link>
          </p>
        </div>
        {children ? (
          children
        ) : (
          <div className="flex space-x-10 text-slate-400 dark:text-slate-500">
            <a href="/discord" className="hover:text-slate-500 dark:hover:text-slate-400">
              <span className="sr-only">Discord</span>
              <svg width="23" height="24" viewBox="0 0 127.14 96.36" fill="currentColor">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </footer>
  )
}
