import React from 'react';
import {connect} from 'react-redux'
import TrackersContainer from './containers/TrackersContainer'

// import NavBar from './components/NavBar'
// import HomePage from './components/HomePage'

import './style.css'

// import './style.css'
// import TrackerForm from './components/TrackerForm'


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

// removed below from return to see if it fixes creating tracker form

//  {/* <NavBar/> */}
//         {/* <HomePage/> */}