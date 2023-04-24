import React from 'react'
import { useIsFetching, useIsMutating } from 'react-query'
import * as S from './style'
import { getToken } from '../../../utils/userTokenCookie'

function Loading() {
  // const isAuthenticated = verifyToken()
  // console.log(isAuthenticated)

  const isFetching = useIsFetching()
  const isMutating = useIsMutating()

  const display = isFetching || isMutating ? 'inherit' : 'none'
  return (
    <S.LoadingOverlay display={display}>
      <S.LoadingWrapper display={display}>
        <S.Loading />
      </S.LoadingWrapper>
    </S.LoadingOverlay>
  )
}

export default Loading
