import { format } from 'date-fns';

import type { IMeetupFrontMatter } from '../types';

type IPostHeaderProps = {
  content: IMeetupFrontMatter;
};

const MeetupHeader = (props: IPostHeaderProps) => {
  const meetupDate = Date.parse(props.content.date);
  const formattedMeetupDate =
    !Number.isNaN(meetupDate) && meetupDate !== 0
      ? format(new Date(props.content.date), 'LLL d, yyyy')
      : props.content.date;
  return (
    <>
      <h1 className="text-center text-3xl font-bold text-white">
        {props.content.group}
      </h1>

      <div className="mt-2 text-center text-sm">{formattedMeetupDate}</div>
    </>
  );
};

export { MeetupHeader };
