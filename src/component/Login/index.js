/* eslint-disable import/no-extraneous-dependencies */
import {useState} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const onChangeHandler = event => {
    const {id, value} = event.target
    if (id === 'username') {
      setUsername(value)
    } else {
      setPassword(value)
    }
  }

  const onSuccessLogin = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    history.replace('/')
  }

  const onFailedLogin = errorMessage => {
    setErrorMsg(errorMessage)
  }

  const onSubmitLogin = async event => {
    event.preventDefault()
    const userDetails = {username, password}
    const api = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(api, options)
    const data = await response.json()
    if (response.ok) {
      onSuccessLogin(data.jwt_token)
    } else {
      onFailedLogin(data.error_msg)
    }
  }

  if (Cookies.get('jwt_token')) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-container">
      <form onSubmit={onSubmitLogin} className="login-from">
        <h1 className="login-heading">Login</h1>
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input
          type="text"
          className="input"
          id="username"
          onChange={onChangeHandler}
          value={username}
        />
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <input
          type="password"
          className="input"
          id="password"
          onChange={onChangeHandler}
          value={password}
        />
        <button type="submit" className="login-btn">
          Login
        </button>
        {errorMsg !== '' && <p className="error-msg">{errorMsg}</p>}
      </form>
    </div>
  )
}
export default Login
