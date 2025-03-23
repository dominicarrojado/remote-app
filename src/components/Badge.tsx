import { HTMLProps } from 'react';

function Badge(props: HTMLProps<HTMLDivElement>) {
  const { children, ...otherProps } = props;

  return (
    <div
      {...otherProps}
      className="inline-flex rounded-[4px] bg-[#07A35D] px-[8px] py-[2px] text-[12px] leading-[16px] text-white uppercase"
    >
      {children}
    </div>
  );
}

export default Badge;
