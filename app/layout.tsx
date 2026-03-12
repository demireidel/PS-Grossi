import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rafael Grossi for UN Secretary-General | A UN That Works',
  description: 'Rafael Grossi\'s vision for a more operational, credible, and effective United Nations. Crisis-tested leadership for a dangerous world.',
  keywords: ['Rafael Grossi', 'UN Secretary-General', 'United Nations', 'IAEA', 'diplomacy', 'international leadership'],
  openGraph: {
    title: 'Rafael Grossi for UN Secretary-General',
    description: 'A UN That Works - Crisis-tested leadership for a dangerous world',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e3a5f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
