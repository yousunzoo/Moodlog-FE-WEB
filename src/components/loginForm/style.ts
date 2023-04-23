import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

export const Form = styled.form`
  /* position: absolute; */
`

export const Input = styled.input`
  font-size: 20px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 1rem;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.gray04};
`

export const SigninButton = styled.button`
  font-size: 20px;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.brown01};
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  height: 50px;
`

export const SignupWrapper = styled.div`
  text-align: center;
  font-size: 16px;
`

export const SignupButton = styled.button`
  font-weight: bold;
  color: ${({ theme }) => theme.brown02};
  margin: 0 10px;
  cursor: pointer;
`

export const PasswordButton = styled.button<{ isShown: boolean }>`
  width: 30px;
  height: 30px;
  background-image: ${({ isShown }) =>
    isShown
      ? `url('../../../public/assets/icons/show-password.png')`
      : `url('../../../public/assets/icons/hide-password.png')`};
  background-size: cover;
  background-color: transparent;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
`

export const Label = styled.label`
  position: relative;
`

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.brown02};
`
export const ErrorWrapper = styled.div`
  height: 20px;
`
