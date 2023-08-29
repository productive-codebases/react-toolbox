import { configure } from '@/libs/configurator'
import { LoggerMapping } from '@/libs/configurator/createConfiguration/loggerMapping'
import { PortalNames } from '@/libs/configurator/createConfiguration/portals'
import { Roles } from '@/libs/configurator/createConfiguration/roles'
import { Theme } from '@/libs/configurator/createConfiguration/theme'

/**
 * Interface of the value passed to the Provider.
 */
export interface IProviderValue<
  TConfiguration extends IConfigurationParameters
> {
  loggerMapping: TConfiguration['loggerMapping']
  theme: TConfiguration['theme']
  portalNames: TConfiguration['portalNames']
}

/**
 * Define the different parameters that will be passed to IProviderValue.
 */
export interface IConfigurationParameters<
  TLoggerMapping = LoggerMapping,
  TTheme = Theme,
  TRoles = Roles,
  TPortalNames = PortalNames
> {
  loggerMapping: TLoggerMapping
  theme: TTheme
  roles: TRoles
  portalNames: TPortalNames
}

/**
 * Configuration returned by the configurator.
 */
export type Configuration<TConfiguration extends IConfigurationParameters> =
  ReturnType<typeof configure<TConfiguration>>
