import { defaultLoggerMapping } from '@/libs/logger'
import { Theme } from '@/styles/themes'
import { LoggerSetup } from '@productive-codebases/toolbox'

export interface IProviderConfiguration<
  TLoggerMapping extends object = typeof defaultLoggerMapping,
  TTheme = Theme
> {
  loggerSetup: LoggerSetup<TLoggerMapping>
  theme: TTheme
}

export interface IProviderContext<
  TProviderConfiguration extends IProviderConfiguration
> {
  loggerSetup: TProviderConfiguration['loggerSetup']
  theme: TProviderConfiguration['theme']
}

export interface IReactToolboxProviderProps<
  TProviderConfiguration extends IProviderConfiguration
> {
  configuration?: TProviderConfiguration
  children: React.ReactNode
}
