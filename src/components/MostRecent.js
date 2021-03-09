import React from 'react'
import {Link} from 'react-router-dom'
import FoodsContainer from '../containers/FoodsContainer'



const MostRecent = (props) => {

  return (
    <div className="MostRecent">
      <br></br>
      <h2>Most Recent Entry</h2>
      <br></br>
      <p>{props.trackers.slice(-1).map(t =>
        <h3 key={t.id}>
          <strong>Day: </strong>{t.day} | <strong>Date: </strong>{t.date} | <strong>Total Calories: </strong>{t.totalcal}
          <br></br>
          <br></br>
          <FoodsContainer tracker={t}/>
        </h3>
        )}
      </p>
    </div>

  )

}


export default MostRecent