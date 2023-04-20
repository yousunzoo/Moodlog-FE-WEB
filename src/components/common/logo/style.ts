import styled from 'styled-components'

export const Logo = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin: auto;
  background-image: url('../../../public/assets/icons/logo.png');
  background-size: cover;
`
