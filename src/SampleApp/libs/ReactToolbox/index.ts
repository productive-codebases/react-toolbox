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

/**
 * Experimentation
 */
export const {
  components: {
    ProviderNamedContext: ProviderApp,
    ContainerFlex,
    Portal,
    PortalPlaceHolder
  },
  hooks: {
    useNamedContext: useAppContext,
    useLogger: useAppLogger,
    useTheme: useAppTheme
  },
  helpers: {
    getDataTestAttributeProp: getAppDataTestAttributeProp,
    getDataTestAttributeValue: getAppDataTestAttributeValue
  }
} = configureReactToolbox<AppProviderConfiguration>(
  'appContext2',
  appProviderConfiguration
)
