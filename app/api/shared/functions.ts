import { graphqlRequest } from './graphql-client'
import type { Post, Project } from 'types'
import type {
  PostsResponse,
  ProjectsResponse,
  PaginationOptions,
} from '../types'

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
        }
      }`,
    { first, skip }
  )

  return data.posts || []
}

export async function getPost(slug: string) {
  const data = await graphqlRequest<PostsResponse>(
    `query Post($slug: String!) {
        posts(where: {slug: $slug}) {
          title
          publishedAt
          content {
            ... on Content {
              content {
                text
              }
            }
          }
        }
      }`,
    { slug }
  )

  return data.posts?.[0] ?? null
}

// Projects functions
export async function getProjects(options: PaginationOptions = {}) {
  const { first = 10, skip = 0 } = options

  const data = await graphqlRequest<ProjectsResponse>(
    `query Projects($first: Int, $skip: Int) {
        projects(first: $first, skip: $skip, orderBy: publishedAt_DESC) {
          id
          title
          desc
          stage
          slug
          publishedAt
        }
      }`,
    { first, skip }
  )

  return data.projects || []
}

export async function getProject(slug: string): Promise<Project | null> {
  const data = await graphqlRequest<ProjectsResponse>(
    `query Project($slug: String!) {
        projects(where: {slug: $slug}) {
          title
          content {
            ... on Content {
              content {
                text
              }
            }
          }
        }
      }`,
    { slug }
  )

  const projects = data.projects || []
  return projects.length > 0 ? projects[0] : null
}
