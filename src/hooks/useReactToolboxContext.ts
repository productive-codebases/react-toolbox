import {
  IReactToolboxProviderConfiguration,
  IReactToolboxProviderContext
} from '..'
import { createContext } from '@/components/ReactToolboxProvider/context'
import { IReactToolboxProvider } from '@/types'
import { useContext } from 'react'

export function configureUseReactToolboxContext<
  TReactToolboxProviderConfiguration extends IReactToolboxProviderConfiguration
>(contextName: string) {
  return function useReactToolboxContext(): IReactToolboxProviderContext<TReactToolboxProviderConfiguration> {
    const ProviderContext = createContext(contextName)

    if (!ProviderContext) {
      throw new Error(`Context ${contextName} is not defined`)
    }

    const context = useContext(
      ProviderContext
    ) as IReactToolboxProvider<TReactToolboxProviderConfiguration>

    if (!context) {
      throw new Error(
        'Missing ReactToolbox context. Wrap your top component by <ReactToolboxProvider />.'
      )
    }

    return context
  }
}
