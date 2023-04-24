import React from 'react'
import * as S from './style'
import { Link } from 'react-router-dom'

export interface LogoProps {
  size: number
  isCenter: boolean
}

function Logo({ size, isCenter }: LogoProps) {
  return (
    <Link to={'/'}>
      <S.Logo size={size} isCenter={isCenter} />
    </Link>
  )
}

export default Logo
