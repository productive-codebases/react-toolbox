import { configure } from '@/libs/configurator'
import { LoggerMapping } from '@/libs/configurator/defaultConfiguration/loggerMapping'
import { PortalNames } from '@/libs/configurator/defaultConfiguration/portals'
import { Roles } from '@/libs/configurator/defaultConfiguration/roles'
import { Theme } from '@/libs/configurator/defaultConfiguration/theme'

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
