import * as S from './style'
import { RiUser3Line } from 'react-icons/ri'
import { SlNote } from 'react-icons/sl'
import { HiOutlineHome, HiOutlinePencilAlt, HiOutlineUser } from 'react-icons/hi'
function Nav() {
  return (
    <S.Wrapper>
      <S.NavItem to="/" data-action="home">
        <HiOutlineHome />
      </S.NavItem>
      <S.NavItem to="/diaryCreate" data-action="write">
        <HiOutlinePencilAlt />
      </S.NavItem>
      <S.NavItem to="/user" data-action="followers">
        <HiOutlineUser />
      </S.NavItem>
    </S.Wrapper>
  )
}

export default Nav
