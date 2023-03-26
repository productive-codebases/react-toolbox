import { IReactToolboxProviderConfiguration } from '@/types'

export interface IReactToolboxProviderProps<
  TReactToolboxProviderConfiguration extends IReactToolboxProviderConfiguration
> {
  configuration?: TReactToolboxProviderConfiguration
  children: React.ReactNode
}
