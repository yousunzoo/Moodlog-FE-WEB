import styled from 'styled-components'

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  margin: 40px 0;
`

export const WithdrawelForm = styled.form`
  width: 100%;
  padding: 10px 25px;
`

export const GuideText = styled.p`
  word-break: keep-all;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 20px;
  span {
    color: ${({ theme: { mode } }) => mode.main01};
  }
`

export const WithdrawelInput = styled.input`
  width: 100%;
  height: 50px;
  background-color: ${({ theme: { mode } }) => mode.input};
  border: none;
  padding: 0 20px;
  border-radius: 10px;
  margin-bottom: 6px;
  &::placeholder {
    color: ${({ theme: { mode } }) => mode.placeholder};
  }
`
export const ErrorText = styled.p`
  color: ${({ theme: { mode } }) => mode.main01};
  margin-bottom: 20px;
  padding: 0 10px;
`
export const WithdrawelButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${({ theme: { mode } }) => mode.main01};
  color: ${({ theme: { mode } }) => mode.buttonText};
  border-radius: 10px;
  font-size: 18px;
`
