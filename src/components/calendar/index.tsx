import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import './calendar.css'
import moment from 'moment'
import { useQuery } from 'react-query'
import { getUser } from '../../apis/auth'
import { Link, useParams } from 'react-router-dom'
import { DiaryResponse } from '../../types/diary'
import { NewUser } from '../../types/user'
import Loading from '../common/loading'

function Calendars() {
  const [value, onChange] = useState<Date>(new Date())
  const [mark, setMark] = useState<string[]>([])
  // const [post, setPost] = useState<NewPost[]>([])
  const [postId, setPostId] = useState<number[]>([])
  const [feeling, setFeeling] = useState<number[]>([])

  const params = useParams()

  const { data, isLoading, error } = useQuery<NewUser>(
    ['user', { page: params.id }],
    () =>
      getUser(Number(params.id)).then((a) => {
        return a
      }),
    { staleTime: 10000, cacheTime: 1000 * 40 },
  )
  useEffect(() => {
    if (typeof data === 'object' && typeof data.post === 'object') {
      for (const item of data.post) {
        let date = item.createdAt.split('T')
        setMark((mark) => [...mark, date[0]])
        setPostId((postId) => [...postId, Number(item.id)])
        setFeeling((feeling) => [...feeling, item.feeling_code])
      }
    }
  }, [data])

  if (!data) return <></>

  return (
    <div>
      <Calendar
        onChange={() => onChange}
        formatDay={(locale, date) => moment(date).format('DD')}
        value={value}
        className="mx-auto w-full text-sm border-b"
        tileContent={({ date, view }) => {
          if (mark.find((x) => x === moment(date).format('YYYY-MM-DD'))) {
            let index = mark.findIndex((x) => x === moment(date).format('YYYY-MM-DD'))
            return (
              <>
                <Link to={`/diary/${postId[index]}`}>
                  <div className="flex justify-center items-center absoluteDiv">
                    <div className="dot">
                      <img src={'/public/assets/icons/mood-0' + `${feeling[index]}` + '.png'} width="auto" />
                    </div>
                  </div>
                </Link>
              </>
            )
          } else {
            return (
              <>
                <div className="flex justify-center items-center absoluteDiv">
                  <div className="dot"></div>
                </div>
              </>
            )
          }
        }}
      />
    </div>
  )
}

export default Calendars
