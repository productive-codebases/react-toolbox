import { IConfigurationParameters } from '@/types'
import { deepMerge, PartialDeep } from '@productive-codebases/toolbox'
import { loggerMapping } from './loggerMapping'
import { portalNames } from './portals'
import { roles } from './roles'
import { theme } from './theme'

/**
 * Default configuration of React toolbox.
 */
export const defaultConfiguration: IConfigurationParameters = {
  loggerMapping,
  theme,
  roles,
  portalNames
}

/**
 * Create a custom React toolbox configuration from the default one.
 */
export function createConfiguration<TConfigurationExtended>(
  extendedConfiguration: PartialDeep<
    TConfigurationExtended & IConfigurationParameters
  >
): TConfigurationExtended & IConfigurationParameters {
  return deepMerge([
    defaultConfiguration,
    extendedConfiguration
  ]) as TConfigurationExtended & IConfigurationParameters
}
