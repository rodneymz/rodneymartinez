import { handleGetProjects } from '../shared/handlers'

export async function GET(request: Request) {
  return handleGetProjects(request)
}
