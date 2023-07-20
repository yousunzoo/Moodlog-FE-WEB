import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from './../common/button/dotsButton/style'

export const User = styled.div`
  display: flex;
  height: 60px;
`

export const UserImg = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;

  img {
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`

export const FollowUserIdLink = styled(Link)`
  flex-grow: 1;
  width: 180px;
  height: 40px;
  margin: auto 25px;
  text-decoration: none;
  color: ${({ theme: { mode } }) => mode.textColor};

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
  }

  h3 {
    color: #aaa;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`

export const FollowBtn = styled.button<{ opacity: number }>`
  width: 100px;
  height: 30px;
  color: ${({ theme: { mode } }) => mode.background};
  opacity: ${({ opacity }) => opacity};
  background-color: ${({ theme: { mode } }) => mode.main02};
  border-radius: 10px;
  margin: auto;
`

export const Follows = styled.div`
  margin-top: 20px;
  height: calc(100% - 140px);
  width: 100%;
`
