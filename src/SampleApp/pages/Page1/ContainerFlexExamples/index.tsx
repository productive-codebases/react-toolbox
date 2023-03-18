import { getDataTestAttributeProp } from '@/libs/dataTestAttribute/hooks'
import { AppContainerFlex } from '@/SampleApp/components/AppContainerFlex'

export interface IContainerFlexExamplesProps {}

export default function ContainerFlexExamples(
  props: IContainerFlexExamplesProps
) {
  return (
    <div>
      <AppContainerFlex
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
      </AppContainerFlex>
    </div>
  )
}
