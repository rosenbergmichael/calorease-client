import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchTrackers} from '../actions/fetchTrackers'
import Trackers from '../components/Trackers'
import Tracker from '../components/Tracker'
import TrackerForm from '../components/TrackerForm'


class TrackersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTrackers()
  }

  render() {
    return (
      
      <div>
        <Route path='/trackers/new' component={TrackerForm}/>
        <Route path='/trackers/:id' render={(routerProps) => <Tracker {...routerProps} trackers={this.props.trackers}/>} />
        <Route exact path='/trackers' render={(routerProps ) => <Trackers {...routerProps} trackers={this.props.trackers}/> } />

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