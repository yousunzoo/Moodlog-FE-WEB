import { StateCreator } from 'zustand'
import { PersistOptions } from 'zustand/middleware'

export type IFont = 'Pretendard' | 'hyemin' | 'dulbi' | 'ohmyu' | 'goun'
export type ITheme = 'light' | 'dark'
export interface IUseStore {
  theme: ITheme
  font: IFont
  toggleTheme: () => void
  setFont: (font: IFont) => void
  resetSetting: () => void
}
export type IUsePersistStore = (
  config: StateCreator<IUseStore>,
  options: PersistOptions<IUseStore>,
) => StateCreator<IUseStore>
