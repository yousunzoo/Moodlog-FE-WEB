import styled from 'styled-components'

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  img {
    width: 20px;
    height: 20px;
  }
  div {
    width: calc(100% - 20px);
    margin: 0 auto;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    align-items: center;
    text-align: center;
    transform: translateX(-10px);
  }
`

export const Follows = styled.div`
  margin-top: 20px;
  height: calc(100% - 140px);
  width: 100%;
`

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
  background-color: beige;
`

export const FollowUserId = styled.div`
  width: 180px;
  height: 40px;
  margin: auto 25px;
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
  }
  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`

export const FollowBtn = styled.button`
  width: 100px;
  height: 30px;
  background: #eeeeee;
  border-radius: 10px;
  margin: auto;
`
