import { Maybe } from '@productive-codebases/toolbox'
import { PropsWithChildren } from 'react'

/**
 * Props of the ProviderNamedContext component.
 */
export interface INamedProviderProps<TContextValue> extends PropsWithChildren {
  value?: TContextValue
}

/**
 * Map containing all named contexts.
 */
export type NamedContextsRecord<TContextValue = any> = Map<
  string,
  React.Context<Maybe<TContextValue>>
>

/**
 * Named context interface.
 */
export interface INamedContext<TContextValue> {
  /** React context */
  context: React.Context<Maybe<TContextValue>>
  /** Name of the context */
  contextName: string
  /** Interface of the named context's Provider */
  ProviderNamedContext: (
    props: INamedProviderProps<TContextValue>
  ) => JSX.Element
  /** Interface of the name context's hook */
  useNamedContext: () => TContextValue
}
