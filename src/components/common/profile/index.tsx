import React from 'react'
import * as S from './style'

function Profile({ img = '../../../public/assets/icons/profile.png' }) {
  console.log(img)
  return <S.ProfileImg src={img} />
}

export default Profile
