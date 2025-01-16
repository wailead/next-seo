import { ChatBot, Footer, Header } from '@/components'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../styles/globals.css'

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
})

const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
  preload: true,
  fallback: ['Consolas', 'Monaco', 'Lucida Console', 'monospace'],
})

export const metadata: Metadata = {
  title: '와이리, 여행 인플루언서 마케팅의 시작',
  description: '여행 인플루언서,체험단 마케팅 무상 지원 플랫폼',
  keywords: '와이리, 여행, 인플루언서, 체험단, 마케팅',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: '와이리, 여행 인플루언서 마케팅의 시작',
    description: '여행 인플루언서,체험단 마케팅 무상 지원 플랫폼',
    images: [
      {
        url: '/assets/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '와이리 플랫폼 소개 이미지',
      },
    ],
    type: 'website',
    url: 'https://wairi.vercel.app/',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>
          {children}
          <ChatBot />
        </main>
        <Footer />
      </body>
    </html>
  )
}
