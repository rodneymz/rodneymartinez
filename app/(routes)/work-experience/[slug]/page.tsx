import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { formatWorkDate } from 'utils'

import { AppBreadcrumb } from 'custom/breadcrumb'
import { PostNavigation } from 'custom/post-navigation'
import { getCompanies, getCompany } from 'api/shared/functions'

import type { CompanyResponse } from 'api/types'

interface WorkExperiencePostProps {
  params: Promise<{
    slug: string
  }>
}

export default async function WorkExperiencePost({ params }: WorkExperiencePostProps) {
  const { slug } = await params

  try {
    const [company, allCompanies]: [CompanyResponse['company'], Awaited<ReturnType<typeof getCompanies>>] =
      await Promise.all([getCompany(slug), getCompanies({ first: 100 })])

    if (!company) {
      notFound()
    }

    const currentIndex = allCompanies.findIndex((c) => c.slug === slug)
    const prev = allCompanies[currentIndex - 1]
    const next = allCompanies[currentIndex + 1]

    return (
      <div className="container mx-auto space-y-6">
        <AppBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Work Experience', href: '/work-experience' }, { label: company.name }]} />
        <article className="mx-auto max-w-4xl space-y-10">
          <header className="flex items-start gap-6">
            {company.logo && (
              <Image
                src={company.logo.url}
                alt={`${company.name} logo`}
                width={64}
                height={64}
                className="rounded-lg object-contain"
              />
            )}
            <div>
              <h1 className="text-4xl font-bold">{company.name}</h1>
            </div>
          </header>

          {company.narrative?.html && (
            <div
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: company.narrative.html }}
            />
          )}

          {company.roles && company.roles.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold">Roles</h2>
              <div className="space-y-8">
                {company.roles.map((role, index) => (
                  <div key={index} className="border-l-2 border-gray-200 pl-6">
                    <h3 className="text-xl font-medium">{role.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {formatWorkDate(role.startDate)} —{' '}
                      {role.endDate ? formatWorkDate(role.endDate) : 'Present'}
                      {role.location && ` · ${role.location}`}
                    </p>
                    {role.description?.html && (
                      <div
                        className="prose dark:prose-invert mt-3 max-w-none"
                        dangerouslySetInnerHTML={{ __html: role.description.html }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {company.portfolio && company.portfolio.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Related Work</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {company.portfolio.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/work/${item.slug}`}
                    className="border-border rounded-lg border p-4 no-underline transition-colors hover:bg-gray-50 dark:hover:bg-zinc-900"
                  >
                    <p className="font-medium">{item.title}</p>
                    {item.role && (
                      <p className="text-muted-foreground text-sm">{item.role}</p>
                    )}
                    {item.yearCompleted && (
                      <p className="text-muted-foreground text-sm">{item.yearCompleted}</p>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
        <PostNavigation
          prev={prev ? { label: prev.name, href: `/work-experience/${prev.slug}` } : undefined}
          next={next ? { label: next.name, href: `/work-experience/${next.slug}` } : undefined}
        />
      </div>
    )
  } catch (error) {
    console.error('Error fetching company:', error)
    notFound()
  }
}

export async function generateStaticParams() {
  try {
    const companies = await getCompanies()
    return companies.map((company) => ({ slug: company.slug }))
  } catch {
    return []
  }
}
