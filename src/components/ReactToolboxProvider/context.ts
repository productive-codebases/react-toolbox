import { IReactToolboxProviderContext } from '@/types'
import { Maybe } from '@productive-codebases/toolbox'
import { createContext } from 'react'

export const ProviderContext =
  createContext<Maybe<IReactToolboxProviderContext<any>>>(null)
