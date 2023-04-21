import styled from 'styled-components'

export const Button = styled.div<{ isLike?: boolean }>`
  width: 16px;
  height: 16px;
  background-image: ${({ isLike }) => `url('../../../public/assets/icons/${isLike ? 'like_fill' : 'like'}.png')`};
  background-size: cover;
`
