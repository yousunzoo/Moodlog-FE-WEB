import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0;
`

export const MenuWrapper = styled.div`
  padding-top: 60px;
`

export const Title = styled.p`
  color: ${({ theme: { mode } }) => mode.placeholder};
  padding: 0 25px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  border-bottom: 2px solid ${({ theme: { mode } }) => mode.border};
`

export const Menu = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 0 25px;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: ${({ theme: { mode } }) => mode.textColor};
  background-color: ${({ theme: { mode } }) => mode.card};
  border-bottom: 2px solid ${({ theme: { mode } }) => mode.border};
`
export const MenuBtn = styled.button`
  color: ${({ theme: { mode } }) => mode.textColor};
`

interface ToggleProps {
  toggle: 'light' | 'dark'
}
export const ToggleBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
  height: 30px;
  border-radius: 30px;
  padding: 0 6px;
  border: none;
  cursor: pointer;
  background-color: ${({ toggle }: ToggleProps) => (toggle === 'light' ? '#3F4D62' : '#E0E0E0')};
  position: relative;
  transition: all 0.5s ease-in-out;
`
export const Circle = styled.div`
  background-color: white;
  width: 22px;
  height: 22px;
  border-radius: 50px;
  position: absolute;
  left: 6%;
  transition: all 0.3s ease-in-out;
  ${({ toggle }: ToggleProps) =>
    toggle === 'light' &&
    css`
      transform: translate(30px, 0);
      transition: all 0.3s ease-in-out;
    `}
`
export const SelectedFont = styled.span``
