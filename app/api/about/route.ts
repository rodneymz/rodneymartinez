import { handleGetAbout } from '../shared/handlers'

export async function GET() {
  return handleGetAbout()
}
