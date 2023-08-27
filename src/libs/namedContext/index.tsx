import { isDefined } from '@productive-codebases/toolbox'
import { useContext, useMemo } from 'react'
import { createNamedContext } from './createNamedContext'
import { INamedContext, IProviderProps } from './types'

export function configureNamedContext<TContextValue>(
  contextName: string,
  contextValue?: TContextValue
): INamedContext<TContextValue> {
  const context = createNamedContext<TContextValue>(contextName)

  /**
   * Return a new React Provider component.
   */
  function ProviderNamedContext(props: IProviderProps<TContextValue>) {
    const ProviderContext = useMemo(() => {
      return context
    }, [])

    const providerContextValue = contextValue ?? props.value

    if (!isDefined(providerContextValue)) {
      throw new Error(
        `No value has been defined for the named context "${contextName}". Set a value when configuring a new named context or pass it to the <Provider /> component.`
      )
    }

    return (
      <ProviderContext.Provider value={providerContextValue}>
        {props.children}
      </ProviderContext.Provider>
    )
  }

  /**
   * Return the named context.
   */
  function useNamedContext<TContextValue>() {
    return useContext(context) as TContextValue
  }

  return {
    contextName,
    ProviderNamedContext,
    useNamedContext
  }
}
