import React, { useState } from 'react'
import * as S from './style'
import Modal from '../common/modal'
import { moodImgUrl } from '../../constants/moodImgUrl'
import MoodModal from '../moodModal'
import { DiaryEditorProps } from '../../types/createDiary'

function DiaryEditor({ diary, onChange, handleChangeMood }: DiaryEditorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }
  console.log(diary)
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
            <S.MoodImg src={moodImgUrl[diary.feeling_code]} />
            <S.MoodSelect />
          </S.TabSelect>
        </S.EditorTab>
        <img src={diary.img} alt="img" />
        <S.EditorContent id="body" placeholder="내용을 입력해주세요" value={diary.body} onChange={onChange} />
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <MoodModal onClick={handleChangeMood} />
      </Modal>
    </>
  )
}

export default DiaryEditor
