import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoAlert } from 'react-icons/go'
import * as S from './style'

function NotFound() {
  const navigate = useNavigate()
  const [timer, setTimer] = useState(3)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimer(timer - 1)
      if (timer === 1) {
        navigate('/')
      }
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  })
  return (
    <S.Container>
      <GoAlert />
      <S.Title>해당 페이지를 찾을 수 없습니다.</S.Title>
      <S.Timer>{timer}초 후에 메인 페이지로 이동합니다.</S.Timer>
    </S.Container>
  )
}

export default NotFound
