import { MouseEvent } from 'react'

export interface PaletteJSON {
  [key: string]: string
}

export interface TopbarProps {
  step: string
  changeStep: (e: MouseEvent<HTMLDivElement>) => void
}
