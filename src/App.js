import React from 'react';
import {connect} from 'react-redux'
import TrackersContainer from './containers/TrackersContainer'

import './style.css'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <TrackersContainer/> 
      </div>
    );
  }
  
}

export default App;