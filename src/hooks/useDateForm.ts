export const useDateForm = (dateform: string) => {
  const newDate = new Date(dateform)
  const year = newDate.getFullYear()
  const month = newDate.getMonth() + 1
  const date = newDate.getDate()
  let day
  switch (newDate.getDay()) {
    case 0:
      day = '일요일'
    case 1:
      day = '월요일'
    case 2:
      day = '화요일'
    case 3:
      day = '수요일'
    case 4:
      day = '목요일'
    case 5:
      day = '금요일'
    case 6:
      day = '토요일'
  }

  return { date: `${year}년 ${month}월 ${date}일`, day }
}
