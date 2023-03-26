import { themes } from '@/styles/themes'
import { deepMerge } from '@productive-codebases/toolbox'

export const appTheme = deepMerge([
  themes.default,
  {
    color: {
      red: 'red',
      blue: 'blue'
    },
    sizes: {
      small: '5px',
      default: '10px',
      large: '15px'
    }
  }
])

export type AppTheme = typeof appTheme
