import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
export const Wrapper = styled.div`
  position: fixed;
  bottom: 0px;
  width: 425px;
  height: 60px;
  background: ${({ theme: { mode } }) => mode.background};
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const NavItem = styled(NavLink)`
  background-size: cover;
  width: 36px;
  height: 36px;
  color: ${({ theme: { mode } }) => mode.icons};
  &.active {
    color: ${({ theme: { mode } }) => mode.main01};
  }
  svg {
    width: 100%;
    height: 100%;
  }
`
