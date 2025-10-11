import type { Metadata, Viewport } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rubik.className} antialiased pb-12`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
