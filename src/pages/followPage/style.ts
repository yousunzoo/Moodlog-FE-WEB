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
