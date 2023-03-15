import { Theme } from '@/styles/themes'
import { Logger, Maybe } from '@productive-codebases/toolbox'
import * as React from 'react'

export interface IProviderContext {
  logger?: Logger
  theme?: Theme
}

const ProviderContext = React.createContext<Maybe<IProviderContext>>(null)

export { ProviderContext }
