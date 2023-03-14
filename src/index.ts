/**
 * --- Libs ---
 */

/**
 * ForwardPropds
 */

export { forwardProps } from './libs/forwardProps'
export * from './libs/forwardProps/types'

/**
 * getDataTestAttributeProp
 */

export * from './libs/dataTestAttribute/DataTestAttributeContext'
export * from './libs/dataTestAttribute/DataTestAttributeContextProvider'
export * from './libs/dataTestAttribute/hooks'
export * from './libs/dataTestAttribute/roles'
export * from './libs/dataTestAttribute/type'

/**
 * --- Components ---
 */

/**
 * Provider
 */

export { default as Provider } from './components/Provider'

/**
 * ContainerFlex
 */

export { default as ContainerFlex } from './components/ContainerFlex'
export type { IContainerFlexProps } from './components/ContainerFlex/types'

/**
 * Portal
 */

export { default as Portal } from './components/Portal'
export { default as PortalPlaceHolder } from './components/Portal/PortalPlaceHolder'
