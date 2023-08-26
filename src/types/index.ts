import { Roles } from '@/libs/dataTestAttribute/roles'
import { loggerMapping } from '@/libs/logger'
import { Theme } from '@/styles/themes'
import { LoggerSetup } from '@productive-codebases/toolbox'

/**
 * ReactToolbox providers.
 */

export interface IReactToolboxProviderConfiguration<
  TLoggerMapping extends object = typeof loggerMapping,
  TTheme = Theme,
  TRoles = Roles,
  TPortalNames = {}
> {
  loggerSetup: LoggerSetup<TLoggerMapping>
  theme: TTheme
  roles: TRoles
  portalNames: TPortalNames
}

export interface IReactToolboxProvider<
  TReactToolboxProviderConfiguration extends IReactToolboxProviderConfiguration
> {
  loggerSetup: TReactToolboxProviderConfiguration['loggerSetup']
  theme: TReactToolboxProviderConfiguration['theme']
  portalNames: TReactToolboxProviderConfiguration['portalNames']
}
