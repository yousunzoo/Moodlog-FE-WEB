import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from '../pages/homePage'
import LoginPage from '../pages/loginPage'
import ProfilePage from '../pages/profilePage'
import RegisterPage from '../pages/registerPage'
import SettingPage from '../pages/settingPage'
import DiaryPage from '../pages/diaryPage'
import DiaryDetailPage from '../pages/diaryDetailPage'
import DiaryCreatePage from '../pages/diaryCreatePage'
import Layout from '../components/common/layout'
import ProtectedRouter from './ProtectedRouter'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 
          페이지 구현이 어느정도 마무리 되면 로그인 했을때만 접근 가능한 페이지를 ProtectedRouter로 감쌀 예정
          <Route element={<ProtectedRouter />}></Route>
           */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/diaryCreate" element={<DiaryCreatePage />} />
          <Route path="/diary/:id" element={<DiaryDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
