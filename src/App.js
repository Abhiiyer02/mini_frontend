import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import {AuthProvider} from './context/AuthContext'
import LoginPage from './pages/LoginPage/LoginPage'
import StudentPage from './pages/StudentPage/StudentPage';


function App() {
  return (
    <>
      <AuthProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path = "/students/:usn" element = {<StudentPage/>}/>
          </Routes>
      </AuthProvider>
    </>
  )
}

export default App;
