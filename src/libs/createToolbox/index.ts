import { configureContainerFlex } from '@/components/ContainerFlex'
import { configurePortal } from '@/components/Portal'
import { configurePortalPlaceHolder } from '@/components/Portal/PortalPlaceHolder'
import { configureUseLogger } from '@/hooks/useLogger'
import { configureUseTheme } from '@/hooks/useTheme'
import { IConfiguration, IProviderValue, Toolbox } from '@/types'
import {
  configureGetDataTestAttributeProp,
  configureGetDataTestAttributeValue
} from '../dataTestAttribute/hooks'
import { createNamedContext } from '../namedContext'
import { createConfiguration } from './createConfiguration'

/**
 * Create a new React Toolbox with a defined IReactToolboxProviderConfiguration configuration.
 */
export function createToolbox<TConfiguration extends IConfiguration>(
  name: string,
  configuration?: TConfiguration
): Toolbox<TConfiguration> {
  const namedContext = createNamedContext<IProviderValue<TConfiguration>>(
    name,
    configuration
  )

  return {
    name,
    configuration: configuration ?? createConfiguration(),
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
        configureGetDataTestAttributeValue<TConfiguration['roles']>(),
      getDataTestAttributeProp:
        configureGetDataTestAttributeProp<TConfiguration['roles']>()
    }
  }
}
