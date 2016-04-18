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

let BindVariableRow = ({name, alias}) => (
  <li>
    <label>{alias} ({name})
      <input type="text" />
    </label>
  </li>
)

let BindVariableList = ({variables}) => {
  let rows = []
  for (let variable of Object.keys(variables)) {
    rows.push(
        <BindVariableRow key={variable} name={variable}
          alias={variables[variable]} />
    )
  }

  return (
    <ul>
      { rows }
    </ul>
  )
}

class QueryInput extends React.Component {
  extractVariables() {
    const {query} = this.props

    var re = /([a-z\"\._]+)\"?\s*([=|>|<=]+|IN)\s*(\$\d+)/gi;
    var m;
    var variables = {}
    while ((m = re.exec(query)) !== null) {
      if (m.index === re.lastIndex) {
        re.lastIndex++;
      }
      // m[0] = user_id = $1
      // m[1] = user_id
      // m[2] = '='
      // m[3] = $1
      // m.index = 35
      variables[m[3]] = m[1];
    }
    return variables;
  }

  render() {
    return (
      <div>
        <textarea value={this.props.query} onChange={this.props.textChanged} rows="5" cols="80" />
        <BindVariableList variables={this.extractVariables()} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryInput)
