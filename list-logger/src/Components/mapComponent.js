import React from "react"

const mapComponent = props => {

    return (
        <>
            <p> timeOfLog: {props.timeOfLog} </p>
            <p> nameOfLog: {props.nameOfLog} </p>
            <p> incidentNumber: {props.incidentNumber} </p>
            <p> errorMessage: {props.errorMessage} </p>
            <p> status: {props.status} </p>
            <p> discoveries: {props.discoveries} </p>
            <p> outcome: {props.outcome} </p>
        </>
    )
}

export default mapComponent;