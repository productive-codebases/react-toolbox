import { ContainerFlex } from '@/components/ContainerFlex'
import { Portal } from '@/components/Portal'
import { PortalPlaceHolder } from '@/components/Portal/PortalPlaceHolder'
import { ReactToolboxProvider } from '@/components/ReactToolboxProvider'
import { useLogger } from '@/hooks/useLogger'
import { useReactToolboxContext } from '@/hooks/useReactToolboxContext'
import { useTheme } from '@/hooks/useTheme'
import { IReactToolboxProviderConfiguration } from '@/types'
import {
  getDataTestAttributeValue,
  getDataTestAttributeProp,
  useDataTestAttributeProp
} from '../dataTestAttribute/hooks'

/**
 * Configure React Toolbox with a defined IReactToolboxProviderConfiguration configuration.
 */
export function configureReactToolbox<
  TReactToolboxProviderConfiguration extends IReactToolboxProviderConfiguration
>() {
  return {
    components: {
      ReactToolboxProvider:
        ReactToolboxProvider<TReactToolboxProviderConfiguration>,
      ContainerFlex: ContainerFlex<TReactToolboxProviderConfiguration>,
      Portal: Portal<TReactToolboxProviderConfiguration>,
      PortalPlaceHolder: PortalPlaceHolder<TReactToolboxProviderConfiguration>
    },
    hooks: {
      useReactToolboxContext:
        useReactToolboxContext<TReactToolboxProviderConfiguration>,
      useLogger: useLogger<TReactToolboxProviderConfiguration>,
      useTheme: useTheme<TReactToolboxProviderConfiguration>
    },
    helpers: {
      getDataTestAttributeValue: getDataTestAttributeValue<
        TReactToolboxProviderConfiguration['roles']
      >,
      getDataTestAttributeProp: getDataTestAttributeProp<
        TReactToolboxProviderConfiguration['roles']
      >,
      useDataTestAttributeProp: useDataTestAttributeProp
    }
  }
}
