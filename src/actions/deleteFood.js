export const deleteFood = (foodId, trackerId) => {

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/trackers/${trackerId}/foods/${foodId}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(tracker => dispatch({type: 'DELETE_FOOD', payload: tracker}))

  }



}