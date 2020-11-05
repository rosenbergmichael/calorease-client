import React from 'react';
import {connect} from 'react-redux'
import {fetchTrackers} from './actions/fetchTrackers'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchTrackers({type: 'FETCH_TRACKERS', payload: {day: 'Wednesday'}})
  }  

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
  
}

export default connect(null, {fetchTrackers})(App);
