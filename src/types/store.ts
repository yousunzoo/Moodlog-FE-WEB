import { StateCreator } from 'zustand'
import { PersistOptions } from 'zustand/middleware'

export type IFont = 'Pretendard' | 'IM_Hyemin-Bold' | 'Dovemayo_gothic' | 'omyu_pretty' | 'GowunBatang-Regular'
export type ITheme = 'light' | 'dark'
export interface IUseStore {
  theme: ITheme
  font: IFont
  toggleTheme: () => void
  setFont: (font: IFont) => void
}
export type IUsePersistStore = (
  config: StateCreator<IUseStore>,
  options: PersistOptions<IUseStore>,
) => StateCreator<IUseStore>
