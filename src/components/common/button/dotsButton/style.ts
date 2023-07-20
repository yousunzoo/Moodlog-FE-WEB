import styled from 'styled-components'

export const Button = styled.button`
  width: 24px;
  height: 24px;
  background-size: cover;
  color: ${({ theme: { mode } }) => mode.icons};
  svg {
    width: 100%;
    height: 100%;
  }
`
