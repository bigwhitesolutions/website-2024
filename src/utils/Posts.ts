import type {
  IFrontmatter,
  IMeetupFrontMatter,
  MarkdownInstance,
} from '@/types';

export const sortByDate = (posts: MarkdownInstance<IFrontmatter>[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};

export const sortByMeetupDate = (
  posts: MarkdownInstance<IMeetupFrontMatter>[]
) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).valueOf() -
      new Date(a.frontmatter.date).valueOf()
  );
};
