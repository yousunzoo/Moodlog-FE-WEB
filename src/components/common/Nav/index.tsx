import useUserData from '../../../hooks/useUserData'
import * as S from './style'
import { HiOutlineHome, HiOutlinePencilAlt, HiOutlineUser } from 'react-icons/hi'
function Nav() {
  const { data: own } = useUserData()
  return (
    <S.Wrapper>
      <S.NavItem to="/" data-action="home">
        <HiOutlineHome />
      </S.NavItem>
      <S.NavItem to="/diaryCreate" data-action="write">
        <HiOutlinePencilAlt />
      </S.NavItem>
      <S.NavItem to={typeof own === 'undefined' ? `/` : `/profile/${Number(own.id)}`} data-action="followers">
        <HiOutlineUser />
      </S.NavItem>
    </S.Wrapper>
  )
}

export default Nav
