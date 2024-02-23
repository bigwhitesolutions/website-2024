import type { ReactNode } from 'react';

type ILogoProps = {
  icon: ReactNode;
  name: string;
};

const Logo = (props: ILogoProps) => (
  <div className="flex items-center bg-gradient-to-br bg-clip-text text-xl font-bold text-white">
    {props.icon}

    {props.name}
  </div>
);

export { Logo };
