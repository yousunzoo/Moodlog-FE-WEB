import styled from 'styled-components'
import { TopbarWrapper } from '../../styles/common'
import { Link } from 'react-router-dom'

export const TopBar = styled(TopbarWrapper)`
  .right,
  .left,
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 16px;
    cursor: pointer;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
    cursor: default;
    color: ${({ theme: { mode } }) => mode.textColor};
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  padding: 25px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .search-form {
    display: flex;

    input {
      margin-bottom: 1rem;
      padding: 0 20px;
      width: 100%;
      height: 40px;
      font-size: 16px;
      color: ${({ theme: { mode } }) => mode.textColor};
      background-color: ${({ theme: { mode } }) => mode.input};
      outline: none;
      border: none;
      border-radius: 10px;

      &::placeholder {
        color: ${({ theme: { mode } }) => mode.placeholder};
      }
    }
  }

  .message {
    color: ${({ theme: { mode } }) => mode.main01};
    text-align: center;
  }

  .search-results {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`
