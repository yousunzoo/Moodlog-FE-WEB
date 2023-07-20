import styled from 'styled-components'

export const ShowDiaryIcon = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  color: ${({ theme: { mode } }) => mode.icons};
  svg {
    width: 100%;
    height: 100%;
  }
`

export const FollwerIcon = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  color: ${({ theme: { mode } }) => mode.icons};
  svg {
    width: 100%;
    height: 100%;
  }
`

export const IconWrapper = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContentWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  padding: 0 25px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  position: relative;
  padding: 0 25px;
`
