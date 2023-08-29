import { AppProvider } from './libs/ReactToolbox'
import { Page1 } from './pages/Page1'

export function AppSample() {
  return (
    <AppProvider>
      <Page1 />
    </AppProvider>
  )
}
