import { HTMLProps } from 'react';

export default function DropdownHeader(props: HTMLProps<HTMLDivElement>) {
  const { children } = props;

  return (
    <div className="p-[16px] pb-0 text-[12px] leading-[22px] font-medium text-[#999999] uppercase">
      {children}
    </div>
  );
}
