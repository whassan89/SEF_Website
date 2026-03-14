import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Safia Empowerment Foundation | sefngo.com',
    template: '%s | Safia Empowerment Foundation',
  },
  description:
    'Safia Empowerment Foundation (SEF) provides food, clothing, and medical help to homeless persons across Punjab, Pakistan. Licensed by SECP under Section 42 and registered with Punjab Charity Commission.',
  keywords: [
    'NGO Pakistan',
    'charity Punjab',
    'homeless help Lahore',
    'food distribution NGO',
    'SECP licensed NGO',
    'Safia Empowerment Foundation',
    'SEF NGO',
  ],
  metadataBase: new URL('https://sefngo.com'),
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://sefngo.com',
    siteName: 'Safia Empowerment Foundation',
    title: 'Safia Empowerment Foundation — Empowering Lives, Restoring Dignity',
    description:
      'Providing food, clothing, and medical help to homeless persons across Punjab, Pakistan.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safia Empowerment Foundation',
    description: 'Providing food, clothing, and medical help to homeless persons across Punjab.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
