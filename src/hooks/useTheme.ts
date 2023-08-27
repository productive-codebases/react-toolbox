import { INamedContext } from '@/libs/namedContext/types'
import { IReactToolboxConfigurationParameters, IProviderValue } from '@/types'

/**
 * Return the theme from the Provider.
 */
export function configureUseTheme<
  TReactToolboxConfiguration extends IReactToolboxConfigurationParameters
>(namedContext: INamedContext<IProviderValue<TReactToolboxConfiguration>>) {
  return function useTheme() {
    const context = namedContext.useNamedContext()

    if (!context.theme) {
      throw new Error(
        `No theme has been defined in React Toolbox's configuration`
      )
    }

    return context.theme
  }
}
