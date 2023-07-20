import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

// post 컴포넌트
export const DiaryPost = styled(Link)`
  display: flex;
  height: auto;
  margin: 10px auto;
  padding: 8px;
  text-decoration: none;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme: { mode } }) => mode.card};
  color: ${({ theme: { mode } }) => mode.textColor};
`

export const DiaryPostImage = styled.div`
  width: 60px;
  height: 100%;
  background-color: white;
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

export const UsernameText = styled.div`
  height: 16px;
  margin-bottom: 6px;
  font-weight: bold;
  font-size: 16px;
`

export const DiaryPostDate = styled.div`
  width: 60px;
  height: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  align-items: center;
  text-align: center;
  color: ${({ theme: { mode } }) => mode.palette01};
`

export const DiaryPostDateContain = styled.div`
  width: 100%;
  margin: auto;
  color: ${({ theme: { mode } }) => mode.main01};
`

export const PostBodyWrapper = styled.div`
  height: 36px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
