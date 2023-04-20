export interface NewUser {
  email: string
  name: string
  password: string
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
