import { configureUseReactToolboxContext } from './useReactToolboxContext'
import { IReactToolboxProviderConfiguration } from '..'

/**
 * Return the theme from the Provider.
 */
export function configureUseTheme<
  TReactToolboxProviderConfiguration extends IReactToolboxProviderConfiguration
>(contextName: string) {
  return function useTheme() {
    const context =
      configureUseReactToolboxContext<TReactToolboxProviderConfiguration>(
        contextName
      )()

    if (!context.theme) {
      throw new Error('No theme found in ProviderContext')
    }

    return context.theme
  }
}
