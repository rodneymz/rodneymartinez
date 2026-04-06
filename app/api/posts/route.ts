import { handleGetPosts } from '../shared/handlers'

export async function GET(request: Request) {
  return handleGetPosts(request)
}
