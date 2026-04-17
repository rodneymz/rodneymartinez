import type { RichText } from './rich-text'

export interface About {
  id: string
  headline: string
  bio?: RichText
}
