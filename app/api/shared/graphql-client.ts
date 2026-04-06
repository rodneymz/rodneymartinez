import type { GraphQLResponse } from '../types'

export async function graphqlRequest<T>(
  query: string,
  variables?: Record<string, any>
): Promise<T> {
  const response = await fetch(`${process.env.NEXT_HYGRAPH_ENDPOINT!}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const json: GraphQLResponse<T> = await response.json()

  if (json.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`)
  }

  if (!json.data) {
    throw new Error('No data returned from GraphQL query')
  }

  return json.data
}

export function createApiResponse<T>(data: T, status: number = 200): Response {
  return Response.json(data, { status })
}

export function createErrorResponse(
  message: string,
  details?: string,
  status: number = 500
): Response {
  return Response.json({ error: message, details }, { status })
}

export function handleApiError(error: unknown): Response {
  console.error('API Error:', error)
  const errorMessage = error instanceof Error ? error.message : 'Unknown error'
  return createErrorResponse('Request failed', errorMessage)
}
