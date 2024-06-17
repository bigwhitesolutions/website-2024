import type { ReactNode } from 'react';

import type { IMeetupFrontMatter } from '../types';

type IPostContentProps = {
  content: IMeetupFrontMatter;
  children: ReactNode;
};

const MeetupContent = (props: IPostContentProps) => (
  <div className="mx-auto mt-5 max-w-prose">
    <div className="prose prose-invert mt-8 prose-img:rounded-lg">
      {props.children}
    </div>
  </div>
);

export { MeetupContent };
