import React from 'react';
import {connect} from 'react-redux'

class QueryInput extends React.Component {
  textChanged(event) {
    this.props.dispatch({
      type: "QUERY_CHANGED",
      query: event.target.value
    })
  }

  render() {
    return (
      <textarea onChange={this.textChanged.bind(this)} value={this.props.query} rows="5" cols="80"></textarea>
    )
  }
}

const mapDispatchToQueryProps = {
}

//QueryInput = connect(null, mapDispatchToQueryProps)(QueryInput)
QueryInput = connect(state => ({query: state.query}))(QueryInput)

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
