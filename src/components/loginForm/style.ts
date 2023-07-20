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
  background-color: ${({ theme: { mode } }) => mode.input};
  color: ${({ theme: { mode } }) => mode.textColor};
  border: none;
  padding: 0 20px;
  &::placeholder {
    color: ${({ theme: { mode } }) => mode.placeholder};
  }
`

export const SigninButton = styled.button`
  font-size: 20px;
  margin: 20px 0;
  background-color: ${({ theme: { mode } }) => mode.main01};
  color: ${({ theme: { mode } }) => mode.buttonText};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  height: 50px;
`

export const SignupWrapper = styled.div`
  text-align: center;
  font-size: 16px;
  color: ${({ theme: { mode } }) => mode.placeholder};
`

export const SignupButton = styled.button`
  font-weight: bold;
  color: ${({ theme: { mode } }) => mode.main01};
  margin: 0 10px;
  cursor: pointer;
`

export const PasswordButton = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  color: ${({ theme: { mode } }) => mode.textColor};
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
  svg {
    width: 100%;
    height: 100%;
  }
`

export const Label = styled.label`
  position: relative;
`

export const ErrorMessage = styled.span`
  color: ${({ theme: { mode } }) => mode.main01};
`
export const ErrorWrapper = styled.div`
  height: 20px;
`
