import React from 'react'
import Trackers from '../components/Trackers'
import TrackerForm from '../components/TrackerForm'


class TrackersContainer extends React.Component {

  render() {
    return (
      
      <div>
        <TrackerForm/>
        <Trackers/>
      </div>


    )

  }


}

export default TrackersContainer