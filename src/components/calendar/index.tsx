import React, { useEffect, useState } from 'react'
import * as S from './style'
import Calendar from 'react-calendar'
import './calendar.css'
import moment from 'moment'
import { useQuery } from 'react-query'
import { axiosInstance } from '../../apis/axios'
import { NewUser } from '../../types'
import { NewPost } from '../../types'

function CalendarPage() {
  const [value, onChange] = useState(new Date())
  const [mark, setMark] = useState<string[]>([])
  const [post, setPost] = useState<NewPost[]>([])

  const { data, isLoading, error } = useQuery<NewUser>('user', () =>
    axiosInstance.get(`/auth/user/4`).then((a) => {
      setPost(() => a.data.post)
      return a.data
    }),
  )

  useEffect(() => {
    for (const item of post) {
      let date = item.createdAt.split('T')
      setMark((mark) => [...mark, date[0]])
    }
    console.log(mark)
  }, [post])

  // console.log(post, 'mark: ', mark)

  return (
    <div>
      <Calendar
        onChange={onChange}
        formatDay={(locale, date) => moment(date).format('DD')}
        value={value}
        className="mx-auto w-full text-sm border-b"
        tileContent={({ date, view }) => {
          if (mark.find((x) => x === moment(date).format('YYYY-MM-DD'))) {
            return (
              <>
                <div className="flex justify-center items-center absoluteDiv">
                  <div className="dot">
                    <img src="/public/assets/icons/mood-02.png" width="auto" />
                  </div>
                </div>
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
      />{' '}
    </div>
  )
}

export default CalendarPage
