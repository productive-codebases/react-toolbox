import { ReactToolboxComponents } from './components'
import { Page1 } from './pages/Page1'
import { appProviderConfiguration } from './providerConfiguration'

export function SampleApp() {
  return (
    <ReactToolboxComponents.ReactToolboxProvider
      configuration={appProviderConfiguration}
    >
      <Page1 />
    </ReactToolboxComponents.ReactToolboxProvider>
  )
}
