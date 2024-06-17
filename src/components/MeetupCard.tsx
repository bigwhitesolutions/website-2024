import type { MarkdownInstance } from 'astro';
import { format } from 'date-fns';

import type { IMeetupFrontMatter } from '../types/IFrontMatter';

type IMeetupCardProps = {
  instance: MarkdownInstance<IMeetupFrontMatter>;
};

const MeetupCard = (props: IMeetupCardProps) => (
  <a className="hover:translate-y-1" href={props.instance.url}>
    <div className="overflow-hidden rounded-md bg-slate-800">
      <div className="px-3 pb-6 pt-4 text-center">
        <h2 className="text-xl font-semibold">
          {props.instance.frontmatter.group}
        </h2>

        <div className="mt-1 text-xs text-gray-400">
          {format(new Date(props.instance.frontmatter.date), 'LLL d, yyyy')}
        </div>

        <div className="mt-2 text-sm">
          {props.instance.frontmatter.description}
        </div>
      </div>
    </div>
  </a>
);

export { MeetupCard };
