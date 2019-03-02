import React from 'react';
import Language from './Language';
import PropTypes from 'prop-types';

import orderBy from 'lodash/orderBy';
import SectionWrapper from "../../hoc/SectionWrapper";

const Languages = ({ data }) => {
  let languages = orderBy(data, ['priority'], ['asc']);

  return (
    <SectionWrapper title="Languages">
      <table>
        <tbody>
        {languages.map(language => <Language language={language} key={language.id} />)}
        </tbody>
      </table>
    </SectionWrapper>
  )
};

Languages.propTypes = {
  data: PropTypes.array.isRequired
};

export default Languages