import React, { ChangeEvent, MouseEvent, useCallback, useEffect, useRef, useState } from 'react'
import * as S from './style'
import palette from '../../constants/palette.json'
import { PaletteJSON } from '../../types/createDiary'
import { CanvasState } from '../../types/createDiary'

function Canvas() {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    canvas: null,
    color: '08',
    lineWidth: 25,
    mode: 'brush',
  })
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | undefined>(undefined)

  const [undoStack, setUndoStack] = useState<ImageData[]>([])

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nowColor = canvasState.color
  const nowMode = canvasState.mode

  const handleUndo = () => {
    if (undoStack.length === 1) {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      setUndoStack([])
      return
    }
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const imageData = undoStack[undoStack.length - 2]
    const img = new ImageData(new Uint8ClampedArray(imageData.data), imageData.width, imageData.height)
    ctx.putImageData(img, 0, 0)
    setUndoStack((prevState) => prevState.slice(0, -1))
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (!canvasState.canvas) return
    if (!ctx) return
    const { offsetX, offsetY } = event
    const mode = canvasState.mode
    ctx.beginPath()
    if (mode === 'brush') {
      ctx.strokeStyle = (palette as PaletteJSON)[nowColor]
      ctx.lineWidth = canvasState.lineWidth
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.lineTo(offsetX, offsetY)
      ctx.stroke()
    } else {
      ctx.arc(offsetX, offsetY, canvasState.lineWidth / 2, 0, 2 * Math.PI)
      ctx.globalCompositeOperation = 'destination-out'
      ctx.fill()
      ctx.globalCompositeOperation = 'source-over'
    }
  }

  const handleMouseUp = () => {
    if (!canvasRef.current) return
    if (!ctx) return
    const imageData = ctx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height)
    setUndoStack((prevState) => {
      const newState = [...prevState, imageData]
      return newState
    })
    setCanvasState((prevState) => ({ ...prevState, canvas: canvasRef.current }))
    ctx.beginPath()
    canvasRef.current.removeEventListener('mousemove', handleMouseMove)
    canvasRef.current.removeEventListener('mouseup', handleMouseUp)
  }

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return
    setCanvasState((prevState) => ({ ...prevState }))
    canvasRef.current.addEventListener('mousemove', handleMouseMove)
    canvasRef.current.addEventListener('mouseup', handleMouseUp)
  }

  const handleMode = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return
    }
    const mode = e.target.dataset.mode as string
    setCanvasState({ ...canvasState, mode })
  }

  const handleColorChange = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLButtonElement)) return
    const color = event.target.dataset['color'] as string
    setCanvasState({ ...canvasState, color })
  }

  const handleLineWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const lineWidth = parseInt(event.target.value)
    setCanvasState((prevState) => ({ ...prevState, lineWidth }))
  }

  const setImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!ctx) return
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) {
      alert('이미지 파일만 업로드 가능합니다.')
      return
    }
    const image = new Image()
    image.src = URL.createObjectURL(file)
    image.onload = () => {
      ctx.drawImage(image, 0, 0, 400, 400)
    }
  }

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      setCtx(canvas.getContext('2d') as CanvasRenderingContext2D)
      canvas.width = 400
      canvas.height = 400
      setCanvasState((prevState) => ({ ...prevState, canvas }))
    }
  }, [])

  return (
    <S.Wrapper>
      <S.PaletteWrapper>
        <S.Palette>
          <S.ColorPicker onClick={handleColorChange}>
            {nowMode === 'eraser' && (
              <S.DisableColorPicker>
                <span>지우기 모드</span>
              </S.DisableColorPicker>
            )}
            <S.ColorItem className={nowColor === '01' ? 'active' : ''} data-color="01" color="01" />
            <S.ColorItem className={nowColor === '02' ? 'active' : ''} data-color="02" color="02" />
            <S.ColorItem className={nowColor === '03' ? 'active' : ''} data-color="03" color="03" />
            <S.ColorItem className={nowColor === '04' ? 'active' : ''} data-color="04" color="04" />
            <S.ColorItem className={nowColor === '05' ? 'active' : ''} data-color="05" color="05" />
            <S.ColorItem className={nowColor === '06' ? 'active' : ''} data-color="06" color="06" />
            <S.ColorItem className={nowColor === '07' ? 'active' : ''} data-color="07" color="07" />
            <S.ColorItem className={nowColor === '08' ? 'active' : ''} data-color="08" color="08" />
          </S.ColorPicker>
          <S.SizePicker>
            <span>Size</span>
            <S.Slider type="range" min={1} max={50} value={canvasState.lineWidth} onChange={handleLineWidthChange} />
            <span>{canvasState.lineWidth}</span>
          </S.SizePicker>
        </S.Palette>
        <S.SelectArea>
          <S.Tools onClick={handleMode}>
            <S.ToolItem className={nowMode == 'brush' ? 'active' : ''} data-mode="brush">
              브러쉬
            </S.ToolItem>
            <S.ToolItem className={nowMode == 'eraser' ? 'active' : ''} data-mode="eraser">
              지우개
            </S.ToolItem>
          </S.Tools>
          <S.Actions>
            <S.ActionItem data-action="prev" onClick={handleUndo} disabled={undoStack.length === 0}>
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
        <S.Canvas ref={canvasRef} onMouseDown={handleMouseDown} />
      </S.CanvasArea>
      <S.SelectPhotoArea>
        <S.SelectPhotoLabel htmlFor="select-photo">사진 선택</S.SelectPhotoLabel>
        <S.SelectPhoto id="select-photo" type="file" placeholder="사진 선택" onChange={setImage} />
      </S.SelectPhotoArea>
    </S.Wrapper>
  )
}

export default React.memo(Canvas)
