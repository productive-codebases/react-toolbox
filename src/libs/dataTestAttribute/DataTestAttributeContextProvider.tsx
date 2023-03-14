import { useMemo } from 'react'
import Provider from 'src/components/Provider'
import DataTestAttributeContext from './DataTestAttributeContext'
import { IDataTestAttributeContext } from './type'

export interface IDataTestAttributeContextProviderProps<TRoles> {
  value: IDataTestAttributeContext<TRoles>
  children: React.ReactNode
}

/**
 * Allow to define a DataTestAttributeContext.Provider easily.
 */
export default function DataTestAttributeContextProvider<TRoles>(
  props: IDataTestAttributeContextProviderProps<TRoles>
) {
  return (
    <Provider>
      <DataTestAttributeContext.Provider value={useMemo(() => props.value, [])}>
        {props.children}
      </DataTestAttributeContext.Provider>
    </Provider>
  )
}
