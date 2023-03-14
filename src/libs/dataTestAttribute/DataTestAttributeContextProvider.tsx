import { useMemo } from 'react'
import Provider from 'src/components/Provider'
import DataTestAttributeContext from './DataTestAttributeContext'
import { IDataTestAttributeContext } from './type'

export interface IDataTestAttributeContextProviderProps {
  value: IDataTestAttributeContext
  children: React.ReactNode
}

/**
 * Allow to define a DataTestAttributeContext.Provider easily.
 */
export default function DataTestAttributeContextProvider(
  props: IDataTestAttributeContextProviderProps
) {
  return (
    <Provider>
      <DataTestAttributeContext.Provider value={useMemo(() => props.value, [])}>
        {props.children}
      </DataTestAttributeContext.Provider>
    </Provider>
  )
}
