import React, { useState } from 'react'
import * as S from './style'
import Profile from '../common/profile'
import { axiosInstance } from '../../apis/axios'
import axios from 'axios'
import { FieldValues, useForm } from 'react-hook-form'
import { useRegisterUser } from '../../hooks/useRegisterUser'

function RegisterForm() {
  const [imgFile, setImgFile] = useState<undefined | string>(undefined)

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()

  const handleSubmitUserInfo = async (data: FieldValues) => {
    const { email, password, profile_image, username } = data

    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    formData.append('img', profile_image[0])
    formData.append('username', username)

    console.log({ formData })

    useRegisterUser()

    // const res = await axiosInstance.post('/auth/register', { data: userInput })
    // const res = await axios({
    //   url: `http://localhost:3000/auth/register`,
    //   method: 'post',
    //   headers: { 'Content-Type': 'multipart/form-data' },
    //   data: formData,
    // })
    // console.log(res)
  }

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value, files } = e.target
  //   files ? setUserInput({ ...userInput, [name]: files[0] }) : setUserInput({ ...userInput, [name]: value })
  // }

  return (
    <S.Form onSubmit={handleSubmit((data) => handleSubmitUserInfo(data))}>
      <S.InputArea>
        <label htmlFor="email" />
        <S.Input
          id="email"
          type="text"
          {...register('email', {
            required: '이메일은 필수 입력 항목입니다.',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '이메일 형식이 올바르지 않습니다.',
            },
          })}
          placeholder="사용하실 이메일을 입력해주세요"
        />
        <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
      </S.InputArea>
      <S.InputArea>
        <label htmlFor="username" />
        <S.Input
          id="username"
          type="text"
          {...register('username', {
            required: '사용자명은 필수 입력 항목입니다.',
          })}
          placeholder="사용하실 이름을 입력해주세요"
        />
        <S.ErrorMessage>{errors.username?.message}</S.ErrorMessage>
      </S.InputArea>
      <S.InputArea>
        <label htmlFor="password" />
        <S.Input
          id="password"
          type="password"
          {...register('password', {
            required: '비밀번호는 필수 입력 항목입니다.',
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상이여야 합니다,',
            },
          })}
          placeholder="사용하실 비밀번호를을 입력해주세요"
        />
        <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
      </S.InputArea>
      <S.InputArea>
        <label htmlFor="passwordConfirm" />
        <S.Input
          id="passwordConfirm"
          type="password"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          {...register('passwordConfirm', {
            required: '비밀번호 확인은 필수 입력 항목입니다.',
            validate: {
              check: (value) => {
                if (getValues('password') !== value) {
                  return '비밀번호가 일치하지 않습니다.'
                }
              },
            },
          })}
        />
        <S.ErrorMessage>{errors.passwordConfirm?.message}</S.ErrorMessage>
      </S.InputArea>
      <S.ProfileContainer>
        <Profile img={imgFile} />
        <S.ProfileTextContainer>
          <label htmlFor="file" />
          <S.Input
            id="file"
            type="file"
            {...register('profile_image', {
              onChange: (e) => {
                const {
                  target: { files },
                } = e
                const file = files[0]
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = () => {
                  setImgFile(reader.result as string)
                }
              },
            })}
            accept="image/*"
          />
        </S.ProfileTextContainer>
      </S.ProfileContainer>
      <S.ResigterButton type="submit">회원가입</S.ResigterButton>
    </S.Form>
  )
}

export default RegisterForm
