import React from 'react'
import * as S from './style'
import { useNavigate } from 'react-router-dom'

function CloseButton() {
  const navigate = useNavigate()
  const handleOnClick = () => {
    navigate(-1)
  }

  return <S.Button onClick={handleOnClick} />
}

export default CloseButton
