import React from 'react'
import FoodsContainer from '../containers/FoodsContainer'


const Tracker = (props) => {

  let tracker = props.trackers.filter(tracker => tracker.id == props.match.params.id)[0]

  return (
    <div className="Tracker">
      <br></br>
      <h2>
        {tracker ? tracker.day : null}, {tracker ? tracker.date : null}
      </h2>
      <h3>
        <strong>Total Calories: </strong>{tracker ? tracker.totalcal : null}
      </h3>
      <br/>
      <FoodsContainer tracker={tracker}/>
    </div>
  )
   
}


export default Tracker