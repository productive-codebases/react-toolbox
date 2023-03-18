import ContainerFlex from '@/components/ContainerFlex'
import Portal from '@/components/Portal'
import PortalPlaceHolder from '@/components/Portal/PortalPlaceHolder'
import { PortalName } from '../types'
import ContainerFlexExamples from './ContainerFlexExamples'

export interface IPage1Props {}

export default function Page1(props: IPage1Props) {
  return (
    <>
      <ContainerFlex name="Layout" flexJustifyContent="space-between">
        <ContainerFlexExamples />
        <PortalPlaceHolder<PortalName> name="PortalExample1" />
      </ContainerFlex>

      <Portal<PortalName> name="PortalExample1">
        Here the content of PortalExample1
      </Portal>
    </>
  )
}
