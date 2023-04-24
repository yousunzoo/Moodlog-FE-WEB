import { DiaryResponse } from '../types/diary'
import dataURLtoFile from '../utils/dataURLtoFile'
import { axiosInstance } from './axios'
import { CommentProp, EditProp, PostProp } from './type'

export const getPosts = async () => {
  const res = await axiosInstance().get<DiaryResponse[]>(`/posts`)
  return res.data
}

export const getPost = async (id: number) => {
  const res = await axiosInstance().get<DiaryResponse>(`/posts/${id}`)
  console.log(res.data)
  return res.data
}

export const createPost = async (post: PostProp) => {
  const file = dataURLtoFile(post.img as string)
  const diary = { ...post, img: file }
  const res = await axiosInstance({ multi: true }).post(`/posts`, diary)
  return res.data
}
export const updatePost = async ({ post, postId }: EditProp) => {
  const file = dataURLtoFile(post.img as string)
  const diary = { ...post, img: file }
  const res = await axiosInstance({ multi: true }).put(`/posts/${postId}`, diary)
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
