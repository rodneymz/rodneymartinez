import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from 'custom/header'
import { Footer } from 'custom/footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://rodneymartinez.com/'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Rodney Martinez Portfolio',
    template: '%s | Rodney',
  },
  description: 'Rodney Martinez is a Product Designer based in Austin,TX',
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="mx-auto w-full">
              <Header />
              <div className="mx-auto mt-30 max-w-screen-2xl">{children}</div>

              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
