export interface DiaryResponse {
  id: string
  title: string
  body: string
  feeling_code: number
  img: string
  open: boolean
  user?: UserResponse
  likes?: LikesResponse[]
  comments?: CommentsResponse[]
  createdAt: string
  updatedAt: string
}

export interface LikesResponse {
  id: number
  createdAt: string
  updatedAt: string
  post?: NewPost
}

export interface UserResponse {
  id: number
  email: string
  username: string
  profile_image: string
  profile_message: string
  createdAt?: string
}

export interface CommentsResponse {
  id: number
  comment: string
  user: UserResponse
  createdAt: string
}

export interface NewPost {
  body: string
  id: string
  createdAt: string
  updatedAt: string
  feeling_code: number
  img: string
  open: boolean
  title: string
}
