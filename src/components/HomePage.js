import React from 'react'
import {Route, Link} from 'react-router-dom'


const HomePage = () => {
  return (
    <div className="HomePage">
      <strong><Link to="/">Home</Link></strong> 
      <br></br> 
      <strong><Link to="/trackers/new">Create</Link></strong>
      <br></br>
      <strong><Link to="/trackers">View All</Link></strong>
      <h1>Calorease- A simple app designed to help you keep track of your daily caloric intake with ease!</h1>
      <h3>Use the above menu to create a new entry or view all entries</h3>
      <br/>
    </div>

  )
}

export default HomePage