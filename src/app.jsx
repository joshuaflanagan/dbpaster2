import React from 'react';
import {connect} from 'react-redux'
import QueryDisplay from 'src/components/BuiltQueryDisplay'

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


const mapStateToEchoProps = (state) => ({
  query: state.query
})

let BuiltQueryDisplay = connect(state => ({query: state.query}))(QueryDisplay);

export default () => (
  <div>
    <QueryInput />
    <BuiltQueryDisplay />
  </div>
)
