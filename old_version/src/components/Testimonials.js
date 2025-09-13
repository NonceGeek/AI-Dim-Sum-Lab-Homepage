import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

let testimonials = [
  // Column 1
  [
    {
      tags: ['LLM', 'Machine Learning'],
      url: 'https://www.malei.org/',
      author: {
        name: 'Malei',
        role: (
          <>
            Associate Professor, University of Tokyo, Japan <br />
            Associate Professor, University of Alberta, Canada
          </>
        ),
        avatar: require('@/img/avatars/ryan-florence.jpg').default.src,
      },
    },
    {
      tags: ['Machine Learning', 'Security'],
      url: 'https://x.com/0xTaki_eth',
      author: {
        name: 'Taki',
        role: 'University of Alberta PhD, Assistant Researcher',
        avatar: require('@/img/avatars/ryan-florence.jpg').default.src,
      },
    }
  ],
  // Column 2
  [
    {
      tags: ['Blockchain', 'FinTech', 'Data Science'],
      content:
        'Have been working with science work for over ten years and AI Dim Sum Lab APPjust makes my life easier. It is still science work and you use flex, grid, etc. but just quicker to write and maintain.',
      url: 'https://www.uowdubai.ac.ae/teaching/faculties/business-finance-and-management/dr-yiyang-bian',
      author: {
        name: `Bian`,
        role: 
        <>
          Associate Professor<br />
          Director of Blockchain Innvation and Analytics Lab<br />
          Research Cluster Lead, University of Wollongong in Dubai
        </>,
        avatar: require('@/img/avatars/debbie-obrien.jpg').default.src,
      },
    },  
    {
      tags: ['LLM', 'RAG'],
      content: 'Skip to the end. Use @tailwindcss.',
      url: 'https://github.com/aboutmydreams',
      author: {
        name: 'Diven',
        role: 'Former BuidlerDAO cofounder && CTO',
        avatar: require('@/img/avatars/kentcdodds.jpg').default.src,
      },
    }
  ],
  // Column 3
  [
    {
      tags: ['DAO', 'AI', 'Move', 'Autonomous World'],
      content:
        'Have been working with science work for over ten years and AI Dim Sum Lab APPjust makes my life easier. It is still science work and you use flex, grid, etc. but just quicker to write and maintain.',
      url: 'https://www.leeduckgo.com/',
      author: {
        name: `LeeDuckGo`,
        role: 
        <>
          NonceGeekDAO Founder <br />
          PI in GuangZhou University
        </>,
        avatar: require('@/img/avatars/debbie-obrien.jpg').default.src,
      },
    },
    {
      tags: ['Business Intelligence', 'FinTech'],
      content:
        'Have been working with science work for over ten years and AI Dim Sum Lab APPjust makes my life easier. It is still science work and you use flex, grid, etc. but just quicker to write and maintain.',
      url: 'https://www.uowdubai.ac.ae/teaching/faculties/school-business/dr-ziang-wang',
      author: {
        name: `Nova`,
        role: 
        <>
          Assistant Professor, University of Wollongong in Dubai, UAE
        </>,
        avatar: require('@/img/avatars/debbie-obrien.jpg').default.src,
      },
    }
  ],
]

function Testimonial({ author, content, url, expanded, tags }) {
  let [focusable, setFocusable] = useState(true)
  let ref = useRef()

  useEffect(() => {
    if (ref.current.offsetTop !== 0) {
      setFocusable(false)
    }
  }, [])

  const getRandomColor = () => {
    const colors = [
      'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-800',
      'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-800',
      'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-800',
      'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-800',
      'bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-800',
      // Add more color combinations as needed
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <li ref={ref} className="text-sm leading-6">
      <figure className="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
        {tags && (
          <div className="flex space-x-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`${getRandomColor()} px-2`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <figcaption className="flex items-center space-x-4">
          {/* <img
            src={author.avatar}
            alt=""
            className="flex-none w-14 h-14 rounded-full object-cover"
            loading="lazy"
            decoding="async"
          /> */}
          <div className="flex-auto">
            <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
              {url ? (
                <a href={url} tabIndex={focusable || expanded ? 0 : -1} target="_blank" rel="noopener noreferrer">
                  <span className="absolute inset-0" />
                  {author.name}
                </a>
              ) : (
                author.name
              )}
            </div>
            <div className="mt-0.5">{author.role}</div>
            <br></br>
          </div>
        </figcaption>
      </figure>
    </li>
  )
}

export function Testimonials() {
  let ref = useRef()
  let [expanded, setExpanded] = useState(true) 
  // Hint: the default set of expanded
  let [showCollapseButton, setShowCollapseButton] = useState(false)
  let [transition, setTransition] = useState(false)
  let { ref: inViewRef, inView } = useInView({ threshold: 0 })
  let initial = useRef(true)

  useIsomorphicLayoutEffect(() => {
    if (initial.current) {
      initial.current = false
      return
    }
    if (expanded) {
      ref.current.focus({ preventScroll: expanded })
    } else {
      ref.current.focus()
      ref.current.scrollIntoView()
    }
    if (expanded) {
      setShowCollapseButton(false)
    }
  }, [expanded])

  useEffect(() => {
    setTimeout(() => setTransition(expanded), 0)
  }, [expanded])

  // useEffect(() => {
  //   if (!expanded || !inView) return
  //   function onScroll() {
  //     let bodyRect = document.body.getBoundingClientRect()
  //     let rect = ref.current.getBoundingClientRect()
  //     let middle = rect.top + rect.height / 4 - bodyRect.top - window.innerHeight / 2
  //     let isHalfWay = window.scrollY > middle
  //     if (showCollapseButton && !isHalfWay) {
  //       setShowCollapseButton(false)
  //     } else if (!showCollapseButton && isHalfWay) {
  //       setShowCollapseButton(true)
  //     }
  //   }
  //   window.addEventListener('scroll', onScroll, { passive: true })
  //   return () => {
  //     window.removeEventListener('scroll', onScroll, { passive: true })
  //   }
  // }, [expanded, showCollapseButton, inView])

  return (
    <section
      ref={ref}
      tabIndex="-1"
      className="relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5"
    >
      <h2 className="text-center text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">
        Researchers
      </h2>
      <br></br>
      <div
        ref={inViewRef}
        className={clsx(
          'grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3',
          !expanded && 'max-h-[33rem] overflow-hidden'
        )}
      >
        {testimonials.map((column, i) => (
          <ul
            key={i}
            className={clsx(
              'space-y-8',
              i === 1 && 'hidden sm:block',
              i === 2 && 'hidden lg:block'
            )}
          >
            {column.map((testimonial) => (
              <Testimonial key={testimonial.author.name} expanded={expanded} {...testimonial} />
            ))}
          </ul>
        ))}
      </div>
      <div
        className={clsx(
          'inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none dark:from-slate-900',
          expanded ? 'sticky -mt-52' : 'absolute',
          transition && 'transition-opacity duration-300',
          expanded && (showCollapseButton ? 'opacity-100' : 'opacity-0')
        )}
      >
        {/* <button
          type="button"
          className={clsx(
            'relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600',
            transition && 'transition-transform',
            expanded && !showCollapseButton && 'translate-y-4',
            (!expanded || showCollapseButton) && 'pointer-events-auto'
          )}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Okay, I get the point' : 'Show more...'}
        </button> */}
      </div>
    </section>
  )
}
