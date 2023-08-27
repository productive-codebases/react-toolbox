import { IForwardedProps, ReactHTMLAttributes } from '@/libs/forwardProps/types'
import { IReactToolboxConfigurationParameters } from '@/types'
import { Maybe } from '@productive-codebases/toolbox'

export interface IContainerFlexProps<
  TReactToolboxConfiguration extends IReactToolboxConfigurationParameters
> extends IForwardedProps<ReactHTMLAttributes<HTMLDivElement>> {
  /** data-attr-name for easier debugging / dom documentation */
  name: string
  /** Styles */
  className?: string
  /** Define the flex-grow behavior of the ContainerFlex itself (when used into nested ContainerFlex) */
  flexGrow?: React.CSSProperties['flexGrow']
  /** Define the direction of items */
  flexDirection?: React.CSSProperties['flexDirection']
  /** Define items alignment */
  flexAlignItems?: React.CSSProperties['alignItems']
  /** Define justification of the flex container */
  flexJustifyContent?: React.CSSProperties['justifyContent']
  /** Define items wrapping behavior */
  flexWrap?: React.CSSProperties['flexWrap']
  /** Define items gap */
  flexGap?: keyof TReactToolboxConfiguration['theme']['sizes']

  /** Define items height */
  height?: React.CSSProperties['height']
  /** Define items nodes */
  children: React.ReactNode
  /** Container horizontal padding */
  paddingH?: Maybe<keyof TReactToolboxConfiguration['theme']['sizes']>
  /** Container vertical padding */
  paddingV?: Maybe<keyof TReactToolboxConfiguration['theme']['sizes']>
  /** Container horizontal margin */
  marginH?: Maybe<keyof TReactToolboxConfiguration['theme']['sizes']>
  /** Container vertical margin */
  marginV?: Maybe<keyof TReactToolboxConfiguration['theme']['sizes']>
  /** Extend the container on the full height */
  fullHeight?: boolean
  /** Extend the container on the full width */
  fullWidth?: boolean
  /** Add a border on each item */
  itemsDebug?: boolean
}
