import React from 'react';
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import TrackersContainer from './containers/TrackersContainer'

// import './style.css'
// import TrackerForm from './components/TrackerForm'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar/>
        <HomePage/>
        <TrackersContainer/> 
      </div>
    );
  }
  
}

export default App;
