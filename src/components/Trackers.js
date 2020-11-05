import React from 'react'


const Trackers = (props) => {

  return (
    <div>
      {props.trackers.map(tracker => <li key={tracker.id}><strong>Day:</strong> {tracker.day} | <strong>Date:</strong> {tracker.date} | <strong>Total Calories:</strong> {tracker.totalcal}</li> )}
    </div>

  )


}

export default Trackers

// 