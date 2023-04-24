import useStore from '../../store'
import { FontModalProps } from '../../types/setting'
import * as S from './style'

function FontModal({ handleClose, handleChangeFont }: FontModalProps) {
  const { font } = useStore()
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    handleChangeFont(e)
    handleClose()
  }
  return (
    <>
      <S.Title>폰트 선택</S.Title>
      <S.FontList onClick={handleClick}>
        <S.FontItem data-font="Pretendard">프리텐다드</S.FontItem>
        <S.FontItem data-font="IM_Hyemin-Bold">아임혜민</S.FontItem>
        <S.FontItem data-font="Dovemayo_gothic">둘비마요고딕</S.FontItem>
        <S.FontItem data-font="omyu_pretty">오뮤프리티</S.FontItem>
        <S.FontItem data-font="GowunBatang-Regular">고운바탕</S.FontItem>
      </S.FontList>
    </>
  )
}

export default FontModal
