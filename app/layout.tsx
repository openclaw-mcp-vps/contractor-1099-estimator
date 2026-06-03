import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contractor 1099 Estimator — Quarterly Tax Calculator for Freelancers',
  description: 'Estimate quarterly taxes for freelancers instantly. Track income and get automated tax estimates with state-specific rates and deduction suggestions.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f4501989-f6fd-4699-8163-4ec830345fdc"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
