import { cn } from '@/lib/utils';
import { HTMLProps } from 'react';

function Button(props: HTMLProps<HTMLButtonElement>) {
  const { children, ...otherProps } = props;

  return (
    <button
      {...otherProps}
      type="button"
      className={cn(
        'cursor-pointer rounded-[8px] border-[1px] border-[#505050] px-[16px] py-[3px] text-[14px] leading-[22px] font-medium text-[#505050]',
        'hover:bg-gray-200 active:bg-[#505050] active:text-white'
      )}
    >
      {children}
    </button>
  );
}

export default Button;
