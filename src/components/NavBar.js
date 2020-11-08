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

    </div>

  )
}

export default NavBar

// <Link
//   to={{
//     pathname: "/courses",
//     search: "?sort=name",
//     hash: "#the-hash",
//     state: { fromDashboard: true }
//   }}
// />

// <Link
//   to={{
//     pathname: "/courses",
//     search: "?sort=name",
//     hash: "#the-hash",
//     state: { fromDashboard: true }
//   }}
// />