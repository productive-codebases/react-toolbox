import { configureReactToolbox } from '@/libs/configureReactToolbox'
import { Roles } from '@/libs/dataTestAttribute/roles'
import { loggerMapping } from '@/libs/logger'
import { Theme } from '@/styles/themes'
import { LoggerSetup } from '@productive-codebases/toolbox'

/**
 * Define the different parameters that will be passed to IProviderValue.
 */
export interface IReactToolboxConfigurationParameters<
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
 * Interface of the value passed to the Provider.
 */
export interface IProviderValue<
  TReactToolboxConfiguration extends IReactToolboxConfigurationParameters
> {
  loggerSetup: TReactToolboxConfiguration['loggerSetup']
  theme: TReactToolboxConfiguration['theme']
  portalNames: TReactToolboxConfiguration['portalNames']
}

/**
 * Configuration returned by the configurator.
 */
export type ReactToolBoxConfiguration<
  TReactToolboxConfiguration extends IReactToolboxConfigurationParameters
> = ReturnType<typeof configureReactToolbox<TReactToolboxConfiguration>>
