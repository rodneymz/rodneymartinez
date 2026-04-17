import { graphqlRequest } from './graphql-client'

import type {
  AboutsResponse,
  CompaniesResponse,
  PaginationOptions,
  PortfoliosResponse,
  PostsResponse,
  SocialLinksResponse,
  TagsResponse,
} from '../types'
import type { About, Company, Portfolio, Post, SocialLink, Tag } from 'types'

// Posts functions
export async function getPosts(options: PaginationOptions = {}) {
  const { first = 10, skip = 0 } = options

  const data = await graphqlRequest<PostsResponse>(
    `query Posts($first: Int, $skip: Int) {
        posts(first: $first, skip: $skip, orderBy: publishedAt_DESC) {
          id
          title
          desc
          stage
          slug
          publishedAt
          publishDate
          externalPublishStatus
          tags {
            id
            name
            slug
            color
          }
        }
      }`,
    { first, skip }
  )

  return data.posts || []
}

export async function getPost(slug: string): Promise<Post | null> {
  const data = await graphqlRequest<PostsResponse>(
    `query Post($slug: String!) {
        posts(where: {slug: $slug}) {
          id
          title
          slug
          publishedAt
          publishDate
          canonicalUrl
          externalId
          externalUrl
          externalPublishStatus
          content {
            ... on Content {
              content {
                html
                text
              }
            }
          }
          tags {
            id
            name
            slug
            color
          }
        }
      }`,
    { slug }
  )

  return data.posts?.[0] ?? null
}

// Companies functions
export async function getCompanies(options: PaginationOptions = {}) {
  const { first = 10, skip = 0 } = options

  const data = await graphqlRequest<CompaniesResponse>(
    `query Companies($first: Int, $skip: Int) {
        companies(first: $first, skip: $skip) {
          id
          name
          slug
          employmentType
          logo {
            id
            url
            fileName
            mimeType
            width
            height
          }
          roles(orderBy: startDate_DESC) {
            title
            startDate
            endDate
            location
          }
        }
      }`,
    { first, skip }
  )

  const companies = data.companies || []

  return companies.sort((a, b) => {
    const aDate = a.roles?.[0]?.startDate ?? ''
    const bDate = b.roles?.[0]?.startDate ?? ''
    return bDate.localeCompare(aDate)
  })
}

export async function getCompany(slug: string): Promise<Company | null> {
  const data = await graphqlRequest<CompaniesResponse>(
    `query Company($slug: String!) {
        companies(where: {slug: $slug}) {
          id
          name
          slug
          employmentType
          narrative {
            html
          }
          logo {
            id
            url
            fileName
            mimeType
            width
            height
          }
          roles {
            title
            startDate
            endDate
            location
            description {
              html
            }
          }
          portfolio {
            id
            title
            slug
            role
            yearCompleted
            thumbnail {
              id
              url
              fileName
              mimeType
              width
              height
            }
          }
        }
      }`,
    { slug }
  )

  return data.companies?.[0] ?? null
}

// Portfolio functions
export async function getPortfolios(options: PaginationOptions = {}) {
  const { first = 10, skip = 0 } = options

  const data = await graphqlRequest<PortfoliosResponse>(
    `query Portfolios($first: Int, $skip: Int) {
        portfolios(first: $first, skip: $skip, orderBy: yearCompleted_DESC) {
          id
          title
          slug
          role
          yearCompleted
          thumbnail {
            id
            url
            fileName
            mimeType
            width
            height
          }
          company {
            id
            name
            slug
          }
        }
      }`,
    { first, skip }
  )

  return data.portfolios || []
}

export async function getPortfolio(slug: string): Promise<Portfolio | null> {
  const data = await graphqlRequest<PortfoliosResponse>(
    `query Portfolio($slug: String!) {
        portfolios(where: {slug: $slug}) {
          id
          title
          slug
          role
          yearCompleted
          content {
            html
          }
          heroImage {
            id
            url
            fileName
            mimeType
            width
            height
          }
          thumbnail {
            id
            url
            fileName
            mimeType
            width
            height
          }
          company {
            id
            name
            slug
          }
        }
      }`,
    { slug }
  )

  return data.portfolios?.[0] ?? null
}

// About function
export async function getAbout(): Promise<About | null> {
  const data = await graphqlRequest<AboutsResponse>(
    `query Abouts {
        abouts(first: 1) {
          id
          headline
          bio {
            html
          }
        }
      }`
  )

  return data.abouts?.[0] ?? null
}

// Social links function
export async function getSocialLinks(): Promise<SocialLink[]> {
  const data = await graphqlRequest<SocialLinksResponse>(
    `query SocialLinks {
        socialLinks(orderBy: sortOrder_ASC) {
          id
          label
          url
          icon
          sortOrder
        }
      }`
  )

  return data.socialLinks || []
}

// Tags functions
export async function getTags(): Promise<Tag[]> {
  const data = await graphqlRequest<TagsResponse>(
    `query Tags {
        tags(orderBy: name_ASC) {
          id
          name
          slug
          color
        }
      }`
  )

  return data.tags || []
}

export async function getTag(slug: string): Promise<Tag | null> {
  const data = await graphqlRequest<TagsResponse>(
    `query Tag($slug: String!) {
        tags(where: {slug: $slug}) {
          id
          name
          slug
          color
        }
      }`,
    { slug }
  )

  return data.tags?.[0] ?? null
}
