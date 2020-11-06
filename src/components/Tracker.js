import React from 'react'


const Tracker = (props) => {

  return (
    <li>
      <strong>Day: </strong>{props.tracker.day} | <strong>Date: </strong> {props.tracker.date} | <strong>Total Calories: </strong>{props.tracker.totalcal}
    </li>
  )
   
}


export default Tracker