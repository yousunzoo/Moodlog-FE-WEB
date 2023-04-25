import * as S from './style'
import { useDateForm } from '../../hooks/useDateForm'
import { DiaryResponse } from '../../types/diary'
import { moodImgUrl } from '../../constants/moodImgUrl'
import { useNavigate } from 'react-router-dom'

export interface DiaryDetailProps {
  diary: DiaryResponse
}

function DiaryDetail({ diary }: DiaryDetailProps) {
  const navigate = useNavigate()
  return (
    <S.DiaryDetail>
      <div className="mood">
        <img src={moodImgUrl[diary.feeling_code]} alt="" />
      </div>
      <div className="date">
        <span>{useDateForm(diary.createdAt).date}</span>
        <span className="day">{useDateForm(diary.createdAt).day}</span>
      </div>
      <div className="diary">
        {diary.img === '' ? null : <img src={diary.img} alt={diary.title} />}
        <p>{diary.body}</p>
      </div>
      <div className="auth" onClick={() => navigate(`/profile/${diary.user.id}`)}>
        작성자 : {diary.user.username}
      </div>
    </S.DiaryDetail>
  )
}

export default DiaryDetail
