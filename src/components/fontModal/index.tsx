import { FontModalProps } from '../../types/setting'
import * as S from './style'

function FontModal({ handleClose, handleChangeFont }: FontModalProps) {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    handleChangeFont(e)
    // @ts-ignore
    handleClose()
  }
  return (
    <>
      <S.Title>폰트 선택</S.Title>
      <S.FontList onClick={handleClick}>
        <S.FontItem data-font="Pretendard">프리텐다드</S.FontItem>
        <S.FontItem data-font="아임혜민">아임혜민</S.FontItem>
        <S.FontItem data-font="둘비마요고딕">둘비마요고딕</S.FontItem>
        <S.FontItem data-font="오뮤프리티">오뮤프리티</S.FontItem>
        <S.FontItem data-font="고운바탕">고운바탕</S.FontItem>
      </S.FontList>
    </>
  )
}

export default FontModal
