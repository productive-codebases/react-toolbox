import { INamedContext } from '@/libs/namedContext/types'
import { IConfigurationParameters, IProviderValue } from '@/types'

/**
 * Return the theme from the Provider.
 */
export function configureUseTheme<
  TReactToolboxConfiguration extends IConfigurationParameters
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
