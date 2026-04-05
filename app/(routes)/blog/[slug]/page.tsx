import { notFound } from 'next/navigation'
import { getPost } from '../../../api/shared/functions'
import type { PostResponse } from 'api/types'
import { formatDate } from 'utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface BlogPostProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params

  try {
    const post: PostResponse['post'] = await getPost(slug)

    if (!post) {
      notFound()
    }

    return (
      <div className="container mx-auto space-y-6">
        <Link href={`/blog/`} className="block">
          <Button variant="ghost" className="-ml-3">
            <ArrowLeft />
            Blog
          </Button>
        </Link>
        <article className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p>{formatDate(post.publishedAt)}</p>
          <div className="max-w-none">
            {post.content?.content.text && <p>{post.content.content.text}</p>}
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
