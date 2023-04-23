import React from 'react'
import * as S from './style'

export interface LogoProps {
  size: number
  isCenter: boolean
}

function Logo({ size, isCenter }: LogoProps) {
  return <S.Logo size={size} isCenter={isCenter} />
}

export default Logo
