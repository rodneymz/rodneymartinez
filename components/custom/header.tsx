'use client'
import Link from 'next/link'

import { ABOUT, EMAIL } from 'data'
import { Menu } from 'lucide-react'
import { TextEffect } from 'motion-primitives/text-effect'

import { Button } from '../ui/button'

export function Header() {
  return (
    <header className="mb-24 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium">
          Rodney Martinez
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-muted-foreground text-sm"
          delay={0.5}
        >
          {`${ABOUT.headline}`}
        </TextEffect>
      </div>
      <Button>
        <a href={`mailto:${EMAIL}`}>Contact</a>
      </Button>
    </header>
  )
}
