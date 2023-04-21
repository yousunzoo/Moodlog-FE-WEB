import * as S from './style'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router'
import { createComment, deleteComment, getPost, updateLike } from '../../apis/diary'
import { useDateForm } from '../../hooks/useDateForm'
import LikeButton from '../../components/common/button/likeButton'
import Loading from '../../components/common/loading'
import PrevButton from '../../components/common/button/prevButton'
import DotsButton from '../../components/common/button/dotsButton'
import SpeechBubbleButton from '../../components/common/button/speechBubbleButton'
import { login } from '../../apis/auth'
import { queryClient } from '../../utils/queryClient'
import { setToken } from '../../utils/userTokenCookie'
import { AxiosError } from 'axios'

interface Commnets {
  id: number
  comment: string
  createdAt: Date
  user: {
    id: number
    email: string
    username: string
    profile_image: string
    profile_message: string
  }
}

function DiaryDetailPage() {
  const textarea = useRef<HTMLTextAreaElement>(null)
  const navigate = useNavigate()
  const { id } = useParams()

  const [comment, setComment] = useState('')

  const { isLoading, error, data: diary } = useQuery(['post', id], () => getPost(Number(id)), {})
  const { mutate: likeMutate } = useMutation(() => updateLike(Number(diary.id)), {
    onSuccess: () => {
      queryClient.invalidateQueries('post')
    },
  })
  const { mutate: commentMutate } = useMutation(() => createComment({ postId: Number(id), body: comment }), {
    onSuccess: () => {
      queryClient.invalidateQueries('post')
    },
  })
  const { mutate: commentDeleteMutate } = useMutation((postId: number) => deleteComment(Number(postId)), {
    onSuccess: () => {
      queryClient.invalidateQueries('post')
    },
  })
  const { mutate: loginMutate } = useMutation(() => login({ email: 'test@test.com', password: 'test1234' }), {
    onSuccess: (data) => {
      setToken(data.accessToken, {
        path: '/',
        maxAge: data.content.exp - data.content.iat,
      })
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (textarea.current) {
      if (textarea.current.scrollHeight < 120) {
        textarea.current.style.height = 'auto'
        textarea.current.style.height = `${textarea.current.scrollHeight}px`
      }
    }
    setComment(e.target.value)
  }

  const commentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (comment === '') return alert('내용을 작성해주세요')
    commentMutate()
    setComment('')
  }

  const handleLike = () => {
    likeMutate()
  }

  if (isLoading) return <Loading />
  if (error) return <>error</>
  return (
    <>
      <S.TopBar>
        <span className="left" onClick={() => navigate(-1)}>
          <PrevButton />
        </span>
        <h2>{diary.title}</h2>
        <div className="right" onClick={() => loginMutate()}>
          <DotsButton />
          <ul className="dropdown hidden">
            <li className="edit">수정</li>
            <li className="delete">삭제</li>
          </ul>
        </div>
      </S.TopBar>
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
      <S.Comments>
        <div className="interact">
          <div className="like button" onClick={handleLike}>
            <LikeButton />
            {diary.likes.length}
          </div>
          <div className="comment button" onClick={() => textarea.current?.focus()}>
            <SpeechBubbleButton />
            {diary.comments.length}
          </div>
        </div>
        <form className="create-comment" onSubmit={(e) => commentSubmit(e)}>
          <textarea ref={textarea} onChange={onChange} value={comment} />
          <button>등록</button>
        </form>
        <div className="comments">
          {diary.comments?.map((comment: Commnets) => (
            <div className="comment" key={comment.id}>
              <div className="comment-header">
                <div className="user">{comment.user.username}</div>
                <div className="date">{useDateForm(comment.createdAt).date}</div>
              </div>
              <div className="comment-body">{comment.comment}</div>
              <div className="delete" onClick={() => commentDeleteMutate(comment.id)}>
                삭제
              </div>
            </div>
          ))}
        </div>
      </S.Comments>
    </>
  )
}

export default DiaryDetailPage
