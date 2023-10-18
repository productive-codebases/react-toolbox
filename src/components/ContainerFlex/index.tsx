import { configureUseLogger } from '@/hooks/useLogger'
import { configureUseTheme } from '@/hooks/useTheme'
import { forwardProps } from '@/libs/forwardProps'
import { filterNullOrUndefinedValues } from '@/libs/forwardProps/filterNullOrUndefinedValues'
import { INamedContext } from '@/libs/namedContext/types'
import { buildVariants } from '@/styles/buildVariants'
import { IConfiguration, IProviderValue } from '@/types'
import { WithInnerRef } from '@/types/reactHelpers'
import styled from '@emotion/styled'
import { Logger } from '@productive-codebases/toolbox'
import { IContainerFlexProps } from './types'

interface IHelpers {
  logger: Logger
  theme: IConfiguration['theme']
}

const Div = styled.div<IContainerFlexProps<any> & IHelpers>(props_ => {
  // Workaround to make it work...
  const props = props_ as IContainerFlexProps<IConfiguration> & IHelpers

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
      gap: props.flexGap && props.theme.sizes[props.flexGap],
      height: props.height,

      // Size
      ...(props.fullHeight ? { height: '100%' } : {}),
      ...(props.fullWidth ? { width: '100%' } : {}),

      // Paddings
      ...filterNullOrUndefinedValues({
        paddingLeft: props.paddingH && props.theme.sizes[props.paddingH],
        paddingRight: props.paddingH && props.theme.sizes[props.paddingH]
      }),

      ...filterNullOrUndefinedValues({
        paddingTop: props.paddingV && props.theme.sizes[props.paddingV],
        paddingBottom: props.paddingV && props.theme.sizes[props.paddingV]
      }),

      // Margins
      ...filterNullOrUndefinedValues({
        marginLeft: props.marginH && props.theme.sizes[props.marginH],
        marginRight: props.marginH && props.theme.sizes[props.marginH]
      }),

      ...filterNullOrUndefinedValues({
        marginTop: props.marginV && props.theme.sizes[props.marginV],
        marginBottom: props.marginV && props.theme.sizes[props.marginV]
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
    props.logger('debug')(styles)
  }

  return styles
})

export function configureContainerFlex<TConfiguration extends IConfiguration>(
  namedContext: INamedContext<IProviderValue<TConfiguration>>
) {
  return function ContainerFlex(
    props: WithInnerRef<IContainerFlexProps<TConfiguration>, HTMLDivElement>
  ) {
    const logger = configureUseLogger(namedContext)().newLogger('ReactToolBox')(
      'components/ContainerFlex'
    )

    const theme = configureUseTheme(namedContext)()

    return (
      <Div
        logger={logger}
        theme={theme}
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
