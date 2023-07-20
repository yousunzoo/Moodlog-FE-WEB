import styled from 'styled-components'

export const TopbarWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 25px;
  font-size: 20px;
  border-bottom: 2px solid ${({ theme: { mode } }) => mode.border};
`

export const ModalWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 400px;
  padding: 25px;
  background-color: ${({ theme: { mode } }) => mode.modalBackground};
  border-radius: 20px 20px 0 0;
`
