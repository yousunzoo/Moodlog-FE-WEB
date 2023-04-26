import * as S from './style'
import { useForm } from 'react-hook-form'
import { useWithdrawel } from '../../hooks/useWithdrawel'
function WithdrawelModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { mutate } = useWithdrawel()
  return (
    <>
      <S.Title>회원 탈퇴</S.Title>
      <S.GuideText>
        회원 탈퇴를 하시면 모든 정보가 삭제되며, 복구할 수 없습니다. 탈퇴를 계속해서 진행하시려면 아래에{' '}
        <span>회원 탈퇴</span>를 입력해주세요.
      </S.GuideText>
      <S.WithdrawelForm
        onSubmit={handleSubmit((data) => {
          mutate()
        })}
      >
        <S.WithdrawelInput
          type="text"
          placeholder="회원 탈퇴를 입력해주세요"
          {...register('withdrawel', {
            required: true,
            pattern: {
              value: /회원 탈퇴/,
              message: '문구를 올바르게 입력해주세요.',
            },
          })}
        />
        <S.ErrorText>{errors.withdrawel?.message as string}</S.ErrorText>
        <S.WithdrawelButton type="submit">탈퇴하기</S.WithdrawelButton>
      </S.WithdrawelForm>
    </>
  )
}

export default WithdrawelModal
