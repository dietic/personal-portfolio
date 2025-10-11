import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { Locale, SUPPORTED_LOCALES } from '@/i18n/config'
import Navbar from '@/components/shared/navbar/navbar.component'

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!SUPPORTED_LOCALES.includes(locale as Locale)) {
    notFound()
  }

  return (
    <NextIntlClientProvider locale={locale}>
      <Navbar />
      {children}
      <footer className="w-full pb-4 text-center">
        <span className="text-sm text-title/50">&copy; 2025 DiegoHQ</span>
      </footer>
    </NextIntlClientProvider>
  )
}
