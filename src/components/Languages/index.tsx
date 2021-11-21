import React, { FunctionComponent } from 'react';
import orderBy from 'lodash/orderBy';

import { LanguageType } from '../../types/cv';

import Language from './Language';
import SectionWrapper from '../hoc/SectionWrapper';

type IProps = {
  data: LanguageType[];
};

const Languages: FunctionComponent<IProps> = ({ data }) => {
  let languages = orderBy(data, ['priority'], ['asc']);

  return (
    <SectionWrapper title="Languages">
      <table>
        <tbody>
          {languages.map((language) => (
            <Language language={language} key={language.name} />
          ))}
        </tbody>
      </table>
    </SectionWrapper>
  );
};

export default Languages;
