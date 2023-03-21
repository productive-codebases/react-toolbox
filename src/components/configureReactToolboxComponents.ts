import { ContainerFlex } from './ContainerFlex'
import { Portal } from './Portal'
import { PortalPlaceHolder } from './Portal/PortalPlaceHolder'
import { ReactToolboxProvider } from './ReactToolboxProvider'
import { IProviderConfiguration } from './ReactToolboxProvider/types'

/**
 * Configure components with a defined IProviderConfiguration configuration.
 */
export function configureReactToolboxComponents<
  TProviderConfiguration extends IProviderConfiguration
>() {
  return {
    ReactToolboxProvider: ReactToolboxProvider<TProviderConfiguration>,
    ContainerFlex: ContainerFlex<TProviderConfiguration>,
    Portal: Portal<TProviderConfiguration>,
    PortalPlaceHolder: PortalPlaceHolder<TProviderConfiguration>
  }
}
