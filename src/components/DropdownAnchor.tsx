import { cn } from '@/lib/utils';
import { HTMLProps } from 'react';

export default function DropdownAnchor(props: HTMLProps<HTMLAnchorElement>) {
  const { children, ...otherProps } = props;

  return (
    <a
      {...otherProps}
      className={cn(
        'font-roboto flex items-center gap-[8px] p-[16px] text-[14px] leading-[22px] text-[#0E2638]',
        'hover:bg-gray-100 active:bg-gray-200'
      )}
    >
      {children}
    </a>
  );
}
