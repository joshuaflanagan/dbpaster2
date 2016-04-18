import React from 'react';
import {connect} from 'react-redux'
import QueryInput from 'src/components/QueryInput'
import BuiltQueryDisplay from 'src/components/BuiltQueryDisplay'

let QueryDisplay = connect(state => ({query: state.query}))(BuiltQueryDisplay);

export default () => (
  <div>
    <QueryInput />
    <QueryDisplay />
  </div>
)
