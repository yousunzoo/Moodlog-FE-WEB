import styled from 'styled-components'

export const Button = styled.div`
  position: absolute;
  top: 14px;
  left: 20px;
  width: 30px;
  height: 30px;
  color: ${({ theme: { mode } }) => mode.textColor};
  svg {
    width: 100%;
    height: 100%;
  }
`
