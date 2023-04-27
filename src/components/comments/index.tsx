import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import * as S from './style'
import LikeButton from '../common/button/likeButton'
import { DiaryDetailProps } from '../diaryDetail'
import SpeechBubbleButton from '../common/button/speechBubbleButton'
import { useDateForm } from '../../hooks/useDateForm'
import { useMutation } from 'react-query'
import { createComment, deleteComment, updateLike } from '../../apis/diary'
import { useParams } from 'react-router-dom'
import { queryClient } from '../../utils/queryClient'
import useUserData from '../../hooks/useUserData'

function Comments({ diary }: DiaryDetailProps) {
  const textarea = useRef<HTMLTextAreaElement>(null)
  const { id } = useParams()
  const { data: user, refetch } = useUserData()
  const [comment, setComment] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const { mutate: likeMutate } = useMutation(() => updateLike(Number(id)), {
    onSuccess: () => {
      refetch()
      queryClient.invalidateQueries('post')
    },
  })
  const { mutate: commentMutate } = useMutation(() => createComment({ postId: Number(id), body: comment }), {
    onSuccess: () => {
      refetch()
      queryClient.invalidateQueries('post')
    },
  })
  const { mutate: commentDeleteMutate } = useMutation((postId: number) => deleteComment(Number(postId)), {
    onSuccess: () => {
      refetch()
      queryClient.invalidateQueries('post')
    },
  })

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > 0) setShowAlert(false)
    if (textarea.current) {
      if (textarea.current.scrollHeight < 120) {
        textarea.current.style.height = 'auto'
        textarea.current.style.height = `${textarea.current.scrollHeight}px`
      }
    }
    setComment(e.target.value)
  }

  const onBlur = () => setShowAlert(false)

  const commentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (comment === '' && textarea.current) {
      setShowAlert(true)
      textarea.current.focus()
      return
    }
    commentMutate()
    setComment('')
  }

  const handleLike = () => {
    likeMutate()
  }

  return (
    <S.Comments>
      <div className="interact">
        <div className="like button" onClick={handleLike}>
          <LikeButton like={user?.likes.some((u) => Number(u.post.id) === Number(id))} />
          {diary.likes?.length}
        </div>
        <div className="comment button" onClick={() => textarea.current?.focus()}>
          <SpeechBubbleButton />
          {diary.comments?.length}
        </div>
      </div>
      <form className="create-comment" onSubmit={(e) => commentSubmit(e)}>
        <textarea ref={textarea} onChange={onChange} onBlur={onBlur} value={comment} />
        <button>등록</button>
        {showAlert && <span className="alert">내용을 작성해주세요</span>}
      </form>
      <div className="comments">
        {diary.comments?.map((comment) => (
          <S.Comment img={comment.user.profile_image} key={comment.id}>
            <div className="profile_img"></div>
            <div className="comment-header">
              <div className="user">{comment.user.username}</div>
              <div className="date">{useDateForm(comment.createdAt).date}</div>
            </div>
            <div className="comment-body">
              <p>{comment.comment}</p>
              {user?.id === comment.user.id && (
                <span className="delete" onClick={() => commentDeleteMutate(comment.id)}>
                  삭제
                </span>
              )}
            </div>
          </S.Comment>
        ))}
      </div>
    </S.Comments>
  )
}

export default Comments
