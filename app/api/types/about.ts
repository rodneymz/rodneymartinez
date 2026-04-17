import type { About } from 'types'

// GraphQL response (Hygraph returns plural array)
export interface AboutsResponse {
  abouts: About[]
}

// API endpoint response
export interface AboutResponse {
  about: About
}
