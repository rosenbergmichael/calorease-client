import React from 'react'
import {Route, Link} from 'react-router-dom'
import Tracker from './Tracker'


const Trackers = (props) => {

  return (
    <div className="Trackers">
      <br></br>
      <h2>All Entries</h2>
      <br/>
      {props.trackers.map(tracker =>
         <li key={tracker.id}>
           <Link to={`/trackers/${tracker.id}`}>{tracker.day}, {tracker.date} ( <strong>Calories: </strong>{tracker.totalcal} )</Link>
         </li> )}
    </div>
  )

}


export default Trackers