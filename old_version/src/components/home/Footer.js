import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { useState } from 'react'
import Image from 'next/image'

const QRCodePopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ✕
        </button>
        <Image
          src="/img/qr_code_for_public_acct.jpg"
          alt="公众号 QR Code"
          width={200}
          height={200}
          className="mt-4"
        />
      </div>
    </div>
  )
}

const footerNav = [
  {
    Community: [
      { title: 'GitHub', href: 'https://github.com/NonceGeek/awesome-ai-dimsum' },
      // { title: 'Discord', href: '/discord' },
      // { title: 'YouTube', href: 'https://www.youtube.com/tailwindlabs' },
    ],
    Media: [
      { title: '公众号', href: '#', isQRCode: true }, 
      // { title: 'University of Alberta', href: 'https://www.ualberta.ca/en/index.html' },
      // {
      //   title: 'NCU AI Research Institute',
      //   href: 'http://ie.ncu.edu.cn/kxyj/kypt/43fd339753aa4f6e9b2755589419ac9b.htm',
      // },
    ],
    Partners: [
      { title: 'NonceGeekDAO', href: 'https://github.com/NonceGeek' },
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
      { title: '首期 Monthly Hackathon 启动', href: 'https://mp.weixin.qq.com/s/UucS9EcZQhboHvHD6Lkt1Q' },
      // { title: 'SCI-WEB3.0', href: 'https://x.com/SCIW3ORG/status/1822587307490234684' },
      // { title: 'YouTube', href: 'https://www.youtube.com/tailwindlabs' },
    ],
  },
]

export function Footer() {
  const [showQRCode, setShowQRCode] = useState(false)

  return (
    <footer className="pb-16 mt-36 text-sm leading-6">
      {showQRCode && <QRCodePopup onClose={() => setShowQRCode(false)} />}
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
                        {item.isQRCode ? (
                          <button
                            onClick={() => setShowQRCode(true)}
                            className="hover:text-slate-900 dark:hover:text-slate-300"
                          >
                            {item.title}
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            className="hover:text-slate-900 dark:hover:text-slate-300"
                          >
                            {item.title}
                          </Link>
                        )}
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
