import React from 'react'
import {connect} from 'react-redux'

import {fetchTrackers} from '../actions/fetchTrackers'
import Trackers from '../components/Trackers'
import TrackerForm from '../components/TrackerForm'


class TrackersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTrackers()
  }

  render() {
    return (
      
      <div>
        <TrackerForm/>
        <Trackers/>
      </div>

    )
  }

}

const mapStateToProps = state => {
  return {
    trackers: state.trackers 
  }
}

export default connect(mapStateToProps, {fetchTrackers})(TrackersContainer)