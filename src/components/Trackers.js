import React from 'react'


const Trackers = (props) => {

  return (
    <div>
      {props.trackers.map(tracker => <li key={tracker.id}>{tracker.day} | {tracker.date} | {tracker.totalcal}</li> )}
    </div>

  )


}

export default Trackers