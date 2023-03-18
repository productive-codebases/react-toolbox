import {
  IProviderConfiguration,
  IProviderContext
} from '@/components/ReactToolboxProvider/types'
import { useReactToolboxContext } from './useReactToolboxContext'

/**
 * Return the theme from the Provider.
 */
export function useTheme<
  TProviderConfiguration extends IProviderConfiguration
>() {
  const context =
    useReactToolboxContext() as IProviderContext<TProviderConfiguration>

  if (!context.theme) {
    throw new Error('No theme found in ProviderContext')
  }

  return context.theme
}
