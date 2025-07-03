import Link from 'next/link'

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

export default function BlogIndex() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8">
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-2">{post.description}</p>
                <time className="text-sm text-gray-500">{post.date}</time>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}