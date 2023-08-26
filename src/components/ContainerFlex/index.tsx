import { configureUseLogger } from '@/hooks/useLogger'
import { configureUseTheme } from '@/hooks/useTheme'
import { forwardProps } from '@/libs/forwardProps'
import { filterNullOrUndefinedValues } from '@/libs/forwardProps/filterNullOrUndefinedValues'
import { buildVariants } from '@/styles/buildVariants'
import { IReactToolboxProviderConfiguration } from '@/types'
import { WithInnerRef } from '@/types/reactHelpers'
import styled from 'styled-components'
import { IContainerFlexProps } from './types'

const Div = styled.div<IContainerFlexProps<any> & { contextName: string }>(
  props_ => {
    const logger = configureUseLogger(props_.contextName)().newLogger(
      'ReactToolBox'
    )('components/ContainerFlex')

    const theme = configureUseTheme(props_.contextName)()

    const props =
      props_ as IContainerFlexProps<IReactToolboxProviderConfiguration>

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
  }
)

export function configureContainerFlex<
  TReactToolboxProviderConfiguration extends IReactToolboxProviderConfiguration
>(contextName: string) {
  return function ContainerFlex(
    props: WithInnerRef<
      IContainerFlexProps<TReactToolboxProviderConfiguration>,
      HTMLDivElement
    >
  ) {
    return (
      <Div
        contextName={contextName}
        data-attr-name={props.name}
        ref={props.innerRef}
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
}
