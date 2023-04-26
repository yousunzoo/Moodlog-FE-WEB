import styled from 'styled-components'

export const Button = styled.div<{ isLike?: boolean }>`
  width: 18px;
  height: 18px;
  color: ${({ isLike, theme }) => isLike && theme.textColor};
  svg {
    width: 100%;
    height: 100%;
  }
`
