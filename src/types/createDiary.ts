import { MouseEvent } from 'react'

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
