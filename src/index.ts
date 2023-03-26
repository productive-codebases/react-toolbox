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

export { DataTestAttributeContext } from './libs/dataTestAttribute/DataTestAttributeContext'
export { DataTestAttributeContextProvider } from './libs/dataTestAttribute/DataTestAttributeContextProvider'
export {
  getDataTestAttributeValue,
  getDataTestAttributeProp,
  useDataTestAttributeProp
} from './libs/dataTestAttribute/hooks'
export { roles } from './libs/dataTestAttribute/roles'
export type {
  IDataTestAttributeContext,
  IDataTestAttributeOptions,
  DataTestAttribute,
  DataTestAttributeProp
} from './libs/dataTestAttribute/type'

/**
 * Hooks
 */

export { useReactToolboxContext } from './hooks/useReactToolboxContext'
export { useLogger } from './hooks/useLogger'
export { useTheme } from './hooks/useTheme'

/**
 * Theme
 */

export { themes } from './styles/themes'
export { extendTheme } from './libs/theme/extendTheme'

/**
 * Components
 */

export { ContainerFlex } from './components/ContainerFlex'
export type { IContainerFlexProps } from './components/ContainerFlex/types'

export { PortalPlaceHolder } from './components/Portal/PortalPlaceHolder'
export { Portal } from './components/Portal'

/**
 * Types
 */

export type { WithInnerRef } from './types/reactHelpers'
