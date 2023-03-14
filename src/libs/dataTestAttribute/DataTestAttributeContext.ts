import { Maybe } from '@productive-codebases/toolbox'
import { createContext } from 'react'
import { IDataTestAttributeContext } from './type'

const DataTestAttributeContext =
  createContext<Maybe<IDataTestAttributeContext<any>>>(null)

export default DataTestAttributeContext
