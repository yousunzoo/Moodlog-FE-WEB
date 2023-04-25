import React, { useState } from 'react'
import * as S from './style'
import TopBar from './../../components/topBar/index'
import PrevButton from '../../components/common/button/prevButton'
import { useNavigate } from 'react-router'
import Nav from '../../components/common/Nav'
import { useMutation } from 'react-query'
import { searchUser } from '../../apis/auth'

function SearchPage() {
  const navigate = useNavigate()
  const [searchQeury, setSearchQuery] = useState('')
  const { mutate, data: result } = useMutation(() => searchUser(searchQeury))
  return (
    <>
      <S.TopBar>
        <div className="left" onClick={() => navigate(-1)}>
          <PrevButton />
        </div>
        <h2>유저 검색</h2>
        <div className="right"></div>
      </S.TopBar>
      <S.ContentWrapper>
        <div className="search-input">
          <input type="text" />
          <button>검색</button>
        </div>
      </S.ContentWrapper>
      <Nav />
    </>
  )
}

export default SearchPage
