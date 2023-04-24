import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/global'
import { darkTheme, lightTheme } from './styles/theme'
import { ThemeProvider } from 'styled-components'

const theme = 'light' // store 설정 전 임시로
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
)
