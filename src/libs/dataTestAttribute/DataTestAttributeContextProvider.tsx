import { ReactToolboxProvider } from '@/components/ReactToolboxProvider'
import { useMemo } from 'react'
import { DataTestAttributeContext } from './DataTestAttributeContext'
import { IDataTestAttributeContext } from './type'

export interface IDataTestAttributeContextProviderProps<TRoles> {
  value: IDataTestAttributeContext<TRoles>
  children: React.ReactNode
}

/**
 * Allow to define a DataTestAttributeContext.Provider easily.
 */
export function DataTestAttributeContextProvider<TRoles>(
  props: IDataTestAttributeContextProviderProps<TRoles>
) {
  return (
    <ReactToolboxProvider>
      <DataTestAttributeContext.Provider value={useMemo(() => props.value, [])}>
        {props.children}
      </DataTestAttributeContext.Provider>
    </ReactToolboxProvider>
  )
}
