import React from 'react'
import {Redirect} from 'react-router-dom'

import FoodsContainer from '../containers/FoodsContainer'

const Tracker = (props) => {

  let tracker = props.trackers[props.match.params.id - 1]
  // let tracker = props.trackers.filter(tracker => tracker.id === props.match.params.id)[0]

  return (
    <div>
      <h2>
        {/* {tracker ? null : <Redirect to='/trackers'/> } */}
        <strong>Day: </strong>{tracker ? tracker.day : null} | <strong>Date: </strong>{tracker ? tracker.date : null} | <strong>Total Calories: </strong>{tracker ? tracker.totalcal : null}
        {/* <strong>Day: </strong>{props.tracker.day} | <strong>Date: </strong> {props.tracker.date} | <strong>Total Calories: </strong>{props.tracker.totalcal} */}
      </h2>
      <FoodsContainer tracker={tracker}/>
    </div>
    
  )
   
}


export default Tracker