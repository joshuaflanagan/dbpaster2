import React from 'react';
import {connect} from 'react-redux'

let QueryInput = ({query, textChanged}) => (
  <textarea value={query} onChange={textChanged} rows="5" cols="80" />
)

const mapDispatchToQueryProps = (dispatch) => {
  return {
    textChanged: (event) => {
      dispatch({
        type: "QUERY_CHANGED",
        query: event.target.value
      })
    }
  }
}

QueryInput = connect(state => ({query: state.query}), mapDispatchToQueryProps)(QueryInput)

let Echo = ({query}) => (
  <pre style={{"backgroundColor":"goldenrod", "minHeight": "20px", "width": "800px", padding: "6px"}}>
    { query }
  </pre>
)

const mapStateToEchoProps = (state) => ({
  query: state.query
})

Echo = connect(mapStateToEchoProps)(Echo);

export default () => (
  <div>
    <QueryInput />
    <Echo />
  </div>
)
