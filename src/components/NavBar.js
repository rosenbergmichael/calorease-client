import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = (props) => {

  return (
    <div className="NavBar">
      <strong><Link to='/'>Home</Link></strong> 
      <br></br> 
      <strong><Link to='/trackers'>View All</Link></strong>
      <br></br>
      <strong><Link to='/trackers/new'>Create</Link></strong>
      <br></br>
      <strong><Link to='/mostrecent'>Most Recent Entry</Link></strong>
    </div>
  )

}


export default NavBar