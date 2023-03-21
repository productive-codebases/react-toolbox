import { ProviderContext } from '@/components/ReactToolboxProvider/context'
import {
  IProviderConfiguration,
  IProviderContext
} from '@/components/ReactToolboxProvider/types'
import { useContext } from 'react'

export function useReactToolboxContext<
  TProviderConfiguration extends IProviderConfiguration
>() {
  const context = useContext(ProviderContext)

  if (!context) {
    throw new Error(
      'Missing ReactToolbox context. Wrap your top component by <ReactToolboxProvider.Provider />.'
    )
  }

  return context as IProviderContext<TProviderConfiguration>
}
