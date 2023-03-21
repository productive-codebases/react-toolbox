import { appSetupLogger } from '@/SampleApp/libs/logger'
import { themes } from '@/styles/themes'
import { ThemeProvider } from 'styled-components'
import { ProviderContext } from './context'
import { IProviderConfiguration, IReactToolboxProviderProps } from './types'

/**
 * Main provider to use in your app to make components working properly.
 */
export function ReactToolboxProvider<
  TProviderConfiguration extends IProviderConfiguration
>(props: IReactToolboxProviderProps<TProviderConfiguration>) {
  const providerValue = {
    theme: props.configuration?.theme ?? themes.default,
    loggerSetup: props.configuration?.loggerSetup ?? appSetupLogger
  }

  return (
    <ProviderContext.Provider value={providerValue}>
      <ThemeProvider theme={providerValue.theme}>
        {props.children}
      </ThemeProvider>
    </ProviderContext.Provider>
  )
}
