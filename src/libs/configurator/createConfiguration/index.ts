import { IConfigurationParameters } from '@/types'
import {
  deepMerge,
  PartialDeep,
  setupLogger
} from '@productive-codebases/toolbox'
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
export function createConfiguration<TConfigurationParametersExtended>(
  extendedConfiguration?: PartialDeep<
    IConfigurationParameters & TConfigurationParametersExtended
  >
): IConfigurationParameters & TConfigurationParametersExtended {
  return deepMerge([
    defaultConfiguration,
    extendedConfiguration
  ]) as IConfigurationParameters & TConfigurationParametersExtended
}
