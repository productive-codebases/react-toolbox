import { newLogger } from '@/libs/logger'
import { themes } from '@/styles/themes'
import { ThemeProvider } from 'styled-components'
import { ProviderContext } from './context'
import {
  IProviderConfiguration,
  IProviderContext,
  IReactToolboxProviderProps
} from './types'

/**
 * Main provider to use in your app to make components working properly.
 */
export default function ReactToolboxProvider<
  TProviderConfiguration extends IProviderConfiguration
>(props: IReactToolboxProviderProps<TProviderConfiguration>) {
  const providerValue: IProviderContext<TProviderConfiguration> = {
    theme: props.configuration?.theme ?? themes.default,
    logger:
      props.configuration?.logger ?? newLogger('react-toolbox')('components')
  }

  return (
    <ProviderContext.Provider value={providerValue}>
      <ThemeProvider theme={providerValue.theme}>
        {props.children}
      </ThemeProvider>
    </ProviderContext.Provider>
  )
}
