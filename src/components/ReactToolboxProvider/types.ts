import { defaultLoggerMapping } from '@/libs/logger'
import { Theme } from '@/styles/themes'
import { LoggerSetup } from '@productive-codebases/toolbox'

export interface IProviderConfiguration<
  TLoggerMapping extends object = typeof defaultLoggerMapping,
  TTheme = Theme,
  TPortalNames = {}
> {
  loggerSetup: LoggerSetup<TLoggerMapping>
  theme: TTheme
  portalNames: TPortalNames
}

export interface IProviderContext<
  TProviderConfiguration extends IProviderConfiguration
> {
  loggerSetup: TProviderConfiguration['loggerSetup']
  theme: TProviderConfiguration['theme']
  portalNames: TProviderConfiguration['portalNames']
}

export interface IReactToolboxProviderProps<
  TProviderConfiguration extends IProviderConfiguration
> {
  configuration?: TProviderConfiguration
  children: React.ReactNode
}
