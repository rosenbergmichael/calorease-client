export function fetchTrackers() {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/trackers')
    .then(resp => resp.json())
    .then (trackers => dispatch({
      type: 'FETCH_TRACKERS',
      payload: trackers  
    }))
  }

}
