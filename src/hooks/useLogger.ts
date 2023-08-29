import { INamedContext } from '@/libs/namedContext/types'
import { IProviderValue, IConfigurationParameters } from '@/types'
import { setupLogger } from '@productive-codebases/toolbox'
import { useMemo } from 'react'

/**
 * Return logger from the Provider.
 */
export function configureUseLogger<
  TReactToolboxConfiguration extends IConfigurationParameters
>(namedContext: INamedContext<IProviderValue<TReactToolboxConfiguration>>) {
  return function useLogger() {
    const context = namedContext.useNamedContext()

    if (!context.loggerMapping) {
      throw new Error(
        `No logger mapping has been defined in React Toolbox's configuration`
      )
    }

    const loggerSetup = useMemo(() => {
      return setupLogger(context.loggerMapping)
    }, [])

    return loggerSetup
  }
}
