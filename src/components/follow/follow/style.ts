import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Follow = styled.div`
  height: 60px;
  width: calc(100% - 40px);
  margin: 0 auto 17px auto;
  display: flex;
`

export const FollowImg = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ theme: { mode } }) => mode.placeholder};
  }
`

export const FollowUserIdLink = styled(Link)`
  text-decoration: none;
  width: 180px;
  height: 40px;
  margin: 0 25px;
  color: ${({ theme: { mode } }) => mode.textColor};
  .email {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    margin-bottom: 6px;
  }
  .username {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme: { mode } }) => mode.placeholder};
  }
`

export const FollowBtn = styled.button<{ following: boolean }>`
  width: 100px;
  height: 32px;
  color: ${({ following, theme: { mode } }) => (following ? mode.background : mode.textColor)};
  background-color: ${({ following, theme: { mode } }) => (following ? mode.main02 : 'transparent')};
  border: 2px solid ${({ theme: { mode } }) => mode.main02};
  border-radius: 20px;
  margin: auto;
`

export const FollowNotBtn = styled.div`
  width: 100px;
  height: 30px;
  border: 2px solid ${({ theme: { mode } }) => mode.background};
  border-radius: 10px;
  margin: auto;
  display: flex;
  p {
    margin: auto;
  }
`
