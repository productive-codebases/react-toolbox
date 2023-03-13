import { Theme, themes } from 'src/styles/themes'
import { ThemeProvider } from 'styled-components'

export interface IProviderProps {
  theme?: Theme
  children: React.ReactNode
}

/**
 * Main provider to use in your app to make components working properly.
 */
export default function Provider(props: IProviderProps) {
  const theme = props.theme ?? themes.default

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}
