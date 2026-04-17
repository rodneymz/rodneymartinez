import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getPortfolios } from 'api/shared/functions'

import { AppBreadcrumb } from 'custom/breadcrumb'

import type { PortfoliosResponse } from 'api/types'

export default async function WorkIndex() {
  try {
    const portfolios: PortfoliosResponse['portfolios'] = await getPortfolios()

    if (!portfolios) {
      notFound()
    }

    return (
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          <AppBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Work' }]} />
          <h1 className="mb-8 mt-4 text-4xl font-bold">Work</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {portfolios.map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className="group block no-underline"
              >
                <article className="border-border overflow-hidden rounded-lg border transition-colors hover:bg-gray-50 dark:hover:bg-zinc-900">
                  {item.thumbnail && (
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={item.thumbnail.url}
                        alt={item.title}
                        width={item.thumbnail.width ?? 800}
                        height={item.thumbnail.height ?? 450}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    {item.role && (
                      <p className="text-muted-foreground text-sm">{item.role}</p>
                    )}
                    {item.yearCompleted && (
                      <p className="text-muted-foreground text-sm">{item.yearCompleted}</p>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching portfolios:', error)
    notFound()
  }
}
