'use client'
import { TextEffect } from 'motion-primitives/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed z-50 mb-8 flex w-full items-center justify-center bg-zinc-50/10 p-5 backdrop-blur-sm dark:bg-zinc-950/90">
      <div className="max-w-screen-2xl flex-1 flex-col">
        <Link href="/" className="font-medium text-black dark:text-white">
          Rodney Martinez
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Product Designer
        </TextEffect>
      </div>
    </header>
  )
}
