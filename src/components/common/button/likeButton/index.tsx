import React from 'react'
import * as S from './style'
import { FcLike } from 'react-icons/fc'
import { AiOutlineHeart } from 'react-icons/ai'
interface Props {
  like?: boolean
}

function LikeButton({ like }: Props) {
  return <S.Button>{like ? <FcLike /> : <AiOutlineHeart />}</S.Button>
}

export default LikeButton
