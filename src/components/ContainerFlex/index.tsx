import React from 'react'
import { forwardProps } from 'src/libs/forwardProps'
import { newLogger } from 'src/libs/logger'
import { buildVariants } from 'src/styles/buildVariants'
import styled from 'styled-components'
import {
  getContainerFlexWrap,
  getLeftRightMargin,
  getLeftRightPadding,
  getTopBottomMargin,
  getTopBottomPadding
} from './functions'
import { IContainerFlexProps } from './types'

const logger = newLogger('components')('ContainerFlex')

const Div = styled.div<IContainerFlexProps>(props => {
  const styles = buildVariants(props)
    .css({
      // Flex
      display: 'flex',
      flexGrow: props.flexGrow,
      flexDirection: props.flexDirection,
      alignItems: props.flexAlignItems,
      justifyContent: props.flexJustifyContent,
      flexWrap: getContainerFlexWrap(props),
      gap: props.flexGap && props.theme.sizes[props.flexGap],
      height: props.height,

      // Size
      ...(props.fullHeight ? { height: '100%' } : {}),
      ...(props.fullWidth ? { width: '100%' } : {}),

      // Paddings
      ...getLeftRightPadding(props.theme, props.paddingH),
      ...getTopBottomPadding(props.theme, props.paddingV),

      // Margins
      ...getLeftRightMargin(props.theme, props.marginH),
      ...getTopBottomMargin(props.theme, props.marginV)
    })

    .variant('itemsDebug', props.itemsDebug, {
      true: {
        '> *': {
          outline: '1px dotted red'
        }
      },

      false: {}
    })

    .end()

  if (props.itemsDebug) {
    logger('debug')(styles)
  }

  return styles
})

function ContainerFlex(
  props: IContainerFlexProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <Div
      data-attr-name={props.name}
      ref={ref}
      name={props.name}
      flexGrow={props.flexGrow}
      flexDirection={props.flexDirection}
      flexAlignItems={props.flexAlignItems}
      flexJustifyContent={props.flexJustifyContent}
      flexWrap={props.flexWrap}
      flexGap={props.flexGap}
      paddingH={props.paddingH}
      paddingV={props.paddingV}
      marginH={props.marginH}
      marginV={props.marginV}
      fullHeight={props.fullHeight}
      fullWidth={props.fullWidth}
      height={props.height}
      itemsDebug={props.itemsDebug}
      {...forwardProps(props)}
    >
      {props.children}
    </Div>
  )
}

export default React.forwardRef(ContainerFlex)
