export interface GraphQLResponse<T> {
  data?: T
  errors?: Array<{ message: string }>
}

export interface PaginationOptions {
  first?: number
  skip?: number
}