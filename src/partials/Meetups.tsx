import type { MarkdownInstance } from 'astro';

import { Section } from '@/components';
import { MeetupGallery } from '@/components/MeetupGallery';
import type { IMeetupFrontMatter } from '@/types';

type IMeetupPostsProps = {
  postList: MarkdownInstance<IMeetupFrontMatter>[];
};

const RecentMeetups = (props: IMeetupPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div className="text-slate-300">Meetups</div>

        <div className="text-sm">
          <a href="/meetups/">See all meetups →</a>
        </div>
      </div>
    }
  >
    <MeetupGallery postList={props.postList} />
  </Section>
);

export { RecentMeetups };
