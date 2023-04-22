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
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 1rem;
  width: 100%;
  height: 60px;
  background-color: #f8f8f8;
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.brown01};
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  height: 50px;
`

export const SignupWrapper = styled.div`
  font-size: 12px;
`

export const SignupButton = styled.button`
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
