import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout, reset } from '../features/auth/authSlice'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')

  }

  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>GOAL SETTER</Link>
        </div>
        <ul>
            {
              user ? 
                (<button className='btn' onClick={onLogout}><FaSignOutAlt/>LOGOUT</button>) 
                : 
                (<>
                <li>
                  <Link to='/login'><FaSignInAlt/>LOGIN</Link>
                  <Link to='/register'><FaUser/>REGISTER</Link>
                </li>
                </>)
            }
        </ul>
    </header>
  )
}

export default Header