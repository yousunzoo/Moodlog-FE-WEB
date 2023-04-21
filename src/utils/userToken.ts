const _token = {
  token: '',
  timeout: 0,
}

export const getToken = () => {
  return _token.token
  if (new Date().getTime() > _token.timeout) {
    return _token.token
  }
  return new Error('기간이 만료 된 토큰입니다 다시 로그인해주세요')
}

export const setToken = (token: string) => {
  _token.token = token
  _token.timeout = new Date().getTime() + 600 * 1000
}

export const removeToken = () => {
  _token.token = ''
  _token.timeout = 0
}
