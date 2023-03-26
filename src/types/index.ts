import { defaultLoggerMapping } from '@/libs/logger'
import { Theme } from '@/styles/themes'
import { LoggerSetup } from '@productive-codebases/toolbox'

/**
 * ReactToolbox providers.
 */

export interface IReactToolboxProviderConfiguration<
  TLoggerMapping extends object = typeof defaultLoggerMapping,
  TTheme = Theme,
  TPortalNames = {}
> {
  loggerSetup: LoggerSetup<TLoggerMapping>
  theme: TTheme
  portalNames: TPortalNames
}

export interface IReactToolboxProviderContext<
  TReactToolboxProviderConfiguration extends IReactToolboxProviderConfiguration
> {
  loggerSetup: TReactToolboxProviderConfiguration['loggerSetup']
  theme: TReactToolboxProviderConfiguration['theme']
  portalNames: TReactToolboxProviderConfiguration['portalNames']
}
