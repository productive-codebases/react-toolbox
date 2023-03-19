import { IProviderConfiguration } from '@/components/ReactToolboxProvider/types'
import { useReactToolboxContext } from './useReactToolboxContext'

/**
 * Return logger from the Provider.
 */
export function useLogger<
  TProviderConfiguration extends IProviderConfiguration
>(): TProviderConfiguration['loggerSetup'] {
  const context = useReactToolboxContext()

  if (!context.loggerSetup) {
    throw new Error('No logger found in ProviderContext')
  }

  return context.loggerSetup
}
