import { configureReactToolbox } from '@/libs/configureReactToolbox'
import { appTheme } from '@/SampleApp/styles/theme'
import { appRoles } from '../dataTestAttributes/appRoles'
import { appSetupLogger } from '../logger'

export type AppProviderConfiguration = typeof appProviderConfiguration

export const appProviderConfiguration = {
  loggerSetup: appSetupLogger,
  theme: appTheme,
  roles: appRoles,
  portalNames: {
    default: 'default',
    rightSideBar: 'rightSideBar'
  }
}

export const {
  components: AppReactToolboxComponents,
  hooks: appReactToolboxHooks,
  helpers: appReactToolboxHelpers
} = configureReactToolbox<AppProviderConfiguration>('appContext')
