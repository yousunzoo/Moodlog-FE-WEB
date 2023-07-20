import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 25px;
  position: relative;
`
export const FileButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  background-color: ${({ theme: { mode } }) => mode.main01};
  color: ${({ theme: { mode } }) => mode.buttonText};
`

export const CloseButton = styled(Link)`
  display: block;
  width: 30px;
  height: 30px;
  transform: translateY(50%);
  color: ${({ theme: { mode } }) => mode.textColor};
  svg {
    width: 100%;
    height: 100%;
  }
`
