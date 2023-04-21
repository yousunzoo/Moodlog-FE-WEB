import React from 'react'
import * as S from './style'

interface Props {
  like?: boolean
}

function LikeButton({ like }: Props) {
  return <S.Button isLike={like} />
}

export default LikeButton
