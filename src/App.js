import React from 'react';
import {connect} from 'react-redux'
import TrackersContainer from './containers/TrackersContainer'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Calorease- A simple app designed to help you keep track of your daily caloric intake with ease!</h1>
        <br/>
        <TrackersContainer/> 
      </div>
    );
  }
  
}

export default App;
