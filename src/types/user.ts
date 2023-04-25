import { DiaryResponse, UserResponse } from './diary'

export interface UserProfile {
  id: number
  email: string
  username: string
  profile_image: string
  profile_message: string
  post: UserPosts[]
  likes: UserLikes[]
  following: {
    id: number
    follower: UserFollow
  }[]
  follower: {
    id: number
    following: UserFollow
  }
}

export interface UserPosts {
  id: string
  title: string
  body: string
  feeling_code: number
  img: string
  open: boolean
  user: UserResponse
  createdAt: string
  updatedAt: string
}

export interface UserLikes {
  id: number
  post: { id: number }
  user: { id: number }
  createdAt: string
  updatedAt: string
}

export interface UserFollow {
  id: number
  username: string
  profile_image: string
  profile_message: string
}
