import { HTMLProps } from 'react';

function SidePanelNavAnchor(props: HTMLProps<HTMLAnchorElement>) {
  const { children, ...otherProps } = props;

  return (
    <a
      {...otherProps}
      className="flex cursor-pointer items-center gap-[8px] p-[16px]"
    >
      {children}
    </a>
  );
}

export default SidePanelNavAnchor;
