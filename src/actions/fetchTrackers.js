import { BASE_URL } from "./api.js"

export function fetchTrackers() {

  return (dispatch) => {
    fetch(`${BASE_URL}/trackers`)
    .then(resp => resp.json())
    .then (trackers => {
      dispatch({
      type: 'FETCH_TRACKERS',
      payload: trackers  
    })
    
  })
  }

}
