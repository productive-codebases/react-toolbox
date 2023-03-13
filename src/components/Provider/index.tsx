import { ThemeProvider } from 'styled-components'
import { themes } from 'src/styles/themes'

export interface IProviderProps {
  children: React.ReactNode
}

/**
 * Main provider to use in your app to make components working properly.
 */
export default function Provider(props: IProviderProps) {
  return <ThemeProvider theme={themes.default}>{props.children}</ThemeProvider>
}
