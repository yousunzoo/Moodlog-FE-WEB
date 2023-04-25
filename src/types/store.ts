import { StateCreator } from 'zustand'
import { PersistOptions } from 'zustand/middleware'

export type IFont = 'Pretendard' | '아임혜민' | '둘비마요고딕' | '오뮤프리티' | '고운바탕'
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
