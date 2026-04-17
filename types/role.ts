import type { RichText } from './rich-text'

export interface Role {
  title: string
  startDate: string
  endDate?: string
  location?: string
  description?: RichText
}
