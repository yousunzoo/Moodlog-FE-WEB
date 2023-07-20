import styled from 'styled-components'

export const AlertOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
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
export const AlertWrapper = styled.div`
  width: 300px;
  height: 160px;
  padding: 30px 25px;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5);
  transition: transform 0.3s;
  background-color: white;
  text-align: center;

  &.open {
    transform: translate(-50%, -50%) scale(1);
  }
`

export const AlertContent = styled.p`
  line-height: 1.4;
`

export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  background-color: ${({ theme: { mode } }) => mode.main01};
  color: ${({ theme: { mode } }) => mode.buttonText};
`
