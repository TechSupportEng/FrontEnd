import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "../Styles/forms.css"

const Registration = props => {
  const [register, setRegister] = useState({
    username: "",
    password: ""
  })

  const submitHandler = event => {
    event.preventDefault()
    axios
      .post("http://localhost:3000/api/users/register", register)
      .then(response => {
        localStorage.setItem("key", response.data.key)
        props.history.push("/login")
      })
      .catch(error => {
        console.log("error from register component", error)
      }, [])
  }

  const handleChange = event => {
    console.log(event)
    setRegister({
      ...register,
      [event.target.name]: event.target.value
    })
  }
  console.log(register)
  return (
    <div className="formContainer">
      <form onSubmit={submitHandler}>
        <h2> Registration</h2>
        <div className="parent">
          <label> Name </label>
        </div>
        <div className="parent">
          <input
            type="text"
            name="username"
            placeholder="Enter your First name"
            value={props.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="parent">
          <label> Password </label>
        </div>
        <div className="parent">
          <input
            type="password"
            name="password"
            placeholder="*********"
            value={props.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="parent">
          <button className="button" type="submit">
            Submit
          </button>
        </div>
        <div>
          <Link to="/login" className="parent">
            Already have an account?
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Registration
