import { BASE_URL } from "./api.js"

export const deleteFood = (foodId, trackerId) => {

  return (dispatch) => {
    return fetch(`${BASE_URL}/trackers/${trackerId}/foods/${foodId}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(tracker => dispatch({type: 'DELETE_FOOD', payload: tracker}))
  }

}