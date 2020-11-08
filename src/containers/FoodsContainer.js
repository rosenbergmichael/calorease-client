import React from 'react'
import FoodForm from '../components/FoodForm'
import Foods from '../components/Foods'
// import trackerReducer from '../reducers/trackerReducer'


class FoodsContainer extends React.Component {

  render() {
    return (
      <div>
        <FoodForm tracker={this.props.tracker}/>
        <br/>
        <br/>
        <Foods foods={this.props.tracker &&  this.props.tracker.foods}/>
      </div>
    )

  }


}


export default FoodsContainer