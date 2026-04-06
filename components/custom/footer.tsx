'use client'
import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { AnimatedBackground } from 'motion-primitives/animated-background'
import { TextLoop } from 'motion-primitives/text-loop'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      {THEMES_OPTIONS.map((theme) => {
        return (
          <button
            key={theme.id}
            className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
            type="button"
            aria-label={`Switch to ${theme.label} theme`}
            data-id={theme.id}
          >
            {theme.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}

export function Footer() {
  return (
    <footer className="mx-auto mt-24 w-full justify-center border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex w-full max-w-screen-2xl justify-between">
        <div className="flex-col">
          <div className="text-xs text-zinc-500">© 2026 Rodney Martinez</div>
          <div className="text-xs text-zinc-500">
            Built with{' '}
            <TextLoop>
              <span>NextJs</span>
              <span>Tailwind</span>
              <span>Hygraph CMS</span>
            </TextLoop>
          </div>
        </div>
        <div className="text-xs text-zinc-400">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
