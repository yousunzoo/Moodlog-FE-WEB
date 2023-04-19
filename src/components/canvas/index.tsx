import React, { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import * as S from './style'
import palette from '../../constants/palette.json'
import { PaletteJSON } from '../../types/createDiary'

function Canvas() {
  const canvas = useRef<HTMLCanvasElement>(null)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | undefined>(undefined)
  const [lastPoint, setLastPoint] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [color, setColor] = useState('08')
  const [size, setSize] = useState(25)
  const [mode, setMode] = useState('brush')
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [isImage, setIsImage] = useState(false)

  const handleMode = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return
    }
    const mode = e.target.dataset.mode || ''
    setMode(mode)
  }

  const setImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!ctx) return
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) {
      return
    }
    console.log(file)
    const image = new Image()
    image.src = URL.createObjectURL(file)
    image.onload = () => {
      ctx.drawImage(image, 0, 0, 400, 400)
    }
  }

  const startDrawing = ({ nativeEvent }: MouseEvent) => {
    if (!ctx) return

    const { offsetX, offsetY } = nativeEvent
    setLastPoint({ x: offsetX, y: offsetY })
    setIsMouseDown(true)
  }

  const endDrawing = () => {
    if (!ctx) return

    ctx.beginPath()
    setIsMouseDown(false)
  }
  const handleMouseMove = ({ nativeEvent }: MouseEvent<HTMLCanvasElement>) => {
    if (!ctx) return

    const { offsetX, offsetY } = nativeEvent
    if (isMouseDown) {
      ctx.strokeStyle = (palette as PaletteJSON)[color]
      ctx.lineWidth = size
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.lineTo(offsetX, offsetY)
      ctx.stroke()
    } else {
      ctx.beginPath()
      ctx.moveTo(offsetX, offsetY)
    }
  }

  const handlePickColor = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return
    }
    const color = e.target.dataset.color || ''
    setColor(color)
  }

  useEffect(() => {
    // @ts-ignore
    if (canvas.current) {
      setCtx(canvas.current.getContext('2d') as CanvasRenderingContext2D)
      canvas.current.width = 400
      canvas.current.height = 400
    }
  }, [])
  return (
    <S.Wrapper>
      <S.PaletteWrapper>
        <S.Palette>
          <S.ColorPicker onClick={handlePickColor}>
            <S.ColorItem data-color="01" color="01" />
            <S.ColorItem data-color="02" color="02" />
            <S.ColorItem data-color="03" color="03" />
            <S.ColorItem data-color="04" color="04" />
            <S.ColorItem data-color="05" color="05" />
            <S.ColorItem data-color="06" color="06" />
            <S.ColorItem data-color="07" color="07" />
            <S.ColorItem data-color="08" color="08" />
          </S.ColorPicker>
          <S.SizePicker>
            <span>Size</span>
            <S.Slider
              type="range"
              min={1}
              max={50}
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
      <S.CanvasArea>
        <S.Canvas ref={canvas} onMouseDown={startDrawing} onMouseMove={handleMouseMove} onMouseUp={endDrawing} />
      </S.CanvasArea>
      <S.SelectPhotoArea>
        <S.SelectPhotoLabel htmlFor="select-photo">사진 선택</S.SelectPhotoLabel>
        <S.SelectPhoto id="select-photo" type="file" placeholder="사진 선택" onChange={setImage} />
      </S.SelectPhotoArea>
    </S.Wrapper>
  )
}

export default Canvas
