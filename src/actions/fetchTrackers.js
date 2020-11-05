export function fetchTrackers() {
  // below is thunk function, part 5- 35min
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/trackers')
    .then(resp => resp.json())
    .then (trackers => dispatch({
      type: 'FETCH_TRACKERS',
      payload: trackers  
    }))
  }

}
