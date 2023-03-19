import { useLogger } from '@/hooks/useLogger'
import { getDataTestAttributeProp } from '@/libs/dataTestAttribute/hooks'
import { ReactToolBox } from '@/SampleApp/components/ReactToolBox'
import { useEffect, useRef } from 'react'

export interface IContainerFlexExamplesProps {}

export default function ContainerFlexExamples(
  props: IContainerFlexExamplesProps
) {
  const containerFlexRef = useRef<HTMLDivElement>(null)

  const logger = useLogger()

  /**
   * Testing the passing of a ref
   */
  useEffect(() => {
    if (!containerFlexRef.current) {
      return
    }

    logger('debug')(
      'Container size:',
      containerFlexRef.current.getBoundingClientRect()
    )
  }, [containerFlexRef])

  return (
    <ReactToolBox.ContainerFlex
      containerRef={containerFlexRef}
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
    </ReactToolBox.ContainerFlex>
  )
}
