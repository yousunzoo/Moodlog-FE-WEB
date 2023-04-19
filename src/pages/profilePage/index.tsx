import React from 'react'
import * as S from './style'
import Diary from '../../components/diary'

type User = {
  name: string
}

function UserDetails({ name }: User) {
  return (
    <S.UserDetailContnet>
      <S.UserDetailContnetText size="large">30명</S.UserDetailContnetText>
      <S.UserDetailContnetText size="small">{name}</S.UserDetailContnetText>
    </S.UserDetailContnet>
  )
}

function ProfilePage() {
  return (
    <div>
      {/* 유저 프로필 */}
      <S.UserProfile>
        <S.UserSettingBtn>
          <img src="/public/assets/icons/setting.png" width="100%" />
          설정
        </S.UserSettingBtn>
        <S.UserImage />
        <S.UserName>유저이름</S.UserName>
        <S.UserIntro>introduce.. blah blah blah.. 두 줄까지 작성 가능~</S.UserIntro>
        {/* 유저 세부사항 */}
        <S.UserDetail>
          <UserDetails name="팔로워" />
          <S.UserDetailIine left="108px" />
          <UserDetails name="좋아요" />
          <S.UserDetailIine left="230px" />
          <UserDetails name="일기 개수" />
        </S.UserDetail>
      </S.UserProfile>
      {/* 유저 다이어리 */}
      <S.UserDiary>
        <Diary />
      </S.UserDiary>
    </div>
  )
}

export default ProfilePage
