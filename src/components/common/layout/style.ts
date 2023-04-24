import styled from 'styled-components'
import { IFont } from '../../../types/store'

interface ButtonProps {
  font: IFont
}
export const Wrapper = styled.section<ButtonProps>`
  width: 425px;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  position: relative;
  * {
    font-family: ${({ font }) => font};
    color: ${({ theme }) => theme.textColor};
  }
  transition: background-color 0.1s ease-in;
`
