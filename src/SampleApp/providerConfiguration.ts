import { newLogger } from '@/libs/logger'
import { appTheme } from './styles/theme'

export type AppProviderConfiguration = typeof appProviderConfiguration

export const appProviderConfiguration = {
  logger: newLogger('react-toolbox')('components'),
  theme: appTheme
}
