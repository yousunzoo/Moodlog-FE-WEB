import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/homePage'
import LoginPage from '../pages/loginPage'
import ProfilePage from '../pages/profilePage'
import RegisterPage from '../pages/registerPage'
import SettingPage from '../pages/settingPage'
import DiaryPage from '../pages/diaryPage'
import DiaryDetailPage from '../pages/diaryDetailPage'
import DiaryCreatePage from '../pages/diaryCreatePage'
import { BrowserRouter } from 'react-router-dom'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/diaryCreate" element={<DiaryCreatePage />} />
        <Route path="/diaryDetail" element={<DiaryDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
