import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

// post 컴포넌트
export const DiaryPost = styled(Link)`
  display: flex;
  width: calc(100% - 50px);
  height: 60px;
  margin: 10px 25px;
  text-decoration: none;
  color: ${({ theme }) => theme.modalBlack};
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
