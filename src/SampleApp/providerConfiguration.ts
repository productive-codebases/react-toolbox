import { appSetupLogger } from './libs/logger'
import { appTheme } from './styles/theme'

export type AppProviderConfiguration = typeof appProviderConfiguration

export const appProviderConfiguration = {
  loggerSetup: appSetupLogger,
  theme: appTheme
}
