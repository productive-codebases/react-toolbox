import { ReactToolboxComponents } from '@/SampleApp/components'
import { PortalName } from '../types'
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
        <ReactToolboxComponents.PortalPlaceHolder<PortalName> name="PortalExample1" />
      </ReactToolboxComponents.ContainerFlex>

      <ReactToolboxComponents.Portal<PortalName> name="PortalExample1">
        Here the content of PortalExample1
      </ReactToolboxComponents.Portal>
    </>
  )
}
