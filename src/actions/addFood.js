import { BASE_URL } from "./api.js"

export const addFood = (food, trackerId) => {

  return (dispatch) => {
    fetch(`${BASE_URL}/trackers/${trackerId}/foods`, {
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