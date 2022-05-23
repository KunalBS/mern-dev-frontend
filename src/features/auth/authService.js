import axios from 'axios'

const API_URL = 'http://localhost:8000/api/users/register'
const API_LOGIN = 'http://localhost:8000/api/users/'


//REGISTER USER
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post(API_LOGIN + 'login', userData)
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
  }

//LOGOUT USER
const logout = () => {
    localStorage.removeItem('user')
}


const authService = {
    register, login, logout
}

export default authService;