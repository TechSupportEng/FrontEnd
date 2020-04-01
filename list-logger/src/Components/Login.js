import React, { useState } from "react"
import axios from "axios"
import "../Styles/forms.css"
import { Link } from "react-router-dom"

export const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })

  const handleSubmit = event => {
    event.preventDefault()
    axios
      .post("http://localhost:3000/api/users/login", credentials)
      .then(response => {
        localStorage.setItem("token", response.data.key) // pass down the token
        props.history.push("/newlog") // pushed to view component
      })
      .catch(error => {
        console.log("This is an error from the Login submitHandler", error)
      }, [])
  }

  const handleChange = event => {
    console.log("from handle change", event)
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className="parent">
          <label>Name</label>
        </div>
        <div className="parent">
          <input
            className="input"
            type="text"
            name="username"
            placeholder="Wriggley"
            onChange={handleChange}
            value={props.username}
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
            onChange={handleChange}
            value={props.password}
          />
        </div>
        <div className="parent">
          <button type="submit" className="button">
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
