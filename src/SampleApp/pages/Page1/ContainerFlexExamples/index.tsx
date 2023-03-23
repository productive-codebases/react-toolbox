import { getDataTestAttributeProp } from '@/libs/dataTestAttribute/hooks'
import { ReactToolboxComponents } from '@/SampleApp/components'
import { reactToolboxHooks } from '@/SampleApp/hooks'
import { buildVariants } from '@/styles/buildVariants'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

export interface IContainerFlexExamplesProps {}

const StyledContainerFlex = styled(ReactToolboxComponents.ContainerFlex)(
  props => {
    return buildVariants(props)
      .css({
        border: '1px solid red'
      })
      .end()
  }
)

export function ContainerFlexExamples(props: IContainerFlexExamplesProps) {
  const containerFlexRef = useRef<HTMLDivElement>(null)

  const logger = reactToolboxHooks.useLogger().newLogger('SampleApp')(
    'components'
  )

  /**
   * Testing the passing of a ref
   */
  useEffect(() => {
    if (!containerFlexRef.current) {
      return
    }

    logger('debug')(
      'Container size:',
      containerFlexRef.current,
      containerFlexRef.current.getBoundingClientRect()
    )
  }, [containerFlexRef])

  return (
    <StyledContainerFlex
      innerRef={containerFlexRef}
      name="Example1"
      flexDirection="column"
      flexGap="default"
      itemsDebug
    >
      <div
        {...getDataTestAttributeProp({
          role: 'container/title',
          label: 'this-is-a-label'
        })}
      >
        Children 1
      </div>
      <div>Children 2</div>

      <div>Children 3</div>
    </StyledContainerFlex>
  )
}
