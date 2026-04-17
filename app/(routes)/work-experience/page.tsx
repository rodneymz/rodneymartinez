import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getCompanies } from 'api/shared/functions'
import { AppBreadcrumb } from 'custom/breadcrumb'

import type { CompaniesResponse } from 'api/types'

const employmentTypeLabel: Record<string, string> = {
  FULL_TIME: 'Full Time',
  PART_TIME: 'Part Time',
  CONTRACT: 'Contract',
  FREELANCE: 'Freelance',
}

export default async function WorkExperienceIndex() {
  try {
    const companies: CompaniesResponse['companies'] = await getCompanies()

    if (!companies) {
      notFound()
    }

    return (
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          <AppBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Work Experience' }]} />
          <h1 className="mb-8 mt-4 text-4xl font-bold">Work Experience</h1>
          <div className="space-y-8">
            {companies.map((company) => {
              const latestRole = company.roles?.[0]
              return (
                <article
                  key={company.slug}
                  className="border-b border-gray-200 pb-8"
                >
                  <Link
                    href={`/work-experience/${company.slug}`}
                    className="block no-underline"
                  >
                    <div className="mb-1 flex items-center gap-3">
                      <h2 className="text-2xl font-semibold">{company.name}</h2>
                      {company.employmentType && (
                        <span className="text-muted-foreground text-sm">
                          {employmentTypeLabel[company.employmentType] ?? company.employmentType}
                        </span>
                      )}
                    </div>
                    {latestRole && (
                      <p className="text-muted-foreground">{latestRole.title}</p>
                    )}
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching companies:', error)
    notFound()
  }
}
