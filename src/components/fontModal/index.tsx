import { FontModalProps } from '../../types/setting'
import * as S from './style'

const fonts = [
  { data: 'Pretendard', name: '프리텐다드' },
  { data: 'hyemin', name: '아임혜민' },
  { data: 'dulbi', name: '둘비마요고딕' },
  { data: 'ohmyu', name: '오뮤프리티' },
  { data: 'goun', name: '고운바탕' },
]
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
        {fonts.map(({ data, name }) => (
          <S.FontItem key={data} data-font={data}>
            {name}
          </S.FontItem>
        ))}
      </S.FontList>
    </>
  )
}

export default FontModal
