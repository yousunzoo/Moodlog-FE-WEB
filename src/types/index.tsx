export interface NewUser {
  id: number
  email: string
  username: string
  profile_image?: string
  profile_message?: string
  post?: []
  following?: []
  follower?: []
}

export interface NewPost {
  body?: string
  id: number
  createdAt: string
  updateAt?: string
  feeling_code?: number
  img?: string
  open?: boolean
  title?: string
}

export interface UserStyle {
  name: string
  number: number
}
