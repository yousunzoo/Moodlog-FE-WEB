import * as S from './style'
import { DiaryResponse } from '../../../../types/diary'

interface ContainerProp {
  post: DiaryResponse
  isShownUsername: boolean
}

export function Post({ post, isShownUsername }: ContainerProp) {
  const month = String(new Date(post.createdAt).getMonth() + 1).padStart(2, '0')
  const day = new Date(post.createdAt).getDate()
  return (
    <S.DiaryPost to={`/diary/${post.id}`}>
      <S.DiaryPostImage>
        <img src={post.img} width="100%" />
      </S.DiaryPostImage>
      <S.DiaryPostLetter>
        {isShownUsername && typeof post.user !== 'undefined' ? (
          <S.DiaryPostLetterContain>
            <S.UsernameText>{post.user.username}</S.UsernameText>
            <S.PostBodyWrapper>{post.body}</S.PostBodyWrapper>
          </S.DiaryPostLetterContain>
        ) : (
          <S.DiaryPostLetterContain>
            <S.PostBodyWrapper>{post.body}</S.PostBodyWrapper>
          </S.DiaryPostLetterContain>
        )}
      </S.DiaryPostLetter>
      <S.DiaryPostDate>
        <S.DiaryPostDateContain>
          {month}
          <br />
          {day}
        </S.DiaryPostDateContain>
      </S.DiaryPostDate>
    </S.DiaryPost>
  )
}
