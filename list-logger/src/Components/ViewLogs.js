import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "../Styles/forms.css"
import "../Styles/logform.css"

export const ViewLogs = () => {
  const submitHandler = event => {
    event.preventDefault()
    // axios
    //   .get("")
    //   .then(response => {
    //     console.log(response.data)
    //   })
    //   .catch(error => {
    //     console.log("This is an error from the ViewLsogs", error)
    //   })
  }

  return (
    <div className="formContainer">
      <form className="log-form" onsubmit={submitHandler}>
        <h2>T-SET LOG REPORT</h2>
        <div className="parents">
          <label>TIME</label>
          <input
            className="inputs"
            type="text"
            name="name"
            placeholder="17:30"
            //onChange={changeHandler}
            //value={name}
          />
        </div>
        <div className="parents">
          <label>LOG NAME</label>
          <input
            className="inputs"
            type="text"
            name="logName"
            placeholder="Mia-Gateway Dashboard"
            //onChange={changeHandler}
            // value={logName}
          />
        </div>
        <div className="parents">
          <label>INCIDENT ID</label>
          <input
            className="inputs"
            type="text"
            name="incidentId"
            placeholder="Incident Number or Time of Incident"
            //onChange={changeHandler}
            //value={incidentNumber}
          />
        </div>
        <div className="parents">
          <label>STATUS</label>
          <input
            className="inputs"
            type="text"
            name="status"
            placeholder="Needs Follow Up || LGTM"
            //onChange={changeHandler}
            //value={incidentNumber}
          />
        </div>
        <div className="parents">
          <label>DISCOVERIES</label>
          <input
            className="inputs"
            type="text"
            name="discoveries"
            placeholder="What did you research"
            //onChange={changeHandler}
            //value={incidentNumber}
          />
        </div>
        <div className="parents">
          <label>ADDITIONAL COMMENTS</label>
          <input
            className="inputs"
            type="text"
            name="discoveries"
            placeholder="Is there a pattern? Anything extra we might need to know in the future looking back?"
            //onChange={changeHandler}
            //value={incidentNumber}
          />
        </div>
        <div className="parent">
          <button onclick={submitHandler} className="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
export default ViewLogs
