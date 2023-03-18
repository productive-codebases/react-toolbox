import { Maybe } from '@productive-codebases/toolbox'
import * as React from 'react'
import { IProviderContext } from './types'

const ProviderContext = React.createContext<Maybe<IProviderContext<any>>>(null)

export { ProviderContext }
