import { axiosInstance } from './axios'

export const getPost = async (id: number) => {
  const res = await axiosInstance.get(`/posts/${id}`)
  return res.data
}

export const updateLike = async (postId: number) => {
  const res = await axiosInstance.post(`/likes/${postId}`)
  return res.data
}

export const createComment = async (postId: number, body: string) => {
  const res = await axiosInstance.post(`/comments`, { postId, body })
  return res.data
}
