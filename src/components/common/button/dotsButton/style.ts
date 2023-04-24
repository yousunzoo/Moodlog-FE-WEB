import styled from 'styled-components'

export const Button = styled.div`
  width: 16px;
  height: 16px;
  background-image: url(${({ theme }) => theme.dots});
  background-size: cover;
`
