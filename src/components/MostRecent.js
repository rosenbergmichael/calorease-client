import React from 'react'
import {Link} from 'react-router-dom'


const MostRecent = (props) => {

  return (
    <div className="MostRecent">
      <h3>Most Recent Entry:</h3>
      <p>{console.log(props.trackers.slice(-1))}</p>
      <p>{props.trackers.slice(-1).map(t =>
        <li key={t.id}>
          <Link to={`/trackers/${t.id}`}><strong>Day: </strong>{t.day} | <strong>Date: </strong>{t.date} | <strong>Calories: </strong>{t.totalcal}</Link>
        </li>
        )}
      </p>
    </div>

  )

}


export default MostRecent