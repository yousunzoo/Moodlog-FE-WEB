import styled from 'styled-components'

export const Form = styled.form``

export const InputArea = styled.div`
  width: 100%;
  height: 90px;
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: none;
  padding: 0 20px;
  margin-bottom: 6px;
  background-color: ${({ theme: { mode } }) => mode.input};
  &::placeholder {
    color: ${({ theme: { mode } }) => mode.placeholder};
  }
`

export const FileInput = styled(Input)`
  display: none;
`

export const FileLabel = styled.label`
  background-color: ${({ theme: { mode } }) => mode.main02};
  color: ${({ theme: { mode } }) => mode.buttonText};
  padding: 8px;
  border-radius: 10px;
`

export const FileName = styled.label`
  padding-left: 8px;
`

export const ErrorMessage = styled.div`
  color: ${({ theme: { mode } }) => mode.main01};
  margin-left: 20px;
`

export const ResigterButton = styled.button`
  width: 100%;
  background-color: ${({ theme: { mode } }) => mode.main01};
  border-radius: 10px;
  height: 50px;
  color: ${({ theme: { mode } }) => mode.buttonText};
`
export const ProfileWrapper = styled.div`
  display: flex;
  margin: 30px 0;
`

export const ProfileTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 20px;
`
