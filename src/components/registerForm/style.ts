import styled from 'styled-components'

export const Form = styled.form``

export const InputArea = styled.div`
  width: 100%;
  height: 80px;
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: none;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.input};
  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`

export const FileInput = styled(Input)`
  display: none;
`

export const ErrorMessage = styled.div``

export const ResigterButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.main01};
  border-radius: 10px;
  height: 50px;
  color: ${({ theme }) => theme.buttonText};
`
export const ProfileWrapper = styled.div`
  display: flex;
  margin: 30px 0;
`

export const ProfileTextWrapper = styled.div`
  margin-left: 20px;
`
