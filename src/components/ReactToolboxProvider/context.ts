import { IReactToolboxProvider } from '@/types'
import { Maybe } from '@productive-codebases/toolbox'
import React from 'react'

/**
 * Save all contextes instances.
 */
const contextes: Map<
  string,
  React.Context<Maybe<IReactToolboxProvider<any>>>
> = new Map()

/**
 * Create a new context.
 * Allow passing a `contextName` to have several context in parallel.
 *
 * Then use `configureReactToolbox` to configure the tooling related to a context.
 */
export function createContext(contextName: string) {
  const existingContext = contextes.get(contextName)

  if (existingContext) {
    return existingContext
  }

  const newContext =
    React.createContext<Maybe<IReactToolboxProvider<any>>>(null)

  contextes.set(contextName, newContext)

  return newContext
}
