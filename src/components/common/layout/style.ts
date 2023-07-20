import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 425px;
  height: 100vh;
  background-color: ${({ theme: { mode } }) => mode.background};
  position: relative;
  * {
    font-family: ${({ theme: { font } }) => font};
  }
  transition: background-color 0.1s ease-in;
`
