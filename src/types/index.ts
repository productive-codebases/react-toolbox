import { Roles } from '@/libs/dataTestAttribute/roles'
import { loggerMapping } from '@/libs/logger'
import { Theme } from '@/styles/themes'
import { LoggerSetup } from '@productive-codebases/toolbox'

/**
 * Define the different parameters that will be passed to IProviderValue.
 */
export interface IProviderConfiguration<
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

/**
 * Define the interface of the value passed to the Provider.
 */
export interface IProviderValue<
  TReactToolboxProviderConfiguration extends IProviderConfiguration
> {
  loggerSetup: TReactToolboxProviderConfiguration['loggerSetup']
  theme: TReactToolboxProviderConfiguration['theme']
  portalNames: TReactToolboxProviderConfiguration['portalNames']
}
