import { HTMLProps } from 'react';
import { cn } from '@/lib/utils';

function SidePanelNavHeader(props: HTMLProps<HTMLDivElement>) {
  const { children } = props;

  return (
    <div
      className={cn(
        'font-poppins px-[16px] pt-[16px] pb-[4px] font-medium text-[#007C80]',
        'not-first:border-t-[1px] not-first:border-[#F2F2F2]'
      )}
    >
      {children}
    </div>
  );
}

export default SidePanelNavHeader;
