import { cn } from '@/lib/utils';
import { Bars3Icon } from '@heroicons/react/24/outline';

function PageHeaderMenuToggle() {
  return (
    <button
      type="button"
      className={cn(
        'absolute top-0 left-0 flex h-full w-[50px] cursor-pointer items-center justify-center',
        'lg:hidden'
      )}
    >
      <Bars3Icon width={24} height={24} />
    </button>
  );
}

export default PageHeaderMenuToggle;
