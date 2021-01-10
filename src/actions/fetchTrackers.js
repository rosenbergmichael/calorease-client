import { BASE_URL } from "./api.js"

export function fetchTrackers() {

  return (dispatch) => {
    console.log("c")
    fetch(`${BASE_URL}/trackers`)
    .then(resp => resp.json())
    .then (trackers => {
      console.log("d")
      dispatch({
      type: 'FETCH_TRACKERS',
      payload: trackers  
    })
    
  })
  }

}
