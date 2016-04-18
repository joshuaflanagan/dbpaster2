import { combineReducers } from 'redux'

function simple(state={query: ""}, action) {
  switch(action.type) {
    case "QUERY_CHANGED":
      return {...state, query: action.query}
    default:
      return state;
  }
}

//const rootReducer = combineReducers({
  //simple,
//})

//export default rootReducer

export default simple;
