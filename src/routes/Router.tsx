import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from '../pages/homePage'
import LoginPage from '../pages/loginPage'
import ProfilePage from '../pages/profilePage'
import RegisterPage from '../pages/registerPage'
import SettingPage from '../pages/settingPage'
import DiaryPage from '../pages/diaryPage'
// import DiaryDetailPage from '../pages/diaryDetailPage'
import DiaryCreatePage from '../pages/diaryCreatePage'
import Layout from '../components/common/layout'
// import CalendarPage from '../pages/calendarPage'
import ProtectedRouter from './ProtectedRouter'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          {/* <Route path="/calendar/:id" element={<CalendarPage />} /> */}
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<ProtectedRouter />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/setting" element={<SettingPage />} />
            <Route path="/diary" element={<DiaryPage />} />
            <Route path="/diaryCreate" element={<DiaryCreatePage />} />
            {/* <Route path="/diary/:id" element={<DiaryDetailPage />} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
