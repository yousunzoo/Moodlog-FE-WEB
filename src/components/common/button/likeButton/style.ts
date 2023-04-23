import styled from 'styled-components'

export const Button = styled.div<{ isLike?: boolean }>`
  width: 16px;
  height: 16px;
  background-image: url(${({ isLike, theme }) => (isLike ? '../../../public/assets/icons/like_fill.png' : theme.like)});
  background-size: cover;
`
