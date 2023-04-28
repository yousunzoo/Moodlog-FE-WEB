import * as S from './style'

function Profile({ img = 'assets/icons/profile.png' }) {
  return <S.ProfileImg src={img} />
}

export default Profile
