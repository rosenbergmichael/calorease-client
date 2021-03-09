import React from 'react'
import {Link} from 'react-router-dom'


const HomePage = (props) => {

  return (
    <div className="HomePage">
      <br></br>
      <h1><i><u>Calorease</u></i></h1>
      <h3><i>Keep track of your daily caloric intake with ease!</i></h3>
      <br/>
      <br/>
      <br/>
      <h2>Most Recent Entry:</h2>
      <p>{console.log(props.trackers.slice(-1))}</p>
      <p>{props.trackers.slice(-1).map(t =>
        <ul>
        <li key={t.id}>
          <Link to={`/trackers/${t.id}`}><strong>Day: </strong>{t.day} | <strong>Date: </strong>{t.date} | <strong>Calories: </strong>{t.totalcal}</Link>
        </li>
        </ul>
        )}
      </p>
    </div>

  )

}


export default HomePage