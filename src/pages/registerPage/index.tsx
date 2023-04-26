import RegisterForm from '../../components/registerForm'
import * as S from './style'
import Logo from '../../components/common/logo'
import { MdClose } from 'react-icons/md'

function RegisterPage() {
  return (
    <S.Wrapper>
      <S.CloseButton to="/login">
        <MdClose />
      </S.CloseButton>
      <Logo size={200} isCenter={true} />
      <RegisterForm />
    </S.Wrapper>
  )
}

export default RegisterPage
