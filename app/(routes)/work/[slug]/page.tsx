import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { AppBreadcrumb } from 'custom/breadcrumb'
import { PostNavigation } from 'custom/post-navigation'
import { getPortfolio, getPortfolios } from 'api/shared/functions'


interface WorkPostProps {
  params: Promise<{
    slug: string
  }>
}

export default async function WorkPost({ params }: WorkPostProps) {
  const { slug } = await params

  try {
    const [portfolio, allPortfolios] = await Promise.all([
      getPortfolio(slug),
      getPortfolios({ first: 100 }),
    ])

    if (!portfolio) {
      notFound()
    }

    const currentIndex = allPortfolios.findIndex((p) => p.slug === slug)
    const prev = allPortfolios[currentIndex - 1]
    const next = allPortfolios[currentIndex + 1]

    return (
      <div className="container mx-auto space-y-6">
        <AppBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Work', href: '/work' }, { label: portfolio.title }]} />
        <article className="mx-auto max-w-4xl space-y-8">
          <header className="space-y-2">
            <h1 className="text-4xl font-bold">{portfolio.title}</h1>
            <div className="text-muted-foreground flex gap-3 text-sm">
              {portfolio.role && <span>{portfolio.role}</span>}
              {portfolio.yearCompleted && <span>{portfolio.yearCompleted}</span>}
              {portfolio.company && (
                <Link
                  href={`/work-experience/${portfolio.company.slug}`}
                  className="hover:text-foreground underline"
                >
                  {portfolio.company.name}
                </Link>
              )}
            </div>
          </header>

          {portfolio.heroImage && (
            <div className="aspect-video overflow-hidden rounded-lg">
              <Image
                src={portfolio.heroImage.url}
                alt={portfolio.title}
                width={portfolio.heroImage.width ?? 1200}
                height={portfolio.heroImage.height ?? 675}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          )}

          {portfolio.content?.html && (
            <div
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: portfolio.content.html }}
            />
          )}
        </article>
        <PostNavigation
          prev={prev ? { label: prev.title, href: `/work/${prev.slug}` } : undefined}
          next={next ? { label: next.title, href: `/work/${next.slug}` } : undefined}
        />
      </div>
    )
  } catch (error) {
    console.error('Error fetching portfolio:', error)
    notFound()
  }
}

export async function generateStaticParams() {
  try {
    const portfolios = await getPortfolios()
    return portfolios.map((item) => ({ slug: item.slug }))
  } catch {
    return []
  }
}
