import { configureReactToolbox } from '@/libs/configureReactToolbox'
import { appTheme } from '@/SampleApp/styles/theme'
import { appSetupLogger } from '../logger'

export type AppProviderConfiguration = typeof appProviderConfiguration

export const appProviderConfiguration = {
  loggerSetup: appSetupLogger,
  theme: appTheme,
  portalNames: {
    default: 'default',
    rightSideBar: 'rightSideBar'
  }
}

export const {
  components: AppReactToolboxComponents,
  hooks: appReactToolboxHooks
} = configureReactToolbox<AppProviderConfiguration>()
