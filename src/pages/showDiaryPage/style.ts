import styled from 'styled-components'
import { TopbarWrapper } from '../../styles/common'

export const DiaryWrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
  border: 1px transparent;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const TopBar = styled(TopbarWrapper)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;

  .right,
  .left,
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
    cursor: default;
  }

  .right {
    .dropdown {
      position: absolute;
      flex-direction: column;
      top: 50px;
      right: 10px;
      width: 80px;
      text-align: center;
      background-color: ${({ theme }) => theme.white01};
      border: 1px solid ${({ theme }) => theme.grey01};
      border-radius: 5px;
      li {
        padding: 8px 10px;

        &::selection {
          background-color: transparent;
        }

        &.delete {
          color: ${({ theme }) => theme.palette01};
        }
        &:hover {
          background-color: ${({ theme }) => theme.white02};
        }
      }
    }
  }
`
