import React, { FunctionComponent } from 'react';

import { LanguageType } from '../../types/cv';

type IProps = {
  language: LanguageType;
};

const Language: FunctionComponent<IProps> = ({ language }) => {
  return (
    <tr>
      <td className="pr-4">
        <strong>{language.name}</strong>
      </td>
      <td>{language.level}</td>
    </tr>
  );
};

export default Language;
