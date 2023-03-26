import { ContainerFlex } from '@/components/ContainerFlex'
import { Portal } from '@/components/Portal'
import { PortalPlaceHolder } from '@/components/Portal/PortalPlaceHolder'
import { ReactToolboxProvider } from '@/components/ReactToolboxProvider'
import { IProviderConfiguration } from '@/components/ReactToolboxProvider/types'
import { useLogger } from '@/hooks/useLogger'
import { useReactToolboxContext } from '@/hooks/useReactToolboxContext'
import { useTheme } from '@/hooks/useTheme'

/**
 * Configure React Toolbox with a defined IProviderConfiguration configuration.
 */
export function configureReactToolbox<
  TProviderConfiguration extends IProviderConfiguration
>() {
  return {
    components: {
      ReactToolboxProvider: ReactToolboxProvider<TProviderConfiguration>,
      ContainerFlex: ContainerFlex<TProviderConfiguration>,
      Portal: Portal<TProviderConfiguration>,
      PortalPlaceHolder: PortalPlaceHolder<TProviderConfiguration>
    },
    hooks: {
      useReactToolboxContext: useReactToolboxContext<TProviderConfiguration>,
      useLogger: useLogger<TProviderConfiguration>,
      useTheme: useTheme<TProviderConfiguration>
    }
  }
}
