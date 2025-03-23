import { cn } from '@/lib/utils';
import { HTMLProps } from 'react';

function Dropdown(props: HTMLProps<HTMLDivElement>) {
  const { children } = props;

  return (
    <div
      className={cn(
        'absolute top-full left-0 hidden pt-[8px]',
        'group-hover:block'
      )}
    >
      <div
        className={cn(
          'min-w-[184px] overflow-hidden rounded-[4px] bg-white shadow-[0px_2px_3px_0px_rgba(44,44,44,0.50)]'
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
