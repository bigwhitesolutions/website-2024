import type { MarkdownInstance } from 'astro';

import type { IMeetupFrontMatter } from '../types/IFrontMatter';
import { MeetupCard } from './MeetupCard';

type IRecentMeetupProps = {
  postList: MarkdownInstance<IMeetupFrontMatter>[];
};

const MeetupGallery = (props: IRecentMeetupProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {props.postList.map((elt) => (
      <MeetupCard key={elt.url} instance={elt} />
    ))}
  </div>
);

export { MeetupGallery };
