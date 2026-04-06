import { handleGetPost } from '../../shared/handlers'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  return handleGetPost(slug)
}
