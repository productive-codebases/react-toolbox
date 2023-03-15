import ContainerFlex from '@/components/ContainerFlex'
import { getDataTestAttributeProp } from '@/libs/dataTestAttribute/hooks'

export interface IContainerFlexExamplesProps {}

export default function ContainerFlexExamples(
  props: IContainerFlexExamplesProps
) {
  return (
    <div>
      <ContainerFlex
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
      </ContainerFlex>
    </div>
  )
}
