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
    <Card className="mb-1 last:mb-0">
      <div>
        <div className="flex justify-between">
          <strong className="mb-2">{data.title}</strong>
          <span className="text-right text-gray-400">{date}</span>
        </div>
        <div className="text-gray-400">{data.organizer}</div>
        <div className="py-2 whitespace-pre-line">{data.description}</div>
      </div>
    </Card>
  );
};

export default Workshop;
