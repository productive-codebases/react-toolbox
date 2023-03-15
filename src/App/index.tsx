import ContainerFlex from '@/components/ContainerFlex'
import Portal from '@/components/Portal'
import PortalPlaceHolder from '@/components/Portal/PortalPlaceHolder'
import Provider from '@/components/Provider'
import ContainerFlexExamples from './ContainerFlexExamples'

type PortalName = 'PortalExample1' | 'PortalExample2'

function App() {
  return (
    <Provider>
      <ContainerFlex name="Layout" flexJustifyContent="space-between">
        <ContainerFlexExamples />
        <PortalPlaceHolder<PortalName> name="PortalExample1" />
      </ContainerFlex>

      <Portal<PortalName> name="PortalExample1">
        Here the content of PortalExample1
      </Portal>
    </Provider>
  )
}

export default App
