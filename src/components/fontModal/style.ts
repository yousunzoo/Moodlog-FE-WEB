import styled from 'styled-components'

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  padding: 20px 0;
`
export const FontList = styled.ul`
  width: 100%;
`

export const FontItem = styled.li`
  font-size: 22px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  padding: 20px 0;
  margin: 10px;
  color: ${({ theme: { mode } }) => mode.modalText};
  &[data-font='Pretendard'] {
    font-family: 'Pretendard';
  }
  &[data-font='hyemin'] {
    font-family: 'hyemin';
  }
  &[data-font='dulbi'] {
    font-family: 'dulbi';
  }
  &[data-font='ohmyu'] {
    font-family: 'ohmyu';
  }
  &[data-font='goun'] {
    font-family: 'goun';
  }
`
