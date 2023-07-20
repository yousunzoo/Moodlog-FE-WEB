import React, { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import * as S from './style'
import palette from '../../constants/palette.json'
import { CanvasProps, PaletteJSON } from '../../types/createDiary'
import { CanvasState } from '../../types/createDiary'
import { isMobile } from 'react-device-detect'

const colorsArr = ['01', '02', '03', '04', '05', '06', '07', '08']

function Canvas({ img, saveImage }: CanvasProps) {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    canvas: null,
    color: '08',
    lineWidth: 25,
    mode: 'brush',
  })
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | undefined>(undefined)
  const [undoStack, setUndoStack] = useState<ImageData[]>([])
  const [redoStack, setRedoStack] = useState<ImageData[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nowColor = canvasState.color
  const nowMode = canvasState.mode

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    setCtx(() => canvas.getContext('2d') as CanvasRenderingContext2D)
    if (!ctx) return
    canvas.width = 400
    canvas.height = 400
    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    setCanvasState((prevState) => ({ ...prevState, canvas }))
    if (img) {
      const image = new Image()
      const src = img.includes('https') ? img + '?timestamp=' + new Date().getTime() : img
      image.crossOrigin = 'anonymous'
      image.src = src
      image.onload = () => {
        const context = canvas.getContext('2d') as CanvasRenderingContext2D
        context.drawImage(image, 0, 0, 400, 400)
      }
      return
    }
  }, [ctx])

  const handleActions = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return
    const action = e.target.dataset.action as string
    switch (action) {
      case 'undo':
        handleUndo()
        break
      case 'redo':
        handleRedo()
        break
      case 'reset':
        handleReset()
        break
    }
  }

  const handleReset = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (!ctx) return
    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    setUndoStack([])
    setRedoStack([])
    saveImage(null)
  }
  const handleUndo = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (!ctx) return
    if (undoStack.length === 0) return
    if (undoStack.length === 1) {
      setRedoStack((prevState) => [...prevState, undoStack[0]])
      ctx.fillStyle = '#FFFFFF'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      setUndoStack([])
      return
    }
    const imageData = undoStack[undoStack.length - 2]
    const img = new ImageData(new Uint8ClampedArray(imageData.data), imageData.width, imageData.height)
    ctx.putImageData(img, 0, 0)
    setUndoStack((prevState) => {
      const redo = prevState.pop()
      if (redo) {
        setRedoStack((prevState) => [...prevState, redo])
      }
      return [...prevState]
    })
  }
  const handleRedo = () => {
    if (redoStack.length === 0) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const imageData = redoStack[redoStack.length - 1]
    const img = new ImageData(new Uint8ClampedArray(imageData.data), imageData.width, imageData.height)
    ctx.putImageData(img, 0, 0)
    setUndoStack((prevState) => [...prevState, imageData])
    setRedoStack((prevState) => {
      prevState.pop()
      return [...prevState]
    })
  }

  const handleMouseMove: any = (event: TouchEvent | MouseEvent) => {
    if (!canvasState.canvas) return
    if (!ctx) return
    const rect = canvasRef.current?.getBoundingClientRect()
    const { clientX, clientY } = (isMobile ? (event as TouchEvent).changedTouches[0] : event) as {
      clientX: number
      clientY: number
    }
    const mode = canvasState.mode
    ctx.beginPath()
    if (mode === 'brush') {
      ctx.strokeStyle = (palette as PaletteJSON)[nowColor]
      ctx.lineWidth = canvasState.lineWidth
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.lineTo(clientX - rect!.left, clientY - rect!.top)
      ctx.stroke()
    } else {
      ctx.strokeStyle = '#FFFFFF'
      ctx.lineWidth = canvasState.lineWidth
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.lineTo(clientX - rect!.left, clientY - rect!.top)
      ctx.stroke()
    }
  }

  const handleMouseUp = () => {
    if (!canvasRef.current) return
    if (!ctx) return
    const imageData = ctx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height)
    const imageDataUrl = canvasRef.current.toDataURL('image/png')
    saveImage(imageDataUrl)
    setUndoStack((prevState) => {
      const newState = [...prevState, imageData]
      return newState
    })
    setCanvasState((prevState) => ({ ...prevState, canvas: canvasRef.current }))
    ctx.beginPath()
    if (isMobile) {
      canvasRef.current.removeEventListener('touchmove', handleMouseMove)
      canvasRef.current.removeEventListener('touchend', handleMouseUp)
    }
    if (!isMobile) {
      canvasRef.current.removeEventListener('mousemove', handleMouseMove)
      canvasRef.current.removeEventListener('mouseup', handleMouseUp)
    }
  }

  const handleMouseDown = () => {
    if (!canvasRef.current) return
    setCanvasState((prevState) => ({ ...prevState }))
    if (isMobile) {
      canvasRef.current.addEventListener('touchmove', handleMouseMove)
      canvasRef.current.addEventListener('touchend', handleMouseUp)
    }
    if (!isMobile) {
      canvasRef.current.addEventListener('mousemove', handleMouseMove)
      canvasRef.current.addEventListener('mouseup', handleMouseUp)
    }
  }

  const handleMode = (e: MouseEvent) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return
    }
    const mode = e.target.dataset.mode as string
    setCanvasState({ ...canvasState, mode })
  }

  const handleColorChange = (event: MouseEvent) => {
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
    if (!canvasRef.current) return
    const file = e.target.files?.[0]
    if (!file) return

    const image = new Image()
    image.src = URL.createObjectURL(file)
    image.onload = () => {
      ctx.drawImage(image, 0, 0, 400, 400)
      if (!canvasRef.current) return
      const imageData = ctx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height)
      setUndoStack((prevState) => [...prevState, imageData])
      saveImage(canvasRef.current.toDataURL('image/png'))
    }
  }

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
            {colorsArr.map((item) => (
              <S.ColorItem key={item} className={nowColor === item ? 'active' : ''} data-color={item} color={item} />
            ))}
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
          <S.Actions onClick={handleActions}>
            <S.ActionItem data-action="undo" disabled={undoStack.length === 0}>
              이전으로
            </S.ActionItem>
            <S.ActionItem data-action="redo">다음으로</S.ActionItem>
            <S.ActionItem data-action="reset">리셋</S.ActionItem>
          </S.Actions>
        </S.SelectArea>
      </S.PaletteWrapper>
      <S.CanvasArea>
        <S.Canvas ref={canvasRef} onTouchStart={handleMouseDown} onMouseDown={handleMouseDown} />
      </S.CanvasArea>
      <S.SelectPhotoArea>
        <S.SelectPhotoLabel htmlFor="select-photo">사진 선택</S.SelectPhotoLabel>
        <S.SelectPhoto id="select-photo" type="file" accept="image/*" placeholder="사진 선택" onChange={setImage} />
      </S.SelectPhotoArea>
    </S.Wrapper>
  )
}

export default Canvas
