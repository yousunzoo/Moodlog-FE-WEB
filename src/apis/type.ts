export interface LoginProp {
  email: string
  password: string
}

export interface RegisterProp extends LoginProp {
  username: string
  password: string
  profile_image?: string
}

export interface ProfileProp {
  username: string
  profile_image: string
  profile_message: string
}

export interface CommentProp {
  postId: number
  body: string
}

export interface PostProp {
  title: string
  body: string
  img: string
  feeling_code: 1 | 2 | 3 | 4 | 5 | 6
  open: boolean
}
