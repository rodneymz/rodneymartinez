import { notFound } from 'next/navigation'
import { getPost } from '../../../api/shared/functions'

interface BlogPostProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params

  try {
    const post = await getPost(slug)

    if (!post) {
      notFound()
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <article className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold">{post.title}</h1>
          <div className="prose prose-lg max-w-none">
            {post.content.content?.text && <p>{post.content.content.text}</p>}
          </div>
        </article>
      </div>
    )
  } catch (error) {
    console.error('Error fetching post:', error)
    notFound()
  }
}

export function generateStaticParams() {
  return [
    { slug: 'example-mdx-metadata' },
    { slug: 'exploring-the-intersection-of-design-ai-and-design-engineering' },
  ]
}
