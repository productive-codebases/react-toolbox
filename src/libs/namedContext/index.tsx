import { isDefined, Maybe } from '@productive-codebases/toolbox'
import { createContext, useContext, useMemo } from 'react'
import {
  INamedContext,
  INamedProviderProps,
  NamedContextsRecord
} from './types'

/**
 * Save all contexts instances.
 */
const contextsRecord: NamedContextsRecord = new Map()

/**
 * Configure a named context identitied by `contextName` and return bound
 * Provider and hook.
 */
export function createNamedContext<TContextValue>(
  contextName: string,
  contextValue?: TContextValue
): INamedContext<TContextValue> {
  const context = createReactContext<TContextValue>(contextName)

  /**
   * Return a new React Provider component.
   */
  function ProviderNamedContext(props: INamedProviderProps<TContextValue>) {
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
    context,
    contextName,
    ProviderNamedContext,
    useNamedContext
  }
}

/**
 * Create a new unique context by `contextName`.
 */
export function createReactContext<TContextValue>(contextName: string) {
  const existingContext = contextsRecord.get(contextName)

  if (existingContext) {
    return existingContext
  }

  const context = createContext<Maybe<TContextValue>>(null)

  contextsRecord.set(contextName, context)

  return context
}
