import React, { useState } from "react"
import axios from "axios"
import "../Styles/forms.css"
import { Link } from "react-router-dom"

export const Login = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    password: ""
  })

  const changeHandler = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: [event.target.value]
    })
  }
  const submitHandler = event => {
    event.preventDefault()
    // axios
    //   .post("", credentials)
    //   .then(response => {
    //     localStorage.setitem("token", response.data.key)
    //     history.pushState("/view")
    //   })
    //   .catch(error => {
    //     console.log("This is an error from the Login submitHandler", error)
    //   })
  }

  return (
    <div className="formContainer">
      <form onsubmit={submitHandler}>
        <h2>Sign In</h2>
        <div className="parent">
          <label>Name</label>
        </div>
        <div className="parent">
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Wriggley"
            onChange={changeHandler}
            value={credentials.name}
          />
        </div>
        <div className="parent">
          <label>Password</label>
        </div>
        <div className="parent">
          <input
            className="input"
            type="password"
            name="password"
            placeholder="********"
            onChange={changeHandler}
            value={credentials.password}
          />
        </div>
        <div className="parent">
          <button onclick={submitHandler} className="button">
            Submit
          </button>
        </div>
        <div className="parent">
          <Link to="/registration" className="parent">
            Need An Account?
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login
