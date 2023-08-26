import { configureContainerFlex } from '@/components/ContainerFlex'
import { configurePortal } from '@/components/Portal'
import { configurePortalPlaceHolder } from '@/components/Portal/PortalPlaceHolder'
import { configureReactToolboxProvider } from '@/components/ReactToolboxProvider'
import { configureUseLogger } from '@/hooks/useLogger'
import { configureUseReactToolboxContext } from '@/hooks/useReactToolboxContext'
import { configureUseTheme } from '@/hooks/useTheme'
import { IReactToolboxProviderConfiguration } from '@/types'
import {
  configureGetDataTestAttributeProp,
  configureGetDataTestAttributeValue
} from '../dataTestAttribute/hooks'

/**
 * Configure React Toolbox with a defined IReactToolboxProviderConfiguration configuration.
 */
export function configureReactToolbox<
  TReactToolboxProviderConfiguration extends IReactToolboxProviderConfiguration
>(contextName: string) {
  return {
    components: {
      ReactToolboxProvider:
        configureReactToolboxProvider<TReactToolboxProviderConfiguration>(
          contextName
        ),
      ContainerFlex:
        configureContainerFlex<TReactToolboxProviderConfiguration>(contextName),
      Portal: configurePortal<TReactToolboxProviderConfiguration>(contextName),
      PortalPlaceHolder:
        configurePortalPlaceHolder<TReactToolboxProviderConfiguration>(
          contextName
        )
    },
    hooks: {
      useReactToolboxContext:
        configureUseReactToolboxContext<TReactToolboxProviderConfiguration>(
          contextName
        ),
      useLogger:
        configureUseLogger<TReactToolboxProviderConfiguration>(contextName),
      useTheme:
        configureUseTheme<TReactToolboxProviderConfiguration>(contextName)
    },
    helpers: {
      getDataTestAttributeValue:
        configureGetDataTestAttributeValue<
          TReactToolboxProviderConfiguration['roles']
        >(),
      getDataTestAttributeProp:
        configureGetDataTestAttributeProp<
          TReactToolboxProviderConfiguration['roles']
        >()
    }
  }
}
