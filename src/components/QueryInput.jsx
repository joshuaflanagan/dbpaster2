import React from 'react';
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
  query: state.query
})

const mapDispatchToProps = (dispatch) => {
  return {
    textChanged: (event) => {
      dispatch({
        type: "QUERY_CHANGED",
        query: event.target.value
      })
    }
  }
}

let QueryInput = ({query, textChanged}) => (
  <textarea value={query} onChange={textChanged} rows="5" cols="80" />
)

export default connect(mapStateToProps, mapDispatchToProps)(QueryInput)
