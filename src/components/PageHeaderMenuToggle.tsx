import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Popover, PopoverButton } from '@headlessui/react';
import { cn } from '@/lib/utils';
import SidePanel from './SidePanel';

function PageHeaderMenuToggle() {
  const iconProps = { width: 24, height: 24 };

  return (
    <Popover className="group">
      {({ open }) => (
        <>
          <PopoverButton
            type="button"
            className={cn(
              'absolute top-0 left-0 flex h-full w-[50px] cursor-pointer items-center justify-center',
              'lg:hidden'
            )}
          >
            {open ? <XMarkIcon {...iconProps} /> : <Bars3Icon {...iconProps} />}
          </PopoverButton>
          <SidePanel open={open} />
        </>
      )}
    </Popover>
  );
}

export default PageHeaderMenuToggle;
