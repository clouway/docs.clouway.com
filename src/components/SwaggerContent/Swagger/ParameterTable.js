import React from 'react';
import PropTypes from 'prop-types';

import Link from './Link';
import Description from './Description';

import classes from './Swagger.module.scss'

const ParameterTable = ({apiKey, value, onClick}) => {
  return (
    <div>
      <h3>Parameters:</h3>

      <table>
        <thead>
        <tr className={classes.thead} >
          <th width="10%">Context</th>
          <th width="10%">Name</th>
          <th width="10%">Type</th>
          <th width="40%">Description</th>
          <th width="20%">Schema</th>
          <th width="10%">Required</th>
        </tr>
        </thead>
        <tbody>
        {value[1].parameters && value[1].parameters.map(parameter => (
            <tr key={value[0] + apiKey + parameter.name + parameter.in} className={classes.tbody}>
              <td>{parameter.in}</td>
              <td>{parameter.name}</td>
              <td>{parameter.type}</td>
              <td>{parameter.description && <Description value={parameter.description}/>}</td>
              <td>{parameter.schema && <Link to={parameter.schema.$ref} onClick={onClick} />}</td>
              <td>{typeof parameter.required == 'undefined' || parameter.required == false ? 'no' : 'yes'}</td>
            </tr>
          )
        )}
        </tbody>
      </table>
    </div>
  )
}

ParameterTable.propTypes = {
  value: PropTypes.array.isRequired,
  apiKey: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ParameterTable
