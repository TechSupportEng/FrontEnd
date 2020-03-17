import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import Home from "./Components/Home"
import "./App.css"

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/view" component={ViewLogs} />
        <Route exact path="/newlog" component={AddANewLog} />
      </Router>
    </div>
  )
}

export default App
