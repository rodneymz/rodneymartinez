import Link from 'next/link'

import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

type NavItem = { label: string; href: string }

export function PostNavigation({
  prev,
  next,
}: {
  prev?: NavItem
  next?: NavItem
}) {
  if (!prev && !next) return null

  return (
    <div className="mt-8 grid grid-cols-2 gap-4">
      <div>
        {prev && (
          <Button
            variant="ghost"
            asChild
            className="h-auto w-full flex-col items-start gap-1 rounded-xl border p-4 text-left"
          >
            <Link href={prev.href}>
              <span className="text-foreground w-full truncate text-base font-medium">
                {prev.label}
              </span>
              <span className="text-muted-foreground flex items-center gap-0.5 text-sm">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </span>
            </Link>
          </Button>
        )}
      </div>
      <div>
        {next && (
          <Button
            variant="ghost"
            asChild
            className="h-auto w-full flex-col items-end gap-1 rounded-xl border p-4 text-right"
          >
            <Link href={next.href}>
              <span className="text-foreground w-full truncate text-base font-medium">
                {next.label}
              </span>
              <span className="text-muted-foreground flex items-center gap-0.5 text-sm">
                Next
                <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
