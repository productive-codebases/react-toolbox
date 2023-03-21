import { ReactToolboxComponents } from '@/SampleApp/components'
import { ContainerFlexExamples } from './ContainerFlexExamples'

export interface IPage1Props {}

export function Page1(props: IPage1Props) {
  return (
    <>
      <ReactToolboxComponents.ContainerFlex
        name="Layout"
        flexJustifyContent="space-between"
      >
        <ContainerFlexExamples />
        <ReactToolboxComponents.PortalPlaceHolder name="rightSideBar" />
      </ReactToolboxComponents.ContainerFlex>

      <ReactToolboxComponents.Portal name="rightSideBar">
        Here the content of PortalExample1
      </ReactToolboxComponents.Portal>
    </>
  )
}
