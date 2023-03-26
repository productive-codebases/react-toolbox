import { IReactToolboxProviderConfiguration } from '@/types'
import { useReactToolboxContext } from './useReactToolboxContext'

/**
 * Return logger from the Provider.
 */
export function useLogger<
  TReactToolboxProviderConfiguration extends IReactToolboxProviderConfiguration
>(): TReactToolboxProviderConfiguration['loggerSetup'] {
  const context = useReactToolboxContext()

  if (!context.loggerSetup) {
    throw new Error('No logger found in ProviderContext')
  }

  return context.loggerSetup
}
