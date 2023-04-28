import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router'
import { useMutation } from 'react-query'
import { searchUser } from '../../apis/auth'
import debounce from 'lodash/debounce'
import SearchedUser from '../../components/searchedUser'
import PrevButton from '../../components/common/button/prevButton'
import Nav from '../../components/common/Nav'
import * as S from './style'
import { SearchedUserResponse } from '../../types/user'
import useUserData from '../../hooks/useUserData'

function SearchPage() {
  const navigate = useNavigate()
  const [searchQeury, setSearchQuery] = useState('')
  const { mutate, data: results, isError } = useMutation(() => searchUser(searchQeury))

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.trim())
  }

  const deboundedMutate = debounce(() => {
    mutate()
  }, 300)

  function sortResults() {
    if (!results) return

    const sortedResults = results?.sort((a, b) => {
      if (a.username < b.username) {
        return -1
      } else {
        return 1
      }
    })

    // const idx = sortedResults?.findIndex((result) => result.id === myData?.id)
    // if (idx !== -1) {
    //   const tmp = sortedResults?[idx]
    //   sortedResults.splice(Number(idx), 1)
    //   sortedResults.unshift(tmp)
    // }

    return sortedResults as SearchedUserResponse[]
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
          <input
            type="text"
            onChange={(e) => {
              onChange(e)
              deboundedMutate()
            }}
            value={searchQeury}
            placeholder="유저이름으로 검색"
          />
        </div>
        {searchQeury === '' ? (
          <div className="message">검색어를 입력해주세요</div>
        ) : results?.length === 0 ? (
          <div className="message">검색 결과가 없습니다</div>
        ) : (
          <div className="search-results">
            {results && sortResults()?.map((result) => <SearchedUser key={result.id} user={result} />)}
          </div>
        )}
      </S.ContentWrapper>
      <Nav />
    </>
  )
}

export default SearchPage
