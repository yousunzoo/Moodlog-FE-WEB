import styled, { css } from 'styled-components'

// posts 컴포넌트
export const Posts = styled.div<{ height: string }>`
  position: absolute;
  width: 100%;
  height: auto;
  left: 0px;
  top: 217px;
  overflow-y: scroll;
`
export const NoPosts = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  left: 0px;
  top: 217px;
  text-align: center;
  color: ${({ theme }) => theme.placeholder};
`
