import { axiosInstance } from './axios'
import { CommentProp, PostProp } from './type'

export const getPosts = async () => {
  const res = await axiosInstance().get(`/posts`)
  return res.data
}

export const getPost = async (id: number) => {
  const res = await axiosInstance().get(`/posts/${id}`)
  return res.data
}

export const createPost = async (post: PostProp) => {
  const res = await axiosInstance({ multi: true }).post(`/posts`, post)
  return res.data
}

export const deletsPost = async (postId: number) => {
  const res = await axiosInstance().delete(`/posts/${postId}`)
  return res.data
}

export const following = async (userId: number) => {
  const res = await axiosInstance().post(`/follow/${userId}`)
  return res.data
}

export const createComment = async (comment: CommentProp) => {
  const res = await axiosInstance().post(`/comments`, comment)
  return res.data
}

export const deleteComment = async (postId: number) => {
  const res = await axiosInstance().delete(`/comments/${postId}`)
  return res.data
}

export const updateLike = async (postId: number) => {
  const res = await axiosInstance().post(`/likes/${postId}`)
  return res.data
}
