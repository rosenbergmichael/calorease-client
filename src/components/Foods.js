import React from 'react'
import {connect} from 'react-redux'
import {deleteFood} from '../actions/deleteFood'
// import AddUpvote from './AddUpvote'



const Foods = (props) => {

  // state = {
  //   number: 0
  // }

  const handleDelete = (food) => {
    props.deleteFood(food.id, food.tracker_id)
  }

  return (
    <div>
      {props.foods && props.foods.map(food => 
        <li key={food.id}>
           {food.name} - {food.calories} calories <button onClick={() => handleDelete(food)}>Remove</button>

           {/* <AddUpvote/> */}
           <p></p>
        </li>
        )}
    </div>
  )


}


export default connect(null, {deleteFood})(Foods)