import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from '../pages/homePage'
import LoginPage from '../pages/loginPage'
import ProfilePage from '../pages/profilePage'
import RegisterPage from '../pages/registerPage'
import SettingPage from '../pages/settingPage'
import DiaryPage from '../pages/diaryPage'
import DiaryCreatePage from '../pages/diaryCreatePage'
import Layout from '../components/common/layout'
import CalendarPage from '../pages/calendarPage'
import ProtectedRouter from './ProtectedRouter'
import FollowPage from '../pages/followPage'
import ShowDiary from '../pages/showDiaryPage'
// import CalendarPage from '../pages/calendarPage'
import UserdataRouter from './UserdataRouter'
import SearchPage from '../pages/searchPage'
import DiaryCreateProtected from './DiaryCreateProtected'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<UserdataRouter />}>
            <Route element={<ProtectedRouter />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/profile/:id" element={<ProfilePage />} />
              <Route path="/calendar/:id" element={<CalendarPage />} />
              <Route path="/follow/:id" element={<FollowPage />} />
              <Route path="/setting" element={<SettingPage />} />

              <Route element={<DiaryCreateProtected />}>
                <Route path="/diaryCreate" element={<DiaryCreatePage />} />
              </Route>
              <Route path="/diaryCreate/:id" element={<DiaryCreatePage />} />

              <Route path="/diary" element={<DiaryPage />} />

              <Route path="/diary/:id" element={<ShowDiary />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
