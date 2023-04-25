import { TopbarWrapper } from '../../styles/common'
import { Title } from '../../components/topBar/style'
import Nav from '../../components/common/Nav'
import Settings from '../../components/settings'
import CloseButton from '../../components/common/button/closeButton'

function SettingPage() {
  return (
    <div>
      <TopbarWrapper>
        <CloseButton />
        <Title>설정</Title>
      </TopbarWrapper>
      <Settings />
      <Nav />
    </div>
  )
}

export default SettingPage
