import { Logger } from '@productive-codebases/toolbox'
import { useReactToolboxContext } from './useReactToolboxContext'

/**
 * Return the logger instance from the root store.
 */
export function useLogger(): Logger {
  const context = useReactToolboxContext()

  if (!context.logger) {
    throw new Error('No logger found in ProviderContext')
  }

  return context.logger
}
