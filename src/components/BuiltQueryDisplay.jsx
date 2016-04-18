import React from 'react';

const QueryDisplay = ({query}) => (
  <pre style={{"backgroundColor":"goldenrod", "minHeight": "20px", "width": "800px", padding: "6px"}}>
    { query }
  </pre>
)

QueryDisplay.propTypes = {
  query: React.PropTypes.string.isRequired,
}

export default QueryDisplay
