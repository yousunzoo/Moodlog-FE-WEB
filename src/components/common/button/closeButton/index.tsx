import React from 'react'
import * as S from './style'
import { useNavigate } from 'react-router-dom'
import { MdClose } from 'react-icons/md'

function CloseButton() {
  const navigate = useNavigate()
  const handleOnClick = () => {
    navigate(-1)
  }

  return (
    <S.Button onClick={handleOnClick}>
      <MdClose />
    </S.Button>
  )
}

export default CloseButton
