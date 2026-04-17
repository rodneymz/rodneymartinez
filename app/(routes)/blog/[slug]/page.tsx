import { notFound } from 'next/navigation'

import { formatDate } from 'utils'

import { AppBreadcrumb } from 'custom/breadcrumb'
import { PostNavigation } from 'custom/post-navigation'

import { getPost, getPosts } from '../../../api/shared/functions'

import type { PostResponse } from 'api/types'

interface BlogPostProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params

  try {
    const [post, allPosts]: [PostResponse['post'], Awaited<ReturnType<typeof getPosts>>] =
      await Promise.all([getPost(slug), getPosts({ first: 100 })])

    if (!post) {
      notFound()
    }

    const currentIndex = allPosts.findIndex((p) => p.slug === slug)
    const prev = allPosts[currentIndex - 1]
    const next = allPosts[currentIndex + 1]

    return (
      <div className="container mx-auto space-y-6">
        <AppBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]} />
        <article className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p>{formatDate(post.publishedAt)}</p>
          <div className="max-w-none">
            {post.content?.content.text && <p>{post.content.content.text}</p>}
          </div>
        </article>
        <PostNavigation
          prev={prev ? { label: prev.title, href: `/blog/${prev.slug}` } : undefined}
          next={next ? { label: next.title, href: `/blog/${next.slug}` } : undefined}
        />
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
