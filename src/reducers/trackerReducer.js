
export default function trackerReducer(state = {trackers: []}, action) {

  switch (action.type) {
    case 'FETCH_TRACKERS':
      return {trackers: action.payload} 
  
    default:
      return state

  } 

 }