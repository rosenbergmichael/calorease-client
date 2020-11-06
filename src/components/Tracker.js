import React from 'react'
import {Redirect} from 'react-router-dom'


const Tracker = (props) => {

  let tracker = props.trackers[props.match.params.id - 1]

  return (
    <h2>
      {/* {tracker ? null : <Redirect to='/trackers'/> } */}
      <strong>Day: </strong>{tracker ? tracker.day : null} | <strong>Date: </strong>{tracker ? tracker.date : null} | <strong>Total Calories: </strong>{tracker ? tracker.totalcal : null}
      {/* <strong>Day: </strong>{props.tracker.day} | <strong>Date: </strong> {props.tracker.date} | <strong>Total Calories: </strong>{props.tracker.totalcal} */}
    </h2>
  )
   
}


export default Tracker