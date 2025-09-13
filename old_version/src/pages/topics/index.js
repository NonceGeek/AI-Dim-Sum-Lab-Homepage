import { useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

// Define Topic structure
// Define topic structure
class Topic {
  constructor(title, description, proposer, proposerLink, grantor, grantAmount) {
    this.title = title;              // Title
    this.description = description;   // Description
    this.proposer = proposer;        // Proposer
    this.proposerLink = proposerLink; // Proposer Link
    this.grantor = grantor;          // Grantor
    this.grantAmount = grantAmount;  // Grant Amount
    this.date = new Date();          // Submission Date - initialized with current date
  }
}

// Initialize some example topics
const initialTopics = [
  new Topic(
    "The Evolution of Cryptographic Organizations from an Organizational Sociology Perspective: Case Studies of Bitcoin and Ethereum",
    "Based on the theoretical framework of 'organizational sociology', this research analyzes the organizational structure and evolution of Bitcoin and Ethereum, filling the gap in cryptographic research from an organizational social perspective.",
    "LeeDuckGo",
    "https://leeduckgo.com",
    "",
    ""
  ),
  // Add more topics as needed
];

export default function Topics() {
  const dateFormat = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }
  const [papers, setPapers] = useState([])
  const [loading, setLoading] = useState(true)

  return (
    <main className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
      <header className="py-16 sm:text-center">
        <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
          Topics
        </h1>
        <p className="text-lg text-slate-700 dark:text-slate-400">
          🧪✨ Amazing Topics.
        </p>
      </header>
      
    </main>
  )
}

Topics.layoutProps = {
  meta: {
    title: 'Lab Topics',
    description: '🧪✨ Amazing Topics.',
  },
}
