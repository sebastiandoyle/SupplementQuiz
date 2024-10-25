import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wellness Quiz',
  description: 'Find your perfect wellness interventions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-white min-h-screen p-4`}>
        <main className="max-w-4xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}