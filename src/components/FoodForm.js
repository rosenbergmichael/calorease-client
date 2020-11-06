import React from 'react'
import {connect} from 'react-redux'


class FoodForm extends React.Component {

  state = {
    name: '',
    calories: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label><strong>Food: </strong></label>
          <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
          <br/>
          <br/>
          <label><strong>Calories: </strong></label>
          <input type='text' name='calories' value={this.state.calories} onChange={this.handleChange}/>
          <br/>
          <br/>
          <input type='submit' value='Add'/>
        </form>
      </div>

    )

  }

}

export default connect(null)(FoodForm)