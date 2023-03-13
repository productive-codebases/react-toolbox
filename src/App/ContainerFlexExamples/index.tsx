import * as React from 'react'
import ContainerFlex from 'src/components/ContainerFlex'

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
        <div>Children 1</div>
        <div>Children 2</div>
        <div>Children 3</div>
      </ContainerFlex>
    </div>
  )
}
