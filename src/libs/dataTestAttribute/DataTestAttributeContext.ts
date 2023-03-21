import { Maybe } from '@productive-codebases/toolbox'
import { createContext } from 'react'
import { IDataTestAttributeContext } from './type'

export const DataTestAttributeContext =
  createContext<Maybe<IDataTestAttributeContext<any>>>(null)
