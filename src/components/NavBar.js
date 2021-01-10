import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = (props) => {

  return (
    <div className="NavBar">
      <header><img src="https://betsysbest.com/wp-content/uploads/2019/09/food-cost-calculation-for-a-restaurant-1080x675.jpg"></img> 
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/trackers'>View All</Link></li>
          <li><Link to='/trackers/new'>Create</Link></li>
          <li><Link to='/mostrecent'>Most Recent Entry</Link></li>
        </ul>
      </header>
    </div>
  )

}


export default NavBar