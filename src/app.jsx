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
      <textarea onChange={this.textChanged.bind(this)} rows="5" cols="80"></textarea>
    )
  }
}

const mapDispatchToQueryProps = {
}

//QueryInput = connect(null, mapDispatchToQueryProps)(QueryInput)
QueryInput = connect()(QueryInput)

let Echo = ({query}) => (
  <div style={{"backgroundColor":"cornflowerblue", "minHeight": "20px", "width": "800px"}}>
    { query }
  </div>
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
