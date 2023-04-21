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
import CalendarPage from '../components/calendar'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/diaryCreate" element={<DiaryCreatePage />} />
          <Route path="/diaryDetail" element={<DiaryDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
