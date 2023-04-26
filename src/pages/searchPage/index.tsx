import React, { ChangeEvent, FormEvent, useState } from 'react'
import * as S from './style'
import TopBar from './../../components/topBar/index'
import PrevButton from '../../components/common/button/prevButton'
import { useNavigate } from 'react-router'
import Nav from '../../components/common/Nav'
import { useMutation } from 'react-query'
import { searchUser } from '../../apis/auth'
import SearchedUser from '../../components/searchedUser'

function SearchPage() {
  const navigate = useNavigate()
  const [searchQeury, setSearchQuery] = useState('')
  const { mutate, data: results, isError } = useMutation(() => searchUser(searchQeury))

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    mutate()
  }

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
        <div className="search-form">
          <input type="text" onChange={(e) => onChange(e)} value={searchQeury} placeholder="유저이름으로 검색" />
        </div>
        {searchQeury === '' ? (
          <div className="message">검색어를 입력해주세요</div>
        ) : isError ? (
          <div className="message">검색 결과가 없습니다</div>
        ) : (
          <div className="search-results">
            {results && results.map((result) => <SearchedUser key={result.id} user={result} />)}
          </div>
        )}
      </S.ContentWrapper>
      <Nav />
    </>
  )
}

export default SearchPage
