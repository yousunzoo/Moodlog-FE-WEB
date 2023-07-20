import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 25px;
  font-size: 20px;
`
export const Title = styled.h2`
  color: ${({ theme: { mode } }) => mode.textColor};
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  width: 200px;
`

export const Btn = styled.button`
  color: ${({ theme: { mode } }) => mode.placeholder};
  cursor: pointer;
  display: block;
  width: 40px;
  height: 30px;
`

export const CloseBtn = styled(Btn)`
  font-size: 0px;
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  color: ${({ theme: { mode } }) => mode.textColor};
  svg {
    width: 100%;
    height: 100%;
  }
`
export const PrevBtn = styled(CloseBtn)``
