import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { mode } }) => mode.modalOverlay};
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0s linear 0.3s;
  &.open {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s, visibility 0s;
  }
`

export const ModalWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 400px;
  background-color: white;
  transform: translateY(400px);
  transition: transform 0.3s ease-out;
  border-radius: 20px 20px 0 0;
  padding: 20px;
  z-index: 2;
  * {
    color: ${({ theme: { mode } }) => mode.modalText};
  }
  &.open {
    transform: translateY(0);
    transition: transform 0.3s ease-in;
  }
`
