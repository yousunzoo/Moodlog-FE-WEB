import styled, { css } from 'styled-components'

// posts 컴포넌트
export const Posts = styled.div<{ height: string }>`
  position: absolute;
  width: 100%;
  height: ${(props) => props.height};
  left: 0px;
  top: 217px;
  overflow-y: scroll;
  background: ${({ theme }) => theme.white02};
`

// post 컴포넌트
export const DiaryPost = styled.div`
  display: flex;
  width: calc(100% - 50px);
  height: 60px;
  margin: 10px 25px;
`

export const DiaryPostImage = styled.div`
  width: 60px;
  height: 100%;
  background-color: #666;
`

export const DiaryPostLetter = styled.div`
  width: calc(100% - 120px);
  height: 100%;
  font-style: normal;
  font-weight: 500;
  display: flex;
  font-size: 14px;
  line-height: 17px;
`

export const DiaryPostLetterContain = styled.div`
  margin: auto 20px;
`

export const DiaryPostDate = styled.div`
  width: 60px;
  height: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;
  align-items: center;
  text-align: center;
`

export const DiaryPostDateContain = styled.div`
  width: 100%;
  margin: auto;
  color: ${({ theme }) => theme.modalBlack};
`
