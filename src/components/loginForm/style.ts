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
  border-radius: 10px;
  margin-bottom: 1rem;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.input};
  border: none;
  padding: 0 20px;
  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`

export const SigninButton = styled.button`
  font-size: 20px;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.main01};
  color: ${({ theme }) => theme.buttonText};
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
  color: ${({ theme }) => theme.main01};
  margin: 0 10px;
  cursor: pointer;
`

export const PasswordButton = styled.button<{ isShown: boolean }>`
  width: 30px;
  height: 30px;
  background-image: url(${({ isShown, theme }) => (isShown ? theme.showPw : theme.hidePw)});
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
  color: ${({ theme }) => theme.main01};
`
export const ErrorWrapper = styled.div`
  height: 20px;
`
