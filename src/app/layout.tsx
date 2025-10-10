import type { Metadata, Viewport } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/navbar/navbar.component'
import { ThemeProvider } from '@/components/providers/themeProvider'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-rubik',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Diego Rios',
  description: "Diego Rios's portfolio",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://diegohq.dev',
    siteName: 'DiegoHQ',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={`${rubik.className} antialiased pb-12`}>
          <Navbar />
          {children}
        </body>
      </html>
    </ThemeProvider>
  )
}
