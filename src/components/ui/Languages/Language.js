import React from 'react';
import PropTypes from 'prop-types';

const Language = ({ language }) => {
  return (
    <tr>
      <td>
        <strong>{language.name}</strong>
      </td>
      <td>
        {language.level}
      </td>
    </tr>
  )
};

Language.propTypes = {
  language: PropTypes.object.isRequired
};

export default Language