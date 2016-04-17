import { combineReducers } from 'redux'

function simple(state={query: "waiting"}, action) {
  switch(action.type) {
    case "QUERY_CHANGED":
      console.log("The query changed")
      return Object.assign({},state,{query: action.query})
    default:
      return state;
  }
}

//const rootReducer = combineReducers({
  //simple,
//})

//export default rootReducer

export default simple;
