import { Maybe } from '@productive-codebases/toolbox'
import React from 'react'
import { ContextsRecord } from './types'

/**
 * Save all contexts instances.
 */
const contextsRecord: ContextsRecord = new Map()

/**
 * Create a new unique context by `contextName`.
 */
export function createNamedContext<TContextValue>(contextName: string) {
  const existingContext = contextsRecord.get(contextName)

  if (existingContext) {
    return existingContext
  }

  const context = React.createContext<Maybe<TContextValue>>(null)

  contextsRecord.set(contextName, context)

  return context
}
