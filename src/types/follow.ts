import { NewUser } from './user'
import { UserFollow } from './user'

export interface FollowParent {
  id: number
  following: UserFollow
}

export interface FollowProp {
  follower: {
    id: number
    following: UserFollow
  }
  following: number[]
  own: number
}

export interface FollowListProp {
  following: number[]
  follower: FollowParent[]
  own: number | undefined
}

export interface FollowingParent {
  id: number
  follower: UserFollow
}
