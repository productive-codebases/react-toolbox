import {
  ContainerFlex,
  getAppDataTestAttributeProp,
  useAppLogger,
  useAppTheme
} from '@/AppSample/libs/ReactToolbox'
import { buildVariants } from '@/styles/buildVariants'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

export interface IContainerFlexExamplesProps {}

const StyledContainerFlex = styled(ContainerFlex)(props => {
  const theme = useAppTheme()

  return buildVariants(props)
    .css({
      border: `1px solid ${theme.color.blue}`
    })
    .end()
})

export function ContainerFlexExamples(props: IContainerFlexExamplesProps) {
  const containerFlexRef = useRef<HTMLDivElement>(null)

  const logger = useAppLogger().newLogger('AppSample')('components')

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
        {...getAppDataTestAttributeProp({
          role: 'customContainer',
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
