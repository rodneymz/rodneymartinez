import { handleGetCompanies } from '../shared/handlers'

export async function GET(request: Request) {
  return handleGetCompanies(request)
}
