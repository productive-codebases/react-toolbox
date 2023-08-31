/**
 * Configuration
 */

export { createToolbox } from './libs/createToolbox'
export type { Toolbox } from './types'

export {
  defaultConfiguration,
  createConfiguration
} from './libs/createToolbox/createConfiguration'
export type { Configuration, IConfiguration, IProviderValue } from './types'

/**
 * Components
 */

export type { IContainerFlexProps } from './components/ContainerFlex/types'

/**
 * Tooling
 */

// named context
export { createNamedContext } from './libs/namedContext'
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

// hooks
export { useForwardedRef } from './hooks/useForwardedRef'

/**
 * Types
 */

export type { WithInnerRef } from './types/reactHelpers'
