import styled from 'styled-components'

export const ShowDiaryIcon = styled.div`
  cursor: pointer;
  background-image: url(${({ theme }) => theme.showDiary});
  background-size: cover;
  width: 19px;
  height: 24px;
`

export const FollwerIcon = styled.div`
  cursor: pointer;
  background-image: url(${({ theme }) => theme.followers});
  background-size: cover;
  width: 30px;
  height: 30px;
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
