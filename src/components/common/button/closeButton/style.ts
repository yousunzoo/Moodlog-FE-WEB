import styled from 'styled-components'

export const Button = styled.div`
  position: absolute;
  top: 25px;
  left: 25px;
  width: 16px;
  height: 16px;
  background-image: ${({ theme }) => theme.close};
  background-size: cover;
`
