import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPosts } from 'api/shared/functions'
import type { PostsResponse } from 'api/types'
import { formatDate } from 'utils'

const blogPosts = [
  {
    slug: 'example-mdx-metadata',
    title: 'Example MDX with Metadata',
    description: 'An example blog post written in MDX with metadata',
    date: '2024-01-15',
  },
  {
    slug: 'exploring-the-intersection-of-design-ai-and-design-engineering',
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'A deep dive into how AI is changing design engineering',
    date: '2024-01-10',
  },
]

export default async function BlogIndex() {
  try {
    const posts: PostsResponse['posts'] = await getPosts()

    if (!posts) {
      notFound()
    }
    return (
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold">Blog</h1>
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-gray-200 pb-8"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block no-underline"
                >
                  <h2 className="mb-2 text-2xl font-semibold">{post.title}</h2>
                  <p className="text-muted-foreground mb-2 line-clamp-2">
                    {post.desc}
                  </p>
                  <time className="text-muted-foreground text-sm">
                    {formatDate(post.publishedAt)}
                  </time>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching post:', error)
    notFound()
  }
}
