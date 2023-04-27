import styled from 'styled-components'

export const EditorTab = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  padding: 0 25px;
  border-bottom: 2px solid ${({ theme }) => theme.border};
  margin-bottom: 2px;
`
export const TabTitle = styled.label`
  margin-right: 20px;
  color: ${({ theme }) => theme.textColor};
`
export const TabInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  background: transparent;
  color: ${({ theme }) => theme.textColor};
  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`

export const TabSelect = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex: 1;
  cursor: pointer;
`

export const MoodImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 30px;
`
export const MoodSelect = styled.button`
  position: absolute;
  right: 0;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.textColor};
  svg {
    width: 100%;
    height: 100%;
  }
`
export const Img = styled.img`
  display: block;
  margin: 20px auto;
  width: 375px;
  height: 375px;
`
export const EditorContent = styled.textarea`
  display: block;
  width: 100%;
  height: calc(100vh - 620px);
  padding: 25px;
  border: none;
  outline: none;
  resize: none;
  background: transparent;
  line-height: 1.6;
  color: ${({ theme }) => theme.textColor};
  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`

export const Settings = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 50px;
  padding: 0 25px;
  align-items: center;
  background-color: ${({ theme }) => theme.card};
  border-top: 2px solid ${({ theme }) => theme.border};
`
export const SettingTitle = styled.p`
  margin-right: 20px;
`
export const SettingItem = styled.button`
  display: flex;
  width: 80px;
  height: 30px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.main02};
  color: ${({ theme }) => theme.main02};
  border-radius: 20px;
  cursor: pointer;
  &.active {
    font-weight: 600;
    color: ${({ theme }) => theme.buttonText};
    background-color: ${({ theme }) => theme.main02};
  }
`
