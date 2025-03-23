import { cn } from '@/lib/utils';
import { HTMLProps } from 'react';

const buttonVariants = {
  outline:
    'border-[#505050] text-[#505050] hover:bg-gray-200 active:bg-[#505050] active:text-white',
  light: 'bg-white text-[#007C80] py-[7px] border-white',
};

type ButtonProps = HTMLProps<HTMLButtonElement> & {
  variant?: keyof typeof buttonVariants;
};

function Button(props: ButtonProps) {
  const { children, className, variant = 'outline', ...otherProps } = props;

  return (
    <button
      {...otherProps}
      type="button"
      className={cn(
        'inline-block cursor-pointer rounded-[8px] border-[1px] px-[16px] py-[3px] font-medium',
        buttonVariants[variant],
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
