import * as S from './style'
import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router'
import { deletsPost, getPost } from '../../apis/diary'
import DiaryDetail from '../../components/diaryDetail'
import Loading from '../../components/common/loading'
import PrevButton from '../../components/common/button/prevButton'
import DotsButton from '../../components/common/button/dotsButton'
import Comments from '../../components/comments'
import { useState } from 'react'
import useUserData from '../../hooks/useUserData'

function ShowDiary() {
  const navigate = useNavigate()
  const { id } = useParams()

  const { data: user } = useUserData()
  const [showDropdown, setShowDropdown] = useState(false)

  const { isLoading, error, data: diary } = useQuery(['post', id], () => getPost(Number(id)), {})

  const { mutate } = useMutation(() => deletsPost(Number(id)), {
    onSuccess: () => {
      navigate('/')
    },
  })
  // console.log(user)

  if (isLoading) return <Loading />
  if (error) return <>error</>
  return (
    <S.DiaryWrapper>
      {diary ? (
        <>
          <S.TopBar>
            <span className="left" onClick={() => navigate('/')}>
              <PrevButton />
            </span>
            <h2>{diary.title}</h2>
            <div className="right">
              {user?.post.some((p) => Number(p.id) === Number(id)) && (
                <span onClick={() => setShowDropdown(!showDropdown)}>
                  <DotsButton />
                </span>
              )}
              {showDropdown && (
                <ul className="dropdown">
                  <li
                    className="edit"
                    onClick={() => {
                      navigate(`/diaryCreate/${id}`)
                    }}
                  >
                    수정
                  </li>
                  <li className="delete" onClick={() => mutate()}>
                    삭제
                  </li>
                </ul>
              )}
            </div>
          </S.TopBar>
          <DiaryDetail diary={diary} />
          <Comments diary={diary} />
        </>
      ) : (
        <Loading />
      )}
    </S.DiaryWrapper>
  )
}

export default ShowDiary
