import { configureContainerFlex } from '@/components/ContainerFlex'
import { configurePortal } from '@/components/Portal'
import { configurePortalPlaceHolder } from '@/components/Portal/PortalPlaceHolder'
import { configureUseLogger } from '@/hooks/useLogger'
import { configureUseTheme } from '@/hooks/useTheme'
import { IProviderValue, IConfigurationParameters } from '@/types'
import {
  configureGetDataTestAttributeProp,
  configureGetDataTestAttributeValue
} from '../dataTestAttribute/hooks'
import { configureNamedContext } from '../namedContext'

/**
 * Configure React Toolbox with a defined IReactToolboxProviderConfiguration configuration.
 */
export function configure<
  TReactToolboxConfiguration extends IConfigurationParameters
>(contextName: string, contextValue?: TReactToolboxConfiguration) {
  const namedContext = configureNamedContext<
    IProviderValue<TReactToolboxConfiguration>
  >(contextName, contextValue)

  return {
    components: {
      ProviderNamedContext: namedContext.ProviderNamedContext,
      ContainerFlex: configureContainerFlex(namedContext),
      Portal: configurePortal(namedContext),
      PortalPlaceHolder: configurePortalPlaceHolder(namedContext)
    },
    hooks: {
      useNamedContext: namedContext.useNamedContext,
      useLogger: configureUseLogger(namedContext),
      useTheme: configureUseTheme(namedContext)
    },
    helpers: {
      getDataTestAttributeValue:
        configureGetDataTestAttributeValue<
          TReactToolboxConfiguration['roles']
        >(),
      getDataTestAttributeProp:
        configureGetDataTestAttributeProp<TReactToolboxConfiguration['roles']>()
    }
  }
}
