import React from "react"
import "../Styles/Home.css"

export const Home = () => {
  return (
    <div>
      <h2>Welcome to the Logger</h2>
      <h2>Please Sign In or Sign Up</h2>
      <div className="parent1">
        <button className="button1">Sign In</button>
      </div>
      <div>
        <button className="button1">Sign Up</button>
      </div>
    </div>
  )
}

export default Home
