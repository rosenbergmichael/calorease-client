import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchTrackers} from '../actions/fetchTrackers'
import Trackers from '../components/Trackers'
import Tracker from '../components/Tracker'
import TrackerForm from '../components/TrackerForm'
import HomePage from '../components/HomePage'
import NavBar from '../components/NavBar'


class TrackersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTrackers()
  }

  render() {
    return (
      <div>
        <NavBar/>
        <HomePage/>
          <Switch>    
            <Route path='/trackers/new' component={TrackerForm}/>
            <Route path='/trackers/:id' render={(routerProps) => <Tracker {...routerProps} trackers={this.props.trackers}/>}/>
            <Route path='/trackers' render={(routerProps) => <Trackers {...routerProps} trackers={this.props.trackers}/>}/>
          </Switch>
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