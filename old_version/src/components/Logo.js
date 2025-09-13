import clsx from 'clsx'

export function Logo({ className, ...props }) {
  return (
    <svg
    viewBox="0 0 107 31"
    className={clsx('text-slate-900 dark:text-white', className)}
    {...props}
  >
    </svg>
  )
}
