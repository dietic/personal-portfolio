import type { Metadata } from 'next'
import { Geist, Geist_Mono, Rubik } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/navbar/navbar.component'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-rubik',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Diego Rios',
  description: "Diego Rios's portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased min-h-[20000px]`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
