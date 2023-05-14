import { createContext,useState, useEffect} from "react"
import jwt_decode from 'jwt-decode'
import {useNavigate} from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {
  let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
  let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(JSON.parse(localStorage.getItem('authTokens')).access_token) : null)

  const navigate = useNavigate()

  let login = async (username, password) => {
    let url = `${process.env.REACT_APP_API_URL}/auth`
    let response = await fetch(url,{
      method: 'POST',
      body: new URLSearchParams(
        {
            'username': username,
            'password': password
        }
      )
    })

    let data = await response.json()

    if(response.status === 200){
      const decode = jwt_decode(data.access_token)
      setAuthTokens(data)
      setUser(decode)
      localStorage.setItem('authTokens', JSON.stringify(data))
      navigate(`/students/${username}`)
    }
    else
      alert(`Error: ${response.status}`)
  }

  let logout = () => {
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem('authTokens')
  }


  let contextData = {
    user:user,
    authTokens:authTokens,
    login:login,
    logout: logout,
  }


  return (
    <AuthContext.Provider value={contextData}>
        {children}
    </AuthContext.Provider>
  )
}
