import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  width: 100%;
  padding: 20px 10px;
`
export const ProfileHeader = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
`
export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`

export const ChangeTools = styled.div`
  flex: 1;
  padding: 10px 0;
`

export const UsernameLabel = styled.label`
  font-size: 18px;
  width: 100px;
  line-height: 30px;
  margin-right: 20px;
  color: ${({ theme: { mode } }) => mode.placeholder};
`
export const UsernameInput = styled.input`
  border: none;
  outline: none;
  width: 100px;
  height: 30px;
  padding: 0 10px;
  font-size: 18px;
  border-bottom: 2px solid ${({ theme: { mode } }) => mode.main02};
  margin-bottom: 20px;
`
export const Buttons = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`
export const SelectPhotoLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 90px;
  height: 30px;
  border-radius: 20px;
  margin-right: 16px;
  background-color: ${({ theme: { mode } }) => mode.main01};
  color: ${({ theme: { mode } }) => mode.buttonText};
`

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  background-color: ${({ theme: { mode } }) => mode.main02};
  color: ${({ theme: { mode } }) => mode.buttonText};
`
export const SelectPhoto = styled.input`
  display: none;
`
export const ProfileMessage = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0;
`
export const ProfileName = styled(ProfileMessage)``

export const MessageLabel = styled(UsernameLabel)``
export const MessageInput = styled.textarea`
  border: none;
  outline: none;
  resize: none;
  padding: 0 10px;
  background: transparent;
  display: block;
  flex: 1;
  line-height: 1.4;
  border-bottom: 2px solid ${({ theme: { mode } }) => mode.main02};
`

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 40px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: ${({ theme: { mode } }) => mode.main01};
  color: ${({ theme: { mode } }) => mode.buttonText};
  font-size: 18px;
`
