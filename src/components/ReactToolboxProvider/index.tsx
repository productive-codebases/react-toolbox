import { roles } from '@/libs/dataTestAttribute/roles'
import { appSetupLogger } from '@/SampleApp/libs/logger'
import { themes } from '@/styles/themes'
import { IReactToolboxProviderConfiguration } from '@/types'
import { ThemeProvider } from 'styled-components'
import { ReactToolboxProviderContext } from './context'
import { IReactToolboxProviderProps } from './types'

/**
 * Main provider to use in your app to make components working properly.
 */
export function ReactToolboxProvider<
  TReactToolboxProviderConfiguration extends IReactToolboxProviderConfiguration
>(props: IReactToolboxProviderProps<TReactToolboxProviderConfiguration>) {
  const providerConfiguration: IReactToolboxProviderConfiguration = {
    theme: props.configuration?.theme ?? themes.default,
    roles,
    loggerSetup: props.configuration?.loggerSetup ?? appSetupLogger,
    portalNames: ['default']
  }

  return (
    <ReactToolboxProviderContext.Provider value={providerConfiguration}>
      <ThemeProvider theme={providerConfiguration.theme}>
        {props.children}
      </ThemeProvider>
    </ReactToolboxProviderContext.Provider>
  )
}
