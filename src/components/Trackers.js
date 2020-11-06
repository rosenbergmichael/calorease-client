import React from 'react'
import Tracker from './Tracker'


const Trackers = (props) => {

  return (
    <div>
      {props.trackers.map(tracker =>
         <div key={tracker.id}><Tracker tracker={tracker}/></div> )}
    </div>

  )


}

export default Trackers

