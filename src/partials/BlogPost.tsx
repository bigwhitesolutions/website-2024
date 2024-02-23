import type { ReactNode } from 'react';

import { PostContent, PostHeader, Section } from '@/components';
import { AppConfig } from '@/utils/AppConfig';

import type { IFrontmatter } from '../types';

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <PostHeader content={props.frontmatter} author={AppConfig.author} />

    <PostContent content={props.frontmatter}>{props.children}</PostContent>
  </Section>
);

export { BlogPost };
