import { IReactToolboxProviderContext } from '@/types'
import { Maybe } from '@productive-codebases/toolbox'
import { createContext } from 'react'

export const ReactToolboxProviderContext =
  createContext<Maybe<IReactToolboxProviderContext<any>>>(null)
