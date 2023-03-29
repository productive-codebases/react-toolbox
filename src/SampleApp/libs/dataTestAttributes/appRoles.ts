import { roles } from '@/libs/dataTestAttribute/roles'
import { deepMerge } from '@productive-codebases/toolbox'

export const appRoles = deepMerge([
  roles,
  {
    customContainer: 'customContainer'
  }
])
