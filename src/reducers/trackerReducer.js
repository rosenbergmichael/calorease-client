
export default function trackerReducer(state = {trackers: []}, action) {

  switch (action.type) {
    case 'FETCH_TRACKERS':
      return {trackers: action.payload} 
    case 'ADD_TRACKER':
      return {...state, trackers: [...state.trackers, action.payload]}
    case 'ADD_FOOD':
      let trackers = state.trackers.map(tracker => {
        if (tracker.id === action.payload.id) {
          return action.payload
        } else {
          return tracker 
        } 
      })
      return {...state, trackers: trackers}  
    case 'DELETE_FOOD':
      let trackerss = state.trackers.map(tracker => {
        if (tracker.id === action.payload.id) {
          return action.payload
        } else {
          return tracker 
        } 
      })
      return {...state, trackers: trackerss}    
    default:
      return state
  } 

 }