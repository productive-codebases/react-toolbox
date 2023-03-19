import { useLogger } from '@/hooks/useLogger'
import { useTheme } from '@/hooks/useTheme'
import { forwardProps } from '@/libs/forwardProps'
import { filterNullOrUndefinedValues } from '@/libs/forwardProps/filterNullOrUndefinedValues'
import { buildVariants } from '@/styles/buildVariants'
import React from 'react'
import styled from 'styled-components'
import { IProviderConfiguration } from '../ReactToolboxProvider/types'
import { IContainerFlexProps } from './types'

const Div = styled.div<IContainerFlexProps<any>>(props_ => {
  const logger = useLogger().newLogger('ReactToolBox')(
    'components/ContainerFlex'
  )
  const theme = useTheme()

  const props = props_ as IContainerFlexProps<IProviderConfiguration>

  const styles = buildVariants(props)
    .css({
      // Flex
      display: 'flex',
      flexGrow: props.flexGrow,
      flexDirection: props.flexDirection,
      alignItems: props.flexAlignItems,
      justifyContent: props.flexJustifyContent,
      flexWrap: (() => {
        const isContainerFlexDirectionColumnOriented = /column/.test(
          props.flexDirection || 'row'
        )

        if (isContainerFlexDirectionColumnOriented) {
          return 'nowrap'
        }

        return props.flexWrap || 'wrap'
      })(),
      gap: props.flexGap && theme.sizes[props.flexGap],
      height: props.height,

      // Size
      ...(props.fullHeight ? { height: '100%' } : {}),
      ...(props.fullWidth ? { width: '100%' } : {}),

      // Paddings
      ...filterNullOrUndefinedValues({
        paddingLeft: props.paddingH && theme.sizes[props.paddingH],
        paddingRight: props.paddingH && theme.sizes[props.paddingH]
      }),

      ...filterNullOrUndefinedValues({
        paddingTop: props.paddingV && theme.sizes[props.paddingV],
        paddingBottom: props.paddingV && theme.sizes[props.paddingV]
      }),

      // Margins
      ...filterNullOrUndefinedValues({
        marginLeft: props.marginH && theme.sizes[props.marginH],
        marginRight: props.marginV && theme.sizes[props.marginV]
      }),

      ...filterNullOrUndefinedValues({
        marginTop: props.marginV && theme.sizes[props.marginV],
        marginBottom: props.marginV && theme.sizes[props.marginV]
      })
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

function ContainerFlex<TProviderConfiguration extends IProviderConfiguration>(
  props: IContainerFlexProps<TProviderConfiguration> & {
    // Expose a ref as an explicit prop to workaround React.forwardRef that doesn't work with generics
    containerRef?: React.ForwardedRef<HTMLDivElement>
  }
) {
  return (
    <Div
      data-attr-name={props.name}
      ref={props.containerRef}
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

export default ContainerFlex
