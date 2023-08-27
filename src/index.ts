/**
 * Configuration
 */

export { configureReactToolbox } from './libs/configureReactToolbox'
export type {
  IReactToolboxConfigurationParameters as IReactToolboxConfiguration,
  IProviderValue,
  ReactToolBoxConfiguration
} from './types'

/**
 * Components
 */

export type { IContainerFlexProps } from './components/ContainerFlex/types'

/**
 * Tooling
 */

// named context
export { configureNamedContext } from './libs/namedContext'
export * from './libs/namedContext/types'

// themes
export { themes } from './styles/themes'
export { extendTheme } from './libs/theme/extendTheme'

// data-test attributes
export { roles } from './libs/dataTestAttribute/roles'
export type {
  IDataTestAttributeContext,
  IDataTestAttributeOptions,
  DataTestAttribute,
  DataTestAttributeProp
} from './libs/dataTestAttribute/type'

// forwardProps
export { forwardProps } from './libs/forwardProps'
export type {
  IForwardedProps,
  ExtractAttributes,
  ReactHTMLAttributes
} from './libs/forwardProps/types'

// logger
export { loggerSetup } from './libs/logger'

/**
 * Types
 */

export type { WithInnerRef } from './types/reactHelpers'
