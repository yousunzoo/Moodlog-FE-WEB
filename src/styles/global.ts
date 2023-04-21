import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { reset } from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${reset}

  input, textarea, button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
  }

  button {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    background-color: #808080;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
`
