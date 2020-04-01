import React from "react"
import "../Styles/Home.css"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div>
      <h2>Welcome to the Logger</h2>
      <div className="parent1">
        <Link to="/login">
          <div className="button1">Sign In</div>
        </Link>
        <Link to="/registration">
          <div className="button1">Sign Up</div>
        </Link>
      </div>
    </div>
  )
}

export default Home
