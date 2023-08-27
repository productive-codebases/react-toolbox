import { IProviderValue, IReactToolboxConfigurationParameters } from '@/types'
import { INamedContext } from '@/libs/namedContext/types'

/**
 * Return logger from the Provider.
 */
export function configureUseLogger<
  TReactToolboxConfiguration extends IReactToolboxConfigurationParameters
>(namedContext: INamedContext<IProviderValue<TReactToolboxConfiguration>>) {
  return function useLogger() {
    const context = namedContext.useNamedContext()

    if (!context.loggerSetup) {
      throw new Error(
        `No logger setup has been defined in React Toolbox's configuration`
      )
    }

    return context.loggerSetup
  }
}
