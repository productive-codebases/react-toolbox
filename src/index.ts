/**
 * Configuration
 */

export { configure } from './libs/configurator'
export type {
  IConfigurationParameters,
  IProviderValue,
  Configuration
} from './types'

export {
  defaultConfiguration,
  createConfiguration
} from './libs/configurator/defaultConfiguration'

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

// data-test attributes
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

/**
 * Types
 */

export type { WithInnerRef } from './types/reactHelpers'
