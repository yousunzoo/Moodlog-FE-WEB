import styled from 'styled-components'
export const Container = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme: { mode } }) => mode.textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  svg {
    width: 160px;
    height: 160px;
    color: ${({ theme: { mode } }) => mode.placeholder};
  }
`

export const Title = styled.h1`
  font-size: 24px;
`

export const Timer = styled.p``
