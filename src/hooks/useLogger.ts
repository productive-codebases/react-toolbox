import { Logger } from '@productive-codebases/toolbox'
import { useContext } from 'react'
import { ProviderContext } from 'src/components/Provider/context'

/**
 * Return the logger instance from the root store.
 */
export function useLogger(): Logger {
  const context = useContext(ProviderContext)

  if (!context) {
    throw new Error('Missing ProviderContext context.')
  }

  if (!context.logger) {
    throw new Error('No logger found in ProviderContext')
  }

  return context.logger
}
