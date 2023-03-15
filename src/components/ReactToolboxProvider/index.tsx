import { newLogger } from '@/libs/logger'
import { themes } from '@/styles/themes'
import { ThemeProvider } from 'styled-components'
import { IProviderContext, ProviderContext } from './context'

export interface IReactToolboxProviderProps {
  providerContext?: IProviderContext
  children: React.ReactNode
}

/**
 * Main provider to use in your app to make components working properly.
 */
export default function ReactToolboxProvider(
  props: IReactToolboxProviderProps
) {
  const providerValue: IProviderContext = {
    theme: props.providerContext?.theme ?? themes.default,
    logger:
      props.providerContext?.logger ?? newLogger('react-toolbox')('components')
  }

  return (
    <ProviderContext.Provider value={providerValue}>
      <ThemeProvider theme={providerValue.theme}>
        {props.children}
      </ThemeProvider>
    </ProviderContext.Provider>
  )
}
