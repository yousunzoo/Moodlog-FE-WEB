import styled from 'styled-components'

export const Button = styled.div<{ isLike?: boolean }>`
  width: 18px;
  height: 18px;
  color: ${({ isLike, theme: { mode } }) => isLike && mode.textColor};
  svg {
    width: 100%;
    height: 100%;
  }
`
