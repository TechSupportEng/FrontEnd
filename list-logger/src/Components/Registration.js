import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "../Styles/forms.css"

const Registration = props => {
  const [register, setRegister] = useState({
    name: "",
    password: ""
  })

  const submitHandler = event => {
    event.preventDefault()
    axios
      .post("", register)
      .then(response => {
        localStorage.setItem("key", response.data.key)
        props.history.push("/view")
      })
      .catch(error => {
        console.log("error from register component", error)
      }, [])
  }

  const handleChange = user => event => {
    console.log(event)
    setRegister({
      ...register,
      [user]: event.target.value
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
            name="name"
            placeholder="Enter your First name"
            value={props.name}
            onChange={handleChange("name")}
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
            onChange={handleChange("password")}
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
