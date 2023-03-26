import {
  IReactToolboxProviderConfiguration,
  IReactToolboxProviderContext
} from '..'
import { ReactToolboxProviderContext } from '@/components/ReactToolboxProvider/context'
import { useContext } from 'react'

export function useReactToolboxContext<
  TReactToolboxProviderConfiguration extends IReactToolboxProviderConfiguration
>() {
  const context = useContext(ReactToolboxProviderContext)

  if (!context) {
    throw new Error(
      'Missing ReactToolbox context. Wrap your top component by <ReactToolboxProvider.Provider />.'
    )
  }

  return context as IReactToolboxProviderContext<TReactToolboxProviderConfiguration>
}
