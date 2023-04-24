import React, { useState } from 'react'
import * as S from './style'
import Modal from '../common/modal'
import { moodImgUrl } from '../../constants/moodImgUrl'
import MoodModal from '../moodModal'
import { DiaryEditorProps } from '../../types/createDiary'

function DiaryEditor({ diary, onChange, handleChangeMood, handleChangeOpen }: DiaryEditorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }
  return (
    <>
      <div>
        <S.EditorTab>
          <S.TabTitle htmlFor="title">제목</S.TabTitle>
          <S.TabInput id="title" placeholder="제목을 입력해주세요" value={diary.title} onChange={onChange} />
        </S.EditorTab>
        <S.EditorTab>
          <S.TabTitle htmlFor="mood">오늘의 기분</S.TabTitle>
          <S.TabSelect onClick={handleOpenModal}>
            <S.MoodImg src={moodImgUrl[diary.feeling_code].src} alt={moodImgUrl[diary.feeling_code].alt} />
            <S.MoodSelect />
          </S.TabSelect>
        </S.EditorTab>
        <S.Img src={diary.img as string} alt="그림" />
        <S.EditorContent id="body" placeholder="내용을 입력해주세요" value={diary.body} onChange={onChange} />
        <S.Settings onClick={handleChangeOpen}>
          <S.SettingTitle>공개 여부</S.SettingTitle>
          <S.SettingItem data-open="true" className={diary.open ? 'active' : ''}>
            전체 공개
          </S.SettingItem>
          <S.SettingItem data-open="false" className={!diary.open ? 'active' : ''}>
            비공개
          </S.SettingItem>
        </S.Settings>
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <MoodModal onClick={handleChangeMood} />
      </Modal>
    </>
  )
}

export default DiaryEditor
