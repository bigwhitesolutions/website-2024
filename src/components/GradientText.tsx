import type { ReactNode } from 'react';

type IGradientTextProps = {
  children: ReactNode;
};

const GradientText = (props: IGradientTextProps) => (
  <span className="bg-gradient-to-br bg-clip-text">{props.children}</span>
);

export { GradientText };
