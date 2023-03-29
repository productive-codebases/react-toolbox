import { ContainerFlexExamples } from './ContainerFlexExamples'
import { AppReactToolboxComponents } from '@/SampleApp/libs/ReactToolbox'

export interface IPage1Props {}

export function Page1(props: IPage1Props) {
  return (
    <>
      <AppReactToolboxComponents.ContainerFlex
        name="Layout"
        flexJustifyContent="space-between"
      >
        <ContainerFlexExamples />
        <AppReactToolboxComponents.PortalPlaceHolder name="rightSideBar" />
      </AppReactToolboxComponents.ContainerFlex>

      <AppReactToolboxComponents.Portal name="rightSideBar">
        Here the content of PortalExample1
      </AppReactToolboxComponents.Portal>
    </>
  )
}
