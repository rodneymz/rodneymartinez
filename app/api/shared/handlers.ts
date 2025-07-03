import { getPosts, getPost, getProjects, getProject } from './functions'
import { createApiResponse, createErrorResponse, handleApiError } from './graphql-client'

// Posts route handlers
export async function handleGetPosts(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const first = searchParams.get('first')
      ? parseInt(searchParams.get('first')!)
      : undefined
    const skip = searchParams.get('skip')
      ? parseInt(searchParams.get('skip')!)
      : undefined

    const posts = await getPosts({ first, skip })
    return createApiResponse(posts)
  } catch (error) {
    return handleApiError(error)
  }
}

export async function handleGetPost(slug: string) {
  try {
    if (!slug) {
      return createErrorResponse('Slug parameter is required', undefined, 400)
    }

    const post = await getPost(slug)
    
    if (!post) {
      return createErrorResponse('Post not found', undefined, 404)
    }

    return createApiResponse(post)
  } catch (error) {
    return handleApiError(error)
  }
}

// Projects route handlers
export async function handleGetProjects(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const first = searchParams.get('first')
      ? parseInt(searchParams.get('first')!)
      : undefined
    const skip = searchParams.get('skip')
      ? parseInt(searchParams.get('skip')!)
      : undefined

    const projects = await getProjects({ first, skip })
    return createApiResponse(projects)
  } catch (error) {
    return handleApiError(error)
  }
}

export async function handleGetProject(slug: string) {
  try {
    if (!slug) {
      return createErrorResponse('Slug parameter is required', undefined, 400)
    }

    const project = await getProject(slug)
    
    if (!project) {
      return createErrorResponse('Project not found', undefined, 404)
    }

    return createApiResponse(project)
  } catch (error) {
    return handleApiError(error)
  }
}