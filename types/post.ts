import type { PublishStatus } from './enums'
import type { RichText } from './rich-text'
import type { Tag } from './tag'

export interface Post {
  id: string
  title: string
  slug: string
  desc?: string
  stage: string
  publishDate?: string
  publishedAt?: string
  canonicalUrl?: string
  externalId?: string
  externalUrl?: string
  externalPublishStatus: PublishStatus
  content?: {
    content: RichText
  }
  tags?: Tag[]
}
