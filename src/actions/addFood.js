export const addFood = (food, trackerId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/trackers/${trackerId}/foods`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json '
      },
      body: JSON.stringify(food)
    })
    .then(resp => resp.json())
    .then(tracker => dispatch({type: 'ADD_FOOD', payload: tracker}))
  }



}