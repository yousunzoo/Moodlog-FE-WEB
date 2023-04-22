import { MouseEvent } from 'react'

export interface Diary {
  title: string
  body: string
  feeling_code: number
  img: string | null
  open: boolean
}
export interface PaletteJSON {
  [key: string]: string
}

export interface TopbarProps {
  step: string
  changeStep: (e: MouseEvent<HTMLDivElement>) => void
}

export interface MoodModalProps {
  handleClose?: () => void
  onClick: (e: MouseEvent<HTMLLIElement>) => void
}

export interface DiaryEditorProps {
  diary: Diary
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  handleChangeMood: (e: MouseEvent<HTMLLIElement>) => void
  handleChangeOpen: (e: MouseEvent<HTMLDivElement>) => void
}

export interface CanvasState {
  canvas: HTMLCanvasElement | null
  color: string
  lineWidth: number
  mode: string
}

export interface CanvasProps {
  img: string | null
  saveImage: (imageData: string | null) => void
}
