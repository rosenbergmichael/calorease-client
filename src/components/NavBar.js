import React from 'react'
import {Route, Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <div className="NavBar">
      <strong><Link to="/">Home</Link></strong> 
      <br></br> 
      <strong><Link to="/trackers/new">Create</Link></strong>
      <br></br>
      <strong><Link to="/trackers">View All</Link></strong>
    </div>

  )
}

export default NavBar
