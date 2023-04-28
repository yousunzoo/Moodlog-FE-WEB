export const useDateForm = (dateform: string) => {
  const newDate = new Date(dateform)
  const year = newDate.getFullYear()
  const month = newDate.getMonth() + 1
  const date = newDate.getDate()
  let week = newDate.getDay()
  const WEEKDAY = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
  let day = WEEKDAY[week]

  return { date: `${year}년 ${month}월 ${date}일`, day }
}
