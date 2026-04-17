import { handleGetPortfolios } from '../shared/handlers'

export async function GET(request: Request) {
  return handleGetPortfolios(request)
}
