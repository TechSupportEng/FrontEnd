import React from "react"
import axios from "axios"
import "../Styles/forms.css"
import "../Styles/logform.css"

export const ViewLogs = () => {
  const submitHandler = event => {
    event.preventDefault()
    axios
      .get("http://localhost:3000/api/logs/getlogs")
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log("This is an error from the ViewLsogs", error)
      })
  }

  return (
    <div className="formContainer">
      <h2> a list of all the logs </h2>
    </div>
  )
}
export default ViewLogs
