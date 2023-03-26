import {
  IReactToolboxProviderConfiguration,
  IReactToolboxProviderContext
} from '..'
import { useReactToolboxContext } from './useReactToolboxContext'

/**
 * Return the theme from the Provider.
 */
export function useTheme<
  TReactToolboxProviderConfiguration extends IReactToolboxProviderConfiguration
>() {
  const context =
    useReactToolboxContext() as IReactToolboxProviderContext<TReactToolboxProviderConfiguration>

  if (!context.theme) {
    throw new Error('No theme found in ProviderContext')
  }

  return context.theme
}
