import { ContainerFlexExamples } from './ContainerFlexExamples'
import {
  ContainerFlex,
  Portal,
  PortalPlaceHolder,
  useAppContext,
  useAppLogger,
  useAppTheme
} from '@/AppSample/libs/ReactToolbox'

export interface IPage1Props {}

export function Page1(props: IPage1Props) {
  const valueAppContext = useAppContext()
  const theme = useAppTheme()
  const logger = useAppLogger().newLogger('AppSample')('components')

  logger('info')('App context: %o', valueAppContext)
  logger('info')('App theme: %o', theme)

  return (
    <>
      <ContainerFlex name="Layout" flexJustifyContent="space-between">
        <ContainerFlexExamples />
        <PortalPlaceHolder name="rightSideBar" />
      </ContainerFlex>

      <Portal name="rightSideBar">Here the content of PortalExample1</Portal>
    </>
  )
}
