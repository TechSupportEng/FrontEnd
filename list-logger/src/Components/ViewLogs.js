import React, {useState, useEffect} from "react"
import axios from "axios"
import "../Styles/forms.css"
import "../Styles/logform.css"
import MapCompoennt from "./mapComponent.js"

const ViewLogs = () => {

  const [viewLogs, setViewLogs] = useState([])

  useEffect(() => { // to display the logs
    axios
    .get("http://localhost:3000/api/logs/getlogs")
    .then(response => {
      console.log("This is out get request from ViewLogs component", response.data)
      setViewLogs(response.data)
    })
    .catch(error => {
      console.log("This is an error from the ViewLsogs", error)
    })
  }, [])


  return (
    <div className="formContainer">
      <h2> a list of all the logs </h2>
      {/* map through mapComponent here to display our logs */}
       { viewLogs.map(info => (
          <MapCompoennt key={info.id} timeOfLog={info.timeOfLog} nameOfLog={info.nameOfLog} incidentNumber={info.incidentNumber} errorMessage={info.errorMessage} status={info.status} discoveries={info.discoveries} outcome={info.outcome} />
       ))} 
    </div>
  )
}

export default ViewLogs