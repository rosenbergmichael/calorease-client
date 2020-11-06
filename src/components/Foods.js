import React from 'react'


const Foods = (props) => {

  return (
    <div>
      {props.foods && props.foods.map(food => 
        <li key={food.id}>
           {food.name} - {food.calories} calories
        </li>
        )}
    </div>

  )


}


export default Foods