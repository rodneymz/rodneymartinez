'use client'
import Link from 'next/link'

import { TextEffect } from 'motion-primitives/text-effect'
import useSWR from 'swr'

import { Button } from '../ui/button'

import type { About, SocialLink } from 'types'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function Header() {
  const { data: about } = useSWR<About>('/api/about', fetcher)
  const { data: socialLinks } = useSWR<SocialLink[]>(
    '/api/social-links',
    fetcher
  )

  const emailLink = socialLinks?.find((l) => l.label.toUpperCase() === 'EMAIL')

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
          key={about?.headline ?? ''}
        >
          {about?.headline ?? ''}
        </TextEffect>
      </div>
      {emailLink && (
        <Button>
          <a href={`mailto:${emailLink.url}`}>Contact</a>
        </Button>
      )}
    </header>
  )
}
