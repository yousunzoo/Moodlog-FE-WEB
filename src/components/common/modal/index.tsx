import { useEffect, useRef, useState } from 'react'
import * as S from './style'
import { ModalProps } from '../../../types/modal'

function Modal({ isOpen, onClose, children }: ModalProps) {
  const [isOpened, setIsOpened] = useState(isOpen)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsOpened(isOpen)
  }, [isOpen])

  useEffect(() => {
    const content = modalRef.current

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
    <>
      {isOpen && (
        <S.ModalOverlay className={isOpened ? 'open' : ''} onClick={handleClose}>
          <S.ModalWrapper
            className={`modal-content ${isOpened ? 'open' : ''}`}
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </S.ModalWrapper>
        </S.ModalOverlay>
      )}
    </>
  )
}

export default Modal
