import React, { MouseEvent, useState } from 'react'
import * as S from './style'
import useStore from '../../store'
import { useLogout } from '../../hooks/useLogout'
import Modal from '../common/modal'
import FontModal from '../fontModal'
import { IFont } from '../../types/store'
import ProfileModal from '../profileModal'
import WithdrawelModal from '../WithdrawelModal'
function Settings() {
  const { theme, font, toggleTheme, setFont } = useStore()
  const [toggle, setToggle] = useState(theme)
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [modalContents, setModalContents] = useState('fonts')

  const { mutate } = useLogout()
  const clickedToggle = () => {
    setToggle((prev) => (prev === 'light' ? 'dark' : 'light'))
    toggleTheme()
  }
  const handleLogout = () => {
    mutate()
  }
  const handleOpenModal = () => {
    setModalContents('fonts')
  }
  const handleCloseModal = () => {
    setIsModalOpened(false)
  }
  const handleChangeFont = (e: MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLLIElement)) return
    const { font } = e.target.dataset as { font: IFont }
    setFont(font)
  }
  const handleModal = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return
    const { contents } = e.target.dataset
    if (!contents) return
    setModalContents(contents)
    setIsModalOpened(true)
  }
  return (
    <S.Wrapper onClick={handleModal}>
      <S.MenuWrapper>
        <S.Title>계정</S.Title>
        <S.Menu>
          <S.MenuBtn data-contents="profile">프로필 변경</S.MenuBtn>
        </S.Menu>
        <S.Menu>
          <S.MenuBtn onClick={handleLogout}>로그아웃</S.MenuBtn>
        </S.Menu>
        <S.Menu>
          <S.MenuBtn data-contents="withdrawel">계정 삭제</S.MenuBtn>
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
          <S.MenuBtn data-contents="fonts" onClick={handleOpenModal}>
            폰트
          </S.MenuBtn>
          <S.SelectedFont>{font}</S.SelectedFont>
        </S.Menu>
      </S.MenuWrapper>
      <Modal isOpen={isModalOpened} onClose={handleCloseModal}>
        {modalContents === 'fonts' ? (
          <FontModal handleChangeFont={handleChangeFont} />
        ) : modalContents === 'profile' ? (
          <ProfileModal />
        ) : (
          <WithdrawelModal />
        )}
      </Modal>
    </S.Wrapper>
  )
}

export default Settings
