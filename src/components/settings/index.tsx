import React, { useState } from 'react'
import * as S from './style'
import useStore from '../../store'
function Settings() {
  const { theme, toggleTheme } = useStore()
  const [toggle, setToggle] = useState(theme)
  const clickedToggle = () => {
    setToggle((prev) => (prev === 'light' ? 'dark' : 'light'))
    toggleTheme()
  }

  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <S.Title>계정</S.Title>
        <S.Menu>
          <S.MenuBtn>프로필 변경</S.MenuBtn>
        </S.Menu>
        <S.Menu>
          <S.MenuBtn>로그아웃</S.MenuBtn>
        </S.Menu>
        <S.Menu>
          <S.MenuBtn>계정 삭제</S.MenuBtn>
        </S.Menu>
      </S.MenuWrapper>
      <S.MenuWrapper>
        <S.Title>일반</S.Title>
        <S.Menu>
          테마
          <S.ToggleBtn onClick={clickedToggle} toggle={toggle}>
            <S.Circle toggle={toggle} />
          </S.ToggleBtn>
        </S.Menu>
        <S.Menu>
          <S.MenuBtn>폰트</S.MenuBtn>
        </S.Menu>
      </S.MenuWrapper>
    </S.Wrapper>
  )
}

export default Settings
