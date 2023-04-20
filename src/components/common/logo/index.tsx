import React from 'react'
import * as S from './style'

interface Props {
  size: number
}

function Logo({ size }: Props) {
  return <S.Logo size={size} />
}

export default Logo
