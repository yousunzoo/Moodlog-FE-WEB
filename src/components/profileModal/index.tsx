import { useQuery } from 'react-query'
import * as S from './style'
import { getMyProfile } from '../../apis/auth'
import { ChangeEvent, useEffect, useState } from 'react'
import { ProfileTypes } from '../../types/setting'
import { useEditProfile } from '../../hooks/useEditProfile'

function ProfileModal({ handleClose }: any) {
  const { data } = useQuery('profile', () => getMyProfile(), {
    refetchOnWindowFocus: false,
  })
  const [profile, setProfile] = useState<ProfileTypes>({
    username: '',
    profile_image: '',
    profile_message: '',
  })
  const [imgUrl, setImgUrl] = useState<string>('')
  const editProfile = useEditProfile()
  const setImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return
    const {
      target: { files },
    } = e
    if (!files) return
    const file = files[0]
    setProfile((prev) => ({ ...prev, profile_image: file }))
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setImgUrl(reader.result as string)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setProfile((prev) => ({ ...prev, [id]: value }))
  }

  const handleDeleteImg = () => {
    setProfile((prev) => ({ ...prev, profile_image: '' }))
    setImgUrl('')
  }
  const handleSubmit = () => {
    const { profile_image, username, profile_message } = profile
    const data = new FormData()
    data.append('username', username)
    data.append('img', profile_image)
    data.append('profile_message', profile_message)

    // @ts-ignore
    editProfile(data)
    handleClose()
  }
  useEffect(() => {
    if (!data) return
    setProfile({
      username: data.username,
      profile_image: data.profile_image,
      profile_message: data.profile_message,
    })
    setImgUrl(data.profile_image)
  }, [data])
  if (!data) return
  return (
    <S.ProfileWrapper>
      <S.ProfileHeader>
        <S.Img src={imgUrl || '/assets/icons/profile.png'} alt="profile" />
        <S.ChangeTools>
          <S.Buttons>
            <S.SelectPhotoLabel htmlFor="select-photo">사진 선택</S.SelectPhotoLabel>
            <S.SelectPhoto id="select-photo" type="file" accept="image/*" placeholder="사진 선택" onChange={setImage} />
            <S.DeleteButton onClick={handleDeleteImg}>삭제</S.DeleteButton>
          </S.Buttons>
        </S.ChangeTools>
      </S.ProfileHeader>
      <S.ProfileName>
        <S.UsernameLabel htmlFor="username">이름</S.UsernameLabel>
        <S.UsernameInput
          id="username"
          value={profile.username}
          onChange={handleChange}
          placeholder="이름을 입력해주세요"
        />
      </S.ProfileName>
      <S.ProfileMessage>
        <S.MessageLabel htmlFor="message">프로필 메시지</S.MessageLabel>
        <S.MessageInput
          id="profile_message"
          value={profile.profile_message}
          onChange={handleChange}
          placeholder="프로필 메시지를 입력해주세요"
        />
      </S.ProfileMessage>
      <S.SubmitButton onClick={handleSubmit}>저장</S.SubmitButton>
    </S.ProfileWrapper>
  )
}

export default ProfileModal
