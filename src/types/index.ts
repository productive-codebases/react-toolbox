import { INamedContext } from '..'
import { configureContainerFlex } from '@/components/ContainerFlex'
import { configurePortal } from '@/components/Portal'
import { configurePortalPlaceHolder } from '@/components/Portal/PortalPlaceHolder'
import { configureUseLogger } from '@/hooks/useLogger'
import { configureUseTheme } from '@/hooks/useTheme'
import { LoggerMapping } from '@/libs/createToolbox/createConfiguration/loggerMapping'
import { PortalNames } from '@/libs/createToolbox/createConfiguration/portals'
import { Roles } from '@/libs/createToolbox/createConfiguration/roles'
import { Theme } from '@/libs/createToolbox/createConfiguration/theme'
import {
  configureGetDataTestAttributeProp,
  configureGetDataTestAttributeValue
} from '@/libs/dataTestAttribute/hooks'

/**
 * Define the different parameters that will be passed to IProviderValue.
 */
export interface IConfiguration<
  TLoggerMapping = LoggerMapping,
  TTheme = Theme,
  TRoles = Roles,
  TPortalNames = PortalNames,
  TMisc = {}
> {
  loggerMapping: TLoggerMapping
  theme: TTheme
  roles: TRoles
  portalNames: TPortalNames
  misc: TMisc
}

/**
 * Interface of the value passed to the Provider.
 */
export interface IProviderValue<TConfiguration extends IConfiguration> {
  loggerMapping: TConfiguration['loggerMapping']
  theme: TConfiguration['theme']
  roles: TConfiguration['roles']
  portalNames: TConfiguration['portalNames']
  misc: TConfiguration['misc']
}

/**
 * Configuration returned by `createConfiguration`.
 */
export type Configuration<TConfiguration> = IConfiguration & TConfiguration

/**
 * Toolbox returned by `createToolbox`.
 */
export type Toolbox<TConfiguration extends IConfiguration> = {
  name: string
  configuration: Configuration<TConfiguration>
  components: {
    ProviderNamedContext: INamedContext<
      IProviderValue<TConfiguration>
    >['ProviderNamedContext']
    ContainerFlex: ReturnType<typeof configureContainerFlex<TConfiguration>>
    Portal: ReturnType<typeof configurePortal<TConfiguration>>
    PortalPlaceHolder: ReturnType<
      typeof configurePortalPlaceHolder<TConfiguration>
    >
  }
  hooks: {
    useNamedContext: INamedContext<
      IProviderValue<TConfiguration>
    >['useNamedContext']
    useLogger: ReturnType<typeof configureUseLogger<TConfiguration>>
    useTheme: ReturnType<typeof configureUseTheme<TConfiguration>>
  }
  helpers: {
    getDataTestAttributeValue: ReturnType<
      typeof configureGetDataTestAttributeValue<TConfiguration['roles']>
    >
    getDataTestAttributeProp: ReturnType<
      typeof configureGetDataTestAttributeProp<TConfiguration['roles']>
    >
  }
}
