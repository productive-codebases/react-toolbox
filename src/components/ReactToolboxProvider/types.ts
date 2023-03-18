import { Theme } from '@/styles/themes'
import { Logger } from '@productive-codebases/toolbox'

export interface IProviderConfiguration<TLogger = Logger, TTheme = Theme> {
  logger: TLogger
  theme: TTheme
}

export interface IProviderContext<
  TProviderConfiguration extends IProviderConfiguration
> {
  logger: TProviderConfiguration['logger']
  theme: TProviderConfiguration['theme']
}

export interface IReactToolboxProviderProps<
  TProviderConfiguration extends IProviderConfiguration
> {
  configuration?: TProviderConfiguration
  children: React.ReactNode
}
