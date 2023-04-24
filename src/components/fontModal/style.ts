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
  color: ${({ theme }) => theme.modalText};
  &[data-font='Pretendard'] {
    font-family: 'Pretendard';
  }
  &[data-font='아임혜민'] {
    font-family: '아임혜민';
  }
  &[data-font='둘비마요고딕'] {
    font-family: '둘비마요고딕';
  }
  &[data-font='오뮤프리티'] {
    font-family: '오뮤프리티';
  }
  &[data-font='고운바탕'] {
    font-family: '고운바탕';
  }
`
