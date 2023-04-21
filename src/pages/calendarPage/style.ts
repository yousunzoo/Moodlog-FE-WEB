import styled from 'styled-components'

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  img {
    width: 20px;
    height: 20px;
  }
  div {
    width: calc(100% - 20px);
    margin: 0 auto;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    align-items: center;
    text-align: center;
    transform: translateX(-10px);
  }
`
