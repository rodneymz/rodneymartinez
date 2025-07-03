export interface Post {
  id: string
  title: string
  desc: string
  stage: string
  slug: string
  publishedAt: string
  content?: Array<{
    content: {
      text: string
    }
  }>
}