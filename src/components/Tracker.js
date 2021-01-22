import React from 'react'
import FoodsContainer from '../containers/FoodsContainer'


const Tracker = (props) => {

  let tracker = props.trackers.filter(tracker => tracker.id == props.match.params.id)[0]

  return (
    <div className="Tracker">
      <br></br>
      <h2>
        <strong>Day: </strong>{tracker ? tracker.day : null} | <strong>Date: </strong>{tracker ? tracker.date : null} | <strong>Total Calories: </strong>{tracker ? tracker.totalcal : null}
      </h2>
      <FoodsContainer tracker={tracker}/>
    </div>
  )
   
}


export default Tracker