import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  background-image: url('/public/assets/icons/setting.png');
`
export const TopBarLink = styled(Link)`
  width: 25px;
  height: 25px;
  font-size: 0;
  text-indent: -999;
  background-size: 25px;
  background-image: url(${({ theme }) => theme.close});
`

export const TopTitle = styled.div`
  width: calc(100% - 20px);
  margin: 0 auto;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  align-items: center;
  text-align: center;
  transform: translateX(-10px);
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
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.placeholder};
  }
`

export const FollowUserIdLink = styled(Link)`
  text-decoration: none;
  width: 180px;
  height: 40px;
  margin: auto 25px;
  color: ${({ theme }) => theme.modalText};
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
  background: ${({ theme }) => theme.main02};
  color: ${({ theme }) => theme.background};
  border-radius: 10px;
  margin: auto;
`
