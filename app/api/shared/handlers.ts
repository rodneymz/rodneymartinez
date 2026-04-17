import {
  getAbout,
  getCompanies,
  getCompany,
  getPortfolio,
  getPortfolios,
  getPost,
  getPosts,
  getSocialLinks,
  getTag,
  getTags,
} from './functions'
import {
  createApiResponse,
  createErrorResponse,
  handleApiError,
} from './graphql-client'

// Posts
export async function handleGetPosts(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const first = searchParams.get('first') ? parseInt(searchParams.get('first')!) : undefined
    const skip = searchParams.get('skip') ? parseInt(searchParams.get('skip')!) : undefined

    const posts = await getPosts({ first, skip })
    return createApiResponse(posts)
  } catch (error) {
    return handleApiError(error)
  }
}

export async function handleGetPost(slug: string) {
  try {
    if (!slug) return createErrorResponse('Slug parameter is required', undefined, 400)

    const post = await getPost(slug)
    if (!post) return createErrorResponse('Post not found', undefined, 404)

    return createApiResponse(post)
  } catch (error) {
    return handleApiError(error)
  }
}

// Companies
export async function handleGetCompanies(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const first = searchParams.get('first') ? parseInt(searchParams.get('first')!) : undefined
    const skip = searchParams.get('skip') ? parseInt(searchParams.get('skip')!) : undefined

    const companies = await getCompanies({ first, skip })
    return createApiResponse(companies)
  } catch (error) {
    return handleApiError(error)
  }
}

export async function handleGetCompany(slug: string) {
  try {
    if (!slug) return createErrorResponse('Slug parameter is required', undefined, 400)

    const company = await getCompany(slug)
    if (!company) return createErrorResponse('Company not found', undefined, 404)

    return createApiResponse(company)
  } catch (error) {
    return handleApiError(error)
  }
}

// Portfolios
export async function handleGetPortfolios(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const first = searchParams.get('first') ? parseInt(searchParams.get('first')!) : undefined
    const skip = searchParams.get('skip') ? parseInt(searchParams.get('skip')!) : undefined

    const portfolios = await getPortfolios({ first, skip })
    return createApiResponse(portfolios)
  } catch (error) {
    return handleApiError(error)
  }
}

export async function handleGetPortfolio(slug: string) {
  try {
    if (!slug) return createErrorResponse('Slug parameter is required', undefined, 400)

    const portfolio = await getPortfolio(slug)
    if (!portfolio) return createErrorResponse('Portfolio not found', undefined, 404)

    return createApiResponse(portfolio)
  } catch (error) {
    return handleApiError(error)
  }
}

// About
export async function handleGetAbout() {
  try {
    const about = await getAbout()
    if (!about) return createErrorResponse('About not found', undefined, 404)

    return createApiResponse(about)
  } catch (error) {
    return handleApiError(error)
  }
}

// Social links
export async function handleGetSocialLinks() {
  try {
    const socialLinks = await getSocialLinks()
    return createApiResponse(socialLinks)
  } catch (error) {
    return handleApiError(error)
  }
}

// Tags
export async function handleGetTags() {
  try {
    const tags = await getTags()
    return createApiResponse(tags)
  } catch (error) {
    return handleApiError(error)
  }
}

export async function handleGetTag(slug: string) {
  try {
    if (!slug) return createErrorResponse('Slug parameter is required', undefined, 400)

    const tag = await getTag(slug)
    if (!tag) return createErrorResponse('Tag not found', undefined, 404)

    return createApiResponse(tag)
  } catch (error) {
    return handleApiError(error)
  }
}
