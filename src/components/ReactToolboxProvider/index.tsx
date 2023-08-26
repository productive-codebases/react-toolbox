import { roles } from '@/libs/dataTestAttribute/roles'
import { appSetupLogger } from '@/SampleApp/libs/logger'
import { themes } from '@/styles/themes'
import { IReactToolboxProviderConfiguration } from '@/types'
import { useMemo } from 'react'
import { ThemeProvider } from 'styled-components'
import { createContext } from './context'
import { IReactToolboxProviderProps } from './types'

/**
 * Configure ReactToolboxProvider to pass data from components, hooks and toolings.
 */
export function configureReactToolboxProvider<
  TReactToolboxProviderConfiguration extends IReactToolboxProviderConfiguration
>(contextName: string) {
  return function ReactToolboxProvider(
    props: IReactToolboxProviderProps<TReactToolboxProviderConfiguration>
  ) {
    const ProviderContext = useMemo(() => {
      return createContext(contextName)
    }, [])

    const providerConfiguration: IReactToolboxProviderConfiguration = {
      theme: props.configuration?.theme ?? themes.default,
      roles,
      loggerSetup: props.configuration?.loggerSetup ?? appSetupLogger,
      portalNames: ['default']
    }

    return (
      <ProviderContext.Provider value={providerConfiguration}>
        <ThemeProvider theme={providerConfiguration.theme}>
          {props.children}
        </ThemeProvider>
      </ProviderContext.Provider>
    )
  }
}
