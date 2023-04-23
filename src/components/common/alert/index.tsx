import React, { useEffect, useRef, useState } from 'react'
import * as S from './style'
import { AlertProps } from '../../../types/alert'
function Alert({ isOpen, onClose, message }: AlertProps) {
  const [isOpened, setIsOpened] = useState(isOpen)
  const AlertRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsOpened(isOpen)
  }, [isOpen])

  useEffect(() => {
    const content = AlertRef.current

    const handleTransitionEnd = () => {
      if (!isOpened) {
        onClose()
      }
    }

    content?.addEventListener('transitionend', handleTransitionEnd)

    return () => {
      content?.removeEventListener('transitionend', handleTransitionEnd)
    }
  }, [isOpened, onClose])

  const handleClose = () => {
    setIsOpened(false)
  }

  return (
    <S.AlertOverlay className={isOpened ? 'open' : ''}>
      <S.AlertWrapper className={isOpened ? 'open' : ''} ref={AlertRef} onClick={(e) => e.stopPropagation()}>
        <S.AlertContent>{message}</S.AlertContent>
        <S.CloseBtn onClick={handleClose}>확인</S.CloseBtn>
      </S.AlertWrapper>
    </S.AlertOverlay>
  )
}

export default Alert
