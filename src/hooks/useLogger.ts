import { IReactToolboxProviderConfiguration } from '@/types'
import { configureUseReactToolboxContext } from './useReactToolboxContext'

/**
 * Return logger from the Provider.
 */
export function configureUseLogger<
  TReactToolboxProviderConfiguration extends IReactToolboxProviderConfiguration
>(contextName: string) {
  return function useLogger(): TReactToolboxProviderConfiguration['loggerSetup'] {
    const context = configureUseReactToolboxContext(contextName)()

    if (!context.loggerSetup) {
      throw new Error('No logger found in ProviderContext')
    }

    return context.loggerSetup
  }
}
