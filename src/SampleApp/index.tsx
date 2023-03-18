import ReactToolboxProvider from '@/components/ReactToolboxProvider'
import Page1 from './pages/Page1'
import { appProviderConfiguration } from './providerConfiguration'

function SampleApp() {
  return (
    <ReactToolboxProvider configuration={appProviderConfiguration}>
      <Page1 />
    </ReactToolboxProvider>
  )
}

export default SampleApp
