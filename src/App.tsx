import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider } from 'react-query'

import { queryClient } from './utils/queryClient'
import Router from './routes/Router'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { darkTheme, lightTheme } from './styles/theme'
import useStore from './store'

function App() {
  const { theme } = useStore()
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
