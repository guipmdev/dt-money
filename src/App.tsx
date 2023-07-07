import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { ThemeProvider } from 'styled-components'

import { Transactions } from './pages/Transactions'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transactions />

      <GlobalStyle />
    </ThemeProvider>
  )
}
