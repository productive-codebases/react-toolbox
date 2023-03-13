import { Logger, Maybe } from '@productive-codebases/toolbox'
import * as React from 'react'
import { Theme } from 'src/styles/themes'

export interface IProviderContext {
  logger?: Logger
  theme?: Theme
}

const ProviderContext = React.createContext<Maybe<IProviderContext>>(null)

export { ProviderContext }
