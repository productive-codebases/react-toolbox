import { Configuration, IConfiguration } from '@/types'
import { deepMerge, PartialDeep } from '@productive-codebases/toolbox'
import { loggerMapping } from './loggerMapping'
import { portalNames } from './portals'
import { roles } from './roles'
import { theme } from './theme'

/**
 * Default configuration of React toolbox.
 */
export const defaultConfiguration: IConfiguration = {
  loggerMapping,
  theme,
  roles,
  portalNames
}

/**
 * Create a custom React toolbox configuration from the default one.
 */
export function createConfiguration<TConfiguration>(
  extendedConfiguration?: PartialDeep<IConfiguration & TConfiguration>
): Configuration<TConfiguration> {
  return deepMerge([
    defaultConfiguration,
    extendedConfiguration
  ]) as IConfiguration & TConfiguration
}
