import { handleGetCompany } from '../../shared/handlers'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  return handleGetCompany(slug)
}
