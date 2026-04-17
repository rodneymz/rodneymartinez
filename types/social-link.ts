import type { SocialIcon } from './enums'

export interface SocialLink {
  id: string
  label: string
  url: string
  icon?: SocialIcon
  sortOrder?: number
}
