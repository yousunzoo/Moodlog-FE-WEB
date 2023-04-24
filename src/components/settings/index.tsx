import React, { useState } from 'react'
import * as S from './style'
import useStore from '../../store'
import { useLogout } from '../../hooks/useLogout'
import Modal from '../common/modal'
import FontModal from '../fontModal'
import { IFont } from '../../types/store'
function Settings() {
  const { theme, toggleTheme, setFont } = useStore()
  const [toggle, setToggle] = useState(theme)
  const [isModalOpened, setIsModalOpened] = useState(false)
  const { mutate } = useLogout()
  const clickedToggle = () => {
    setToggle((prev) => (prev === 'light' ? 'dark' : 'light'))
    toggleTheme()
  }
  const handleLogout = () => {
    mutate()
  }
  const handleOpenModal = () => {
    setIsModalOpened(true)
  }
  const handleCloseModal = () => {
    setIsModalOpened(false)
  }
  const handleChangeFont = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLLIElement)) return
    const { font } = e.target.dataset as { font: IFont }
    setFont(font)
  }
  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <S.Title>계정</S.Title>
        <S.Menu>
          <S.MenuBtn>프로필 변경</S.MenuBtn>
        </S.Menu>
        <S.Menu>
          <S.MenuBtn onClick={handleLogout}>로그아웃</S.MenuBtn>
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
          <S.MenuBtn onClick={handleOpenModal}>폰트</S.MenuBtn>
        </S.Menu>
      </S.MenuWrapper>
      <Modal isOpen={isModalOpened} onClose={handleCloseModal}>
        <FontModal handleChangeFont={handleChangeFont} />
      </Modal>
    </S.Wrapper>
  )
}

export default Settings
