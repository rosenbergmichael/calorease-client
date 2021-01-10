import { BASE_URL } from "./api.js"

export const addTracker = (data) => {

  return (dispatch) => {
    return fetch(`${BASE_URL}/trackers`, {
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        tracker: data
      })
    })
    .then(resp => resp.json())
    .then(tracker => {
      dispatch({type: 'ADD_TRACKER', payload: tracker})
      return tracker
    })
  }

} 