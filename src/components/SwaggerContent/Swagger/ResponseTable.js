import React from 'react';
import PropTypes from 'prop-types';

import Link from './Link';
import Description from './Description';

import classes from './Swagger.module.scss'

const ResponseTable = ({apiKey, value, onClick}) => {
  return (
    <div>
      <h3 style={{marginTop: 25}}>Response codes:</h3>

      <table>
        <thead>
        <tr className={classes.thead}>
          <th width="30%">HTTP code</th>
          <th width="40%">Description</th>
          <th width="30%">Schema</th>
        </tr>
        </thead>
        <tbody>
        {Object.entries(value[1].responses).map(response => (
            <tr key={value[0] + apiKey + response[0]} className={classes.tbody}>
              <td>{response[0]}</td>
              <td>{response[1].description && <Description value={response[1].description}/>}</td>
              <td>{response[1].schema && <Link to={response[1].schema.$ref.split('/')[2]} onClick={onClick} />}</td>
            </tr>
          )
        )}
        </tbody>
      </table>
    </div>
  )
}

ResponseTable.propTypes = {
  value: PropTypes.array.isRequired,
  apiKey: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ResponseTable
