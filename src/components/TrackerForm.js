import React from 'react'
import {connect} from 'react-redux'
import {addTracker} from '../actions/addTracker'


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
    this.props.addTracker(this.state)
  }

  render() {
    return (
      <div>
         <form onSubmit={this.handleSubmit}>
           <h2>Fill out below form to create a new entry!</h2>
           <label><strong>Day: </strong></label>
           <input type='text' value={this.state.day} name="day" onChange={this.handleChange}/>
           <br/>
           <br/>
           <label><strong>Date: </strong></label>
           <input type='text' value={this.state.date} name="date" onChange={this.handleChange}/> 
           <br/>
           <br/>
           <input type='submit'/>
         </form>
      </div>

    )

  }


}

export default connect(null, {addTracker})(TrackerForm)