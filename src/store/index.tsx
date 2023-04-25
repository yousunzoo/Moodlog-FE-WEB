import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { IFont, IUsePersistStore, IUseStore } from '../types/store'

export const useStore = create<IUseStore>(
  // @ts-ignore
  (persist as IUsePersistStore)(
    (set, get) => ({
      theme: 'light',
      toggleTheme: () => set({ theme: get().theme === 'light' ? 'dark' : 'light' }),

      font: 'Pretendard',
      setFont: (font: IFont) => set({ font }),
      resetSetting: () => set({ theme: 'light', font: 'Pretendard' }),
    }),
    {
      name: 'setting',
    },
  ),
)

export default useStore
