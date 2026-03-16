import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rafael Grossi for UN Secretary-General | A UN That Works',
  description: 'Rafael Grossi\'s vision for a more operational, credible, and effective United Nations. Crisis-tested leadership for a dangerous world. 40 years of diplomacy. First Latin American IAEA Director General.',
  keywords: ['Rafael Grossi', 'UN Secretary-General', 'United Nations', 'IAEA', 'diplomacy', 'international leadership', 'nuclear safety', 'multilateralism', 'Global South'],
  authors: [{ name: 'Grossi for UN Campaign' }],
  creator: 'Grossi for UN Campaign',
  metadataBase: new URL('https://grossiforun.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Rafael Grossi for UN Secretary-General',
    description: 'A UN That Works — Crisis-tested leadership for a dangerous world. 40 years of diplomacy. First Latin American IAEA Director General.',
    type: 'website',
    siteName: 'Grossi for UN Secretary-General',
    locale: 'en_US',
    url: 'https://grossiforun.org',
    images: [
      {
        url: '/images/grossi-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Rafael Grossi — A UN That Works',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafael Grossi for UN Secretary-General',
    description: 'A UN That Works — Crisis-tested leadership for a dangerous world.',
    site: '@rafaborun',
    creator: '@rafaborun',
    images: ['/images/grossi-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Rafael Grossi for UN Secretary-General',
              description: 'A UN That Works — Crisis-tested leadership for a dangerous world.',
              url: 'https://grossiforun.org',
              about: {
                '@type': 'Person',
                name: 'Rafael Grossi',
                jobTitle: 'IAEA Director General',
                description: 'Candidate for UN Secretary-General. 40 years of diplomatic experience. First Latin American IAEA Director General.',
                nationality: { '@type': 'Country', name: 'Argentina' },
                sameAs: [
                  'https://twitter.com/rafaborun',
                  'https://linkedin.com/in/rafaelgrossi',
                ],
              },
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
