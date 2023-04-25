import styled from 'styled-components'
import { TopbarWrapper } from '../../styles/common'

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
    color: ${({ theme }) => theme.textColor};
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  padding: 0 25px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`
