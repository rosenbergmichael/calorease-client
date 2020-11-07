import React from 'react'
import {Route, Link} from 'react-router-dom'
import Tracker from './Tracker'


const Trackers = (props) => {

  return (
    <div>
      <h2>All Entries</h2>
      {props.trackers.map(tracker =>
         <li key={tracker.id}>
           <Link to={`/trackers/${tracker.id}`} ><strong>Day: </strong>{tracker.day} | <strong>Date: </strong>{tracker.date} | <strong>Calories: </strong>{tracker.totalcal}</Link>
         </li> )}
    </div>

  )


}

export default Trackers

// 