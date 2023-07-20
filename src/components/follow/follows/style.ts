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
  margin: auto 25px;
  color: ${({ theme: { mode } }) => mode.modalText};
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
  background-color: ${({ theme: { mode } }) => mode.main02};
  opacity: ${({ opacity }) => opacity};
  border-radius: 10px;
  margin: auto;
`

export const Follows = styled.div`
  margin-top: 20px;
  height: calc(100% - 140px);
  width: 100%;
`

export const FollowNotBtn = styled.div`
  width: 100px;
  height: 30px;
  color: ${({ theme: { mode } }) => mode.background};
  background-color: #442f11;
  border-radius: 10px;
  margin: auto;
  display: flex;
  p {
    margin: auto;
  }
`
