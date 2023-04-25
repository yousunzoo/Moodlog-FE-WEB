import * as S from './style'
import { moodImgUrl } from '../../constants/moodImgUrl'
import { MoodModalProps } from '../../types/createDiary'

function MoodModal({ handleClose, onClick }: MoodModalProps) {
  const closeModal = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation()
    onClick(e)
    // @ts-ignore
    handleClose()
  }
  return (
    <>
      <S.ModalTitle>오늘의 무드</S.ModalTitle>
      <S.MoodList>
        {moodImgUrl.map((mood, idx) => (
          <S.MoodLi key={idx} data-mood={idx} onClick={closeModal}>
            <S.MoodImg src={mood.src} alt={mood.alt} />
          </S.MoodLi>
        ))}
      </S.MoodList>
    </>
  )
}

export default MoodModal
