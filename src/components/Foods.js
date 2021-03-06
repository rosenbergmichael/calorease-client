import React from 'react'
import {connect} from 'react-redux'
import {deleteFood} from '../actions/deleteFood'




const Foods = (props) => {


  const handleDelete = (food) => {
    props.deleteFood(food.id, food.tracker_id)
  }

  return (
    <div className="Foods">
      {props.foods && props.foods.map(food => 
        <li key={food.id}>
           {food.name} - {food.calories} calories <button onClick={() => handleDelete(food)}>Remove</button>
           <p></p>
        </li>
        )}
    </div>
  )


}


export default connect(null, {deleteFood})(Foods)