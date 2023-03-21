import { IProviderConfiguration } from '@/components/ReactToolboxProvider/types'
import { useLogger } from './useLogger'
import { useReactToolboxContext } from './useReactToolboxContext'

/**
 * Configure all hooks for a defined provider configuration.
 */
export function configureReactToolboxHooks<
  TProviderConfiguration extends IProviderConfiguration
>() {
  return {
    useReactToolboxContext: useReactToolboxContext<TProviderConfiguration>,
    useLogger: useLogger<TProviderConfiguration>,
    useTheme: useLogger<TProviderConfiguration>
  }
}
