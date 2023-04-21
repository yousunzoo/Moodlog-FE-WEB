import styled from 'styled-components'

export const TopBar = styled.div`
  display: flex;
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};
`
