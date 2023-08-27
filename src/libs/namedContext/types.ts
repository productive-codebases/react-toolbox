import { Maybe } from '@productive-codebases/toolbox'
import { PropsWithChildren } from 'react'

export interface IProviderProps<TContextValue> extends PropsWithChildren {
  value?: TContextValue
}

export type ContextsRecord<TContextValue = any> = Map<
  string,
  React.Context<Maybe<TContextValue>>
>

export interface INamedContext<TContextValue> {
  contextName: string
  ProviderNamedContext: (props: IProviderProps<TContextValue>) => JSX.Element
  useNamedContext: () => TContextValue
}
