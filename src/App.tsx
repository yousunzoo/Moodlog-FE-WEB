import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider } from 'react-query'

import { queryClient } from './utils/queryClient'
import Router from './routes/Router'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { darkTheme, lighttheme : {mode}} from './styles/theme'
import useStore from './store'

function App() {
  const { theme, font } = useStore()
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme === 'light' ? { mode: lightTheme, font } : { mode: darkTheme, font }}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
