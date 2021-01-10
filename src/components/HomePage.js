import React from 'react'
import {Link} from 'react-router-dom'


const HomePage = (props) => {

  return (
    <div className="HomePage">
      <h1>Calorease- Keep track of your daily caloric intake with ease!</h1>
      <br/>
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


export default HomePage