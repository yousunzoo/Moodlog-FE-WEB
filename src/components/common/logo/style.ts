import styled from 'styled-components'
import { LogoProps } from '.'

export const Logo = styled.div<LogoProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-image: url(${({ theme }) => theme.logo});
  background-size: cover;
`
