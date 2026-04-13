import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import GSAPProvider from './gsap-provider'

const _geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'JewelSync - Smart Jewelry Retail POS System',
  description: 'Complete POS system for jewelry retailers. Real-time inventory tracking, automated billing, CRM, and advanced analytics. Transform your jewelry business today.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  // Preload critical images
  other: {
    'link': [
      { href: '/about-image1.webp', rel: 'preload', as: 'image', type: 'image/webp' },
      { href: '/solution-image.webp', rel: 'preload', as: 'image', type: 'image/webp' },
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_geist.className} antialiased`}>
        <GSAPProvider />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
