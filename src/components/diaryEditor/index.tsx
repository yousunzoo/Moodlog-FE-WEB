import React, { useState } from 'react'
import * as S from './style'
import Modal from '../common/modal'
import { moodImgUrl } from '../../constants/moodImgUrl'
import MoodModal from '../moodModal'

function DiaryEditor() {
  const [diary, setDiary] = useState({ title: '', content: '', moodCode: 1, open: true })
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setDiary({
      ...diary,
      [id]: value,
    })
  }
  const handleChangeMood = (e: React.MouseEvent<HTMLLIElement>) => {
    const { mood } = e.currentTarget.dataset
    setDiary({
      ...diary,
      moodCode: Number(mood),
    })
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
            <S.MoodImg src={moodImgUrl[diary.moodCode]} />
            <S.MoodSelect />
          </S.TabSelect>
        </S.EditorTab>
        <S.EditorContent id="content" placeholder="내용을 입력해주세요" value={diary.content} onChange={onChange} />
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <MoodModal onClick={handleChangeMood} />
      </Modal>
    </>
  )
}

export default DiaryEditor
