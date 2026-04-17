import type { Asset } from './asset'
import type { EmploymentType } from './enums'
import type { Portfolio } from './portfolio'
import type { RichText } from './rich-text'
import type { Role } from './role'

export interface Company {
  id: string
  name: string
  slug: string
  logo?: Asset
  employmentType?: EmploymentType
  narrative?: RichText
  roles?: Role[]
  portfolio?: Portfolio[]
}
