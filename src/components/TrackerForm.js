import React from 'react'
import {connect} from 'react-redux'
import {addTracker} from '../actions/addTracker'

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


class TrackerForm extends React.Component {

  state = {
    day: '', 
    date: '', 
    totalcal: 0
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const date = new Date(this.state.date)
    this.props.addTracker({...this.state, day: weekdays[date.getDay()], date: date })
    .then( (tracker) => {
      this.props.history.push(`/trackers/${tracker.id}`)
    })    
    this.setState({
      day: '', 
      date: '', 
      totalcal: 0
    })
  }  
  

  render() {

    const day = weekdays[new Date(this.state.date).getDay()];
    
    return (
      <div>
         <form onSubmit={this.handleSubmit}>
           <h2>Fill out below form to create a new entry!</h2>
           <br/>
           <br/>
           <label><strong>Date: </strong></label>
           <input type='date'  value={this.state.date} name="date" onChange={this.handleChange}/> 
           <p><strong>Day: </strong>{day}</p>
           <br/>
           <br/>
           <input type='submit'/>
         </form>
         
      </div>
    )

  }


}


export default connect(null, {addTracker})(TrackerForm)