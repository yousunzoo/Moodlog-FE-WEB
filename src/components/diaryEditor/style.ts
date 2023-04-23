import styled from 'styled-components'

export const EditorTab = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  padding: 0 25px;
  border-bottom: 2px solid ${({ theme }) => theme.white02};
  margin-bottom: 2px;
`
export const TabTitle = styled.label`
  margin-right: 20px;
`
export const TabInput = styled.input`
  border: none;
  outline: none;
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
  background-image: url('/assets/icons/down-arrow.png');
  width: 20px;
  height: 20px;
  background-size: cover;
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
`

export const Settings = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 50px;
  padding: 0 25px;
  align-items: center;
  background-color: ${({ theme }) => theme.white02};
  border-top: 2px solid ${({ theme }) => theme.grey02};
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
  background-color: ${({ theme }) => theme.white01};
  border: 2px solid ${({ theme }) => theme.brown01};
  color: ${({ theme }) => theme.brown01};
  border-radius: 20px;
  cursor: pointer;
  &.active {
    font-weight: 600;
    color: ${({ theme }) => theme.white01};
    background-color: ${({ theme }) => theme.brown01};
  }
`
