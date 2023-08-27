/**
 * Configurator
 */

export { configureReactToolbox } from './libs/configureReactToolbox'

/**
 * Logger
 */

export { loggerSetup } from './libs/logger'

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
 * Named context
 */

export { configureNamedContext } from './libs/namedContext'

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

export type { IProviderConfiguration, IProviderValue } from './types'

export type { WithInnerRef } from './types/reactHelpers'
