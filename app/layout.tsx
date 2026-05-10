import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Secret Rotation Scheduler — Automate API key rotation with zero downtime',
  description: 'Schedules API key rotations, coordinates with multiple services, validates new keys before switching. Built for DevOps teams and security engineers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fef0915c-283f-4902-ba3e-d70c7d5a5e07"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
