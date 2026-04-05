'use client'
import { TextEffect } from 'motion-primitives/text-effect'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { EMAIL, ABOUT } from 'data'

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
