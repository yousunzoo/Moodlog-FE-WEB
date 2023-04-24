import React from 'react'
import * as S from './style'

export interface LogoProps {
  size: number
}

function Logo({ size }: LogoProps) {
  return <S.Logo size={size} />
}

export default Logo
