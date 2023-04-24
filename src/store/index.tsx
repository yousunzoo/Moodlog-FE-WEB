import { create } from 'zustand'
import { IFont, IUseStore } from '../types/store'

export const useStore = create<IUseStore>((set) => ({
  theme: 'light',
  setTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),

  font: 'pretendard',
  setFont: (font: IFont) => set({ font }),
}))

export default useStore
