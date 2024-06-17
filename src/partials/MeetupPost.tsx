import type { ReactNode } from 'react';

import { Section } from '@/components';
import { MeetupContent } from '@/components/MeetupContent';
import { MeetupHeader } from '@/components/MeetupHeader';

import type { IMeetupFrontMatter } from '../types';

type IBlogPostProps = {
  frontmatter: IMeetupFrontMatter;
  children: ReactNode;
};

const MeetupPost = (props: IBlogPostProps) => (
  <Section>
    <MeetupHeader content={props.frontmatter} />

    <MeetupContent content={props.frontmatter}>{props.children}</MeetupContent>
  </Section>
);

export { MeetupPost };
