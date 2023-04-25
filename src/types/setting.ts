import { AxiosError } from 'axios'
import { UseMutateFunction } from 'react-query'

export interface FontModalProps {
  handleClose?: () => void
  handleChangeFont: (e: React.MouseEvent<HTMLElement>) => void
}

export interface ProfileTypes {
  username: string
  profile_image: string | File
  profile_message: string
}
