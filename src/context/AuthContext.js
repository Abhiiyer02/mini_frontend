import { createContext,useState, useEffect} from "react"
import jwt_decode from 'jwt-decode'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {
  let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
  let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(JSON.parse(localStorage.getItem('authTokens')).access_token) : null)
  let [loading, setLoading] = useState(true)

  let login = async (email, password) => {
    let url = process.env.REACT_APP_API_URL
    let response = await fetch(url,{
      method: 'POST',
      body: {
        'email': email,
        'password': password
      }
    })

    let data = await response.json()

    if(response.status === 200){
      const decode = jwt_decode(data.access_token)
      setAuthTokens(data)
      setUser(decode)
      localStorage.setItem('authTokens', JSON.stringify(data))
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

	// let updateToken = async ()=> {

	// 	let url = `${process.env.REACT_APP_API_URL}/api/token/refresh/`
	// 	let response = await fetch(url, {
	// 			method:'POST',
	// 			headers:{
	// 					'Content-Type':'application/json'
	// 			},
	// 			body:JSON.stringify({'refresh':authTokens?.refresh})
	// 	})

	// 	let data = await response.json()
		
	// 	if (response.status === 200){
	// 			setAuthTokens(data)
	// 			setUser(jwt_decode(data.access))
	// 			localStorage.setItem('authTokens', JSON.stringify(data))
	// 	}else{
	// 			logout()
	// 	}

	// 	if(loading){
	// 			setLoading(false)
	// 	}
  //   }

	// useEffect(()=> {
	// 		if(loading){
	// 				updateToken()
	// 		}

	// 		let fourMinutes = 1000 * 60 * 4

	// 		let interval =  setInterval(()=> {
	// 				if(authTokens){
	// 						updateToken()
	// 				}
	// 		}, fourMinutes)
	// 		return ()=> clearInterval(interval)

	// }, [authTokens, loading, updateToken])

  return (
    <AuthContext.Provider value={contextData}>
        {children}
    </AuthContext.Provider>
  )
}
