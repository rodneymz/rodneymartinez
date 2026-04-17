import type { Asset } from './asset'
import type { RichText } from './rich-text'

export interface Portfolio {
  id: string
  title: string
  slug: string
  role?: string
  yearCompleted?: number
  heroImage?: Asset
  thumbnail?: Asset
  content?: RichText
  company?: {
    id: string
    name: string
    slug: string
  }
}
