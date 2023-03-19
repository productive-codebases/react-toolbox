import { getDataTestAttributeProp } from '@/libs/dataTestAttribute/hooks'
import { ReactToolBox } from '@/SampleApp/components/ReactToolBox'

export interface IContainerFlexExamplesProps {}

export default function ContainerFlexExamples(
  props: IContainerFlexExamplesProps
) {
  return (
    <ReactToolBox.ContainerFlex
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
