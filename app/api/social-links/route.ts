import { handleGetSocialLinks } from '../shared/handlers'

export async function GET() {
  return handleGetSocialLinks()
}
