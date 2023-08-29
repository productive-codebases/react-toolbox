import { configure } from '@/libs/configurator'
import { createConfiguration } from '@/libs/configurator/defaultConfiguration'

const appConfiguration = createConfiguration({
  loggerMapping: {
    AppSample: {
      components: 'components'
    }
  },
  theme: {
    color: {
      red: 'red',
      blue: 'blue'
    },
    sizes: {
      small: '5px',
      default: '10px',
      large: '15px'
    }
  },
  roles: {
    customContainer: 'customContainer'
  },
  portalNames: {
    default: 'default',
    rightSideBar: 'rightSideBar'
  }
})

/**
 * Configure the toolbox for the AppSample application.
 */
export const {
  components: {
    ProviderNamedContext: AppProvider,
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
} = configure('app', appConfiguration)
