import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0px;
  width: 425px;
  height: 60px;
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const NavItem = styled.div`
  &[data-action='home'] {
    background-image: url(${({ theme }) => theme.home});
  }
  &[data-action='write'] {
    background-image: url(${({ theme }) => theme.write});
  }
  &[data-action='followers'] {
    background-image: url(${({ theme }) => theme.followers});
  }
  background-size: cover;
  width: 37px;
  height: 33px;
`
