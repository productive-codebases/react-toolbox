import { Maybe } from '@productive-codebases/toolbox'
import * as React from 'react'
import { IProviderContext } from './types'

export const ProviderContext =
  React.createContext<Maybe<IProviderContext<any>>>(null)
