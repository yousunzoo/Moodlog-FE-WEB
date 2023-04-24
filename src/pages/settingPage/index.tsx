import React from 'react'
import { TopbarWrapper } from '../../styles/common'
import { CloseBtn, Title } from '../../components/topBar/style'
import { useNavigate } from 'react-router-dom'
import Nav from '../../components/common/Nav'
import Settings from '../../components/settings'

function SettingPage() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(-1)
  }
  return (
    <div>
      <TopbarWrapper>
        <CloseBtn onClick={handleClick}>닫기</CloseBtn>
        <Title>설정</Title>
      </TopbarWrapper>
      <Settings />
      <Nav />
    </div>
  )
}

export default SettingPage
