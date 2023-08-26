/**
 * Configurator
 */

export { configureReactToolbox } from './libs/configureReactToolbox'

/**
 * Logger
 */

export { defaultLoggerSetup as reactToolboxLoggerSetup } from './libs/logger'

/**
 * ForwardProps
 */

export { forwardProps } from './libs/forwardProps'
export type {
  IForwardedProps,
  ExtractAttributes,
  ReactHTMLAttributes
} from './libs/forwardProps/types'

/**
 * getDataTestAttributeProp
 */

export { roles } from './libs/dataTestAttribute/roles'
export type {
  IDataTestAttributeContext,
  IDataTestAttributeOptions,
  DataTestAttribute,
  DataTestAttributeProp
} from './libs/dataTestAttribute/type'

/**
 * Theme
 */

export { themes } from './styles/themes'
export { extendTheme } from './libs/theme/extendTheme'

/**
 * Components
 */

export type { IContainerFlexProps } from './components/ContainerFlex/types'

/**
 * Types
 */

export type {
  IReactToolboxProviderConfiguration,
  IReactToolboxProvider as IReactToolboxProviderContext
} from './types'

export type { WithInnerRef } from './types/reactHelpers'
