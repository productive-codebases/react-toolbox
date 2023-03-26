import {
  appProviderConfiguration,
  AppReactToolboxComponents
} from './libs/ReactToolbox'
import { Page1 } from './pages/Page1'

export function SampleApp() {
  return (
    <AppReactToolboxComponents.ReactToolboxProvider
      configuration={appProviderConfiguration}
    >
      <Page1 />
    </AppReactToolboxComponents.ReactToolboxProvider>
  )
}
