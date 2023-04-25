import styled from 'styled-components'
import { LogoProps } from '.'

export const Logo = styled.div<LogoProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin: ${({ isCenter }) => (isCenter ? '0 auto' : 0)};
  background-image: url(${({ theme }) => theme.logo});
  background-size: cover;
`
