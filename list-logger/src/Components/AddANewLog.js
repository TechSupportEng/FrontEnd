import React, { useState } from "react"
import axios from "axios"
import "../Styles/forms.css"
import "../Styles/logform.css"

export const AddANewLog = props => {
  const [addLog, setAddLog] = useState({
    nameOfLog: "",
    timeOfLog: "",
    timeOfIncident: "",
    incidentNumber: "",
    status: "",
    errorMessage: "",
    discoveries: "",
    outcome: ""
  })

  const submitHandler = event => {
    event.preventDefault()
    axios
      .post("http://localhost:3000/api/logs/logscards", addLog)
      .then(response => {
        console.log(response.data)
        setAddLog(response.data)
        props.history.push("/view")
      })
      .catch(error => {
        console.log("This is an error from the ViewLogs", error)
      }, [])
  }

  const changeHandler = event => {
    console.log("event changing", event)
    setAddLog({
      ...addLog,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="formContainer">
      <form className="log-form" onSubmit={submitHandler}>
        <h2>T-SET LOG REPORT</h2>
        <div className="parents">
          <label>TIME</label>
          <input
            className="inputs"
            type="text"
            name="timeOfLog"
            placeholder="17:30"
            value={props.timeOfLog}
            onChange={changeHandler}
          />
        </div>
        <div className="parents">
          <label>LOG NAME</label>
          <input
            className="inputs"
            type="text"
            name="nameOfLog"
            placeholder="Mia-Gateway Dashboard"
            value={props.nameOfLog}
            onChange={changeHandler}
          />
        </div>
        <div className="parents">
          <label>INCIDENT ID</label>
          <input
            className="inputs"
            type="text"
            name="incidentNumber"
            placeholder="Incident Number or Time of Incident"
            value={props.incidentNumber}
            onChange={changeHandler}
          />
        </div>
        <div className="parents">
          <label>ERROR MESSAGE</label>
          <input
            className="inputs"
            type="text"
            name="errorMessage"
            placeholder="Error Message"
            value={props.errorMessage}
            onChange={changeHandler}
          />
        </div>
        <div className="parents">
          <label>STATUS</label>
          <input
            className="inputs"
            type="text"
            name="status"
            placeholder="Needs Follow Up || LGTM"
            value={props.status}
            onChange={changeHandler}
          />
        </div>
        <div className="parents">
          <label>DISCOVERIES</label>
          <input
            className="inputs"
            type="text"
            name="discoveries"
            placeholder="What did you research"
            value={props.discoveries}
            onChange={changeHandler}
          />
        </div>
        <div className="parents">
          <label>ADDITIONAL COMMENTS</label>
          <input
            className="inputs"
            type="text"
            name="outcome"
            placeholder="Is there a pattern? Anything extra we might need to know in the future looking back?"
            value={props.outcome}
            onChange={changeHandler}
          />
        </div>
        <div className="parent">
          <button onClick={submitHandler} className="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
export default AddANewLog
