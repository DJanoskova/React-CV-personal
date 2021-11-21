import React, { FunctionComponent } from 'react';
import format from 'date-fns/format';

import { WorkshopType } from '../../types/cv';

import Card from '../ui/Card';

type IProps = {
  data: WorkshopType;
};

const Workshop: FunctionComponent<IProps> = ({ data }) => {
  const dateFormat = 'MMM yyyy';
  const date = format(new Date(data.date), dateFormat);

  return (
    <Card className="mr-4 last:mr-0 flex-1 flex flex-col justify-between">
      <div>
        <strong className="mb-2">{data.title}</strong>
        <div className="text-gray-400">{data.organizer}</div>
        <div className="py-2 whitespace-pre-line">{data.description}</div>
      </div>
      <span className="text-right text-gray-400">{date}</span>
    </Card>
  );
};

export default Workshop;
