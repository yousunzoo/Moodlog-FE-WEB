import * as S from './style'
import { useDateForm } from '../../hooks/useDateForm'
import { DiaryResponse } from '../../types/diary'

export interface DiaryDetailProps {
  diary: DiaryResponse
}

function DiaryDetail({ diary }: DiaryDetailProps) {
  return (
    <S.DiaryDetail>
      <div className="mood">
        <img src={`/assets/icons/mood-0${diary.feeling_code === 0 ? 5 : diary.feeling_code}.png`} alt="" />
      </div>
      <div className="date">
        <span>{useDateForm(diary.createdAt).date}</span>
        <span className="day">{useDateForm(diary.createdAt).day}</span>
      </div>
      <div className="diary">
        {diary.img === '' ? null : <img src={diary.img} alt={diary.title} />}
        <p>{diary.body}</p>
      </div>
    </S.DiaryDetail>
  )
}

export default DiaryDetail
