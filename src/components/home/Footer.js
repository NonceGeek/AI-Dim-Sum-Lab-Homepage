import Link from 'next/link'
import { Logo } from '@/components/Logo'

const footerNav = [
  {
    Community: [
      { title: 'GitHub', href: 'https://github.com/NonceGeek/awesome-yue-lab/' },
      // { title: 'Discord', href: '/discord' },
      // { title: 'YouTube', href: 'https://www.youtube.com/tailwindlabs' },
    ],
    Media: [
      { title: '官方视频号', href: 'TODO - gen a qr code.' }, 
      // { title: 'University of Alberta', href: 'https://www.ualberta.ca/en/index.html' },
      // {
      //   title: 'NCU AI Research Institute',
      //   href: 'http://ie.ncu.edu.cn/kxyj/kypt/43fd339753aa4f6e9b2755589419ac9b.htm',
      // },
    ],
    Partners: [
      { title: 'TODO', href: 'TODO' },
    ],
    // CooperatingInstitutions: [
    //   { title: 'DIN', href: 'https://twitter.com/din_lol_' },
    //   { title: 'TerpLayer', href: 'https://twitter.com/terp_layer' },
    //   {
    //     title: 'NonceGeek DAO',
    //     href: 'https://www.noncegeek.com/#/',
    //   },
    // ],
    News: [
      { title: '重点实验室成立', href: 'https://google.com' },
      // { title: 'SCI-WEB3.0', href: 'https://x.com/SCIW3ORG/status/1822587307490234684' },
      // { title: 'YouTube', href: 'https://www.youtube.com/tailwindlabs' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="pb-16 mt-36 text-sm leading-6">
      <div className="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
        <div className="flex">
          {footerNav.map((sections) => (
            <div
              key={Object.keys(sections).join(',')}
              className="flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0"
            >
              {Object.entries(sections).map(([title, items]) => (
                <div key={title} className="lg:flex-none lg:w-1/2">
                  <h2 className="font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
                  <ul className="mt-3 space-y-2">
                    {items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="hover:text-slate-900 dark:hover:text-slate-300"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
