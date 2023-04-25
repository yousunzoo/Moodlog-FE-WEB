import { UserFollow } from './user'

export interface FollowParent {
  id: number
  following: UserFollow
}

export interface FollowChild {
  follower: {
    id: number
    following: UserFollow
  }
  following: number[]
}

export interface FollowingParent {
  id: number
  follower: UserFollow
}
