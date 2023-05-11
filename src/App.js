import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import {AuthProvider} from './context/AuthContext'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App;
