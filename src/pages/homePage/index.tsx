import { useState } from 'react'
import Modal from '../../components/common/modal'

function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <button onClick={handleOpenModal}>click</button>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        // 모달 내용
      </Modal>
    </div>
  )
}

export default HomePage
