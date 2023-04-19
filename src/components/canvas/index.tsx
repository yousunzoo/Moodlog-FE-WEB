import React, { MouseEvent, useState } from 'react'
import * as S from './style'
function Canvas() {
  const [size, setSize] = useState(50)
  const [mode, setMode] = useState('brush')

  const handleMode = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return
    }
    const mode = e.target.dataset.mode || ''
    setMode(mode)
  }
  return (
    <S.Wrapper>
      <S.PaletteWrapper>
        <S.Palette>
          <S.ColorPicker>
            <S.ColorItem color="01" />
            <S.ColorItem color="02" />
            <S.ColorItem color="03" />
            <S.ColorItem color="04" />
            <S.ColorItem color="05" />
            <S.ColorItem color="06" />
            <S.ColorItem color="07" />
            <S.ColorItem color="08" />
          </S.ColorPicker>
          <S.SizePicker>
            <span>Size</span>
            <S.Slider
              type="range"
              min={0}
              max={100}
              value={size}
              onChange={(e) => {
                setSize(Number(e.target.value))
              }}
            />
            <span>{size}</span>
          </S.SizePicker>
        </S.Palette>
        <S.SelectArea>
          <S.Tools onClick={handleMode}>
            <S.ToolItem data-mode="brush">브러쉬</S.ToolItem>
            <S.ToolItem data-mode="eraser">지우개</S.ToolItem>
          </S.Tools>
          <S.Actions>
            <S.ActionItem data-action="prev">
              이전으로
              <img src="/assets/icons/prev.png" />
            </S.ActionItem>
            <S.ActionItem data-action="next">
              다음으로
              <img src="/assets/icons/next.png" />
            </S.ActionItem>
            <S.ActionItem data-action="reset">
              리셋
              <img src="/assets/icons/reset.png" />
            </S.ActionItem>
          </S.Actions>
        </S.SelectArea>
      </S.PaletteWrapper>
    </S.Wrapper>
  )
}

export default Canvas
