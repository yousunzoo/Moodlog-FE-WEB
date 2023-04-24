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
  font-family: 'gangwonEdu';
  &[data-font='Pretendard'] {
    font-family: 'Pretendard';
  }
  &[data-font='IM_Hyemin-Bold'] {
    font-family: 'IM_Hyemin-Bold';
  }
  &[data-font='Dovemayo_gothic'] {
    font-family: 'Dovemayo_gothic';
  }
  &[data-font='omyu_pretty'] {
    font-family: 'omyu_pretty';
  }
  &[data-font='GowunBatang-Regular'] {
    font-family: 'GowunBatang-Regular';
  }
`
