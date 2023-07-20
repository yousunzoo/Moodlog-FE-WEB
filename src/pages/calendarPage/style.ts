import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  color: ${({ theme: { mode } }) => mode.textColor};
`
export const TopBarLink = styled(Link)`
  width: 30px;
  height: 30px;
  font-size: 0;
  text-indent: -999;
  color: ${({ theme: { mode } }) => mode.textColor};
  svg {
    width: 30px;
    height: 30px;
  }
`

export const TopTitle = styled.div`
  width: calc(100% - 100px);
  margin: 0 auto;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  align-items: center;
  text-align: center;
  transform: translateX(-10px);
`
