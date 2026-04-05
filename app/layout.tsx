import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, DM_Sans, Raleway } from 'next/font/google'
import './globals.css'
import { Header } from 'custom/header'
import { Footer } from 'custom/footer'
import { ThemeProvider } from 'next-themes'
import { cn } from "@/lib/utils";

const ralewayHeading = Raleway({subsets:['latin'],variable:'--font-heading'});

const dmSans = DM_Sans({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" suppressHydrationWarning className={cn("font-sans", dmSans.variable, ralewayHeading.variable)}>
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
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
