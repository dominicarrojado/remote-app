import { PopoverPanel, useClose } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import SidePanelHeader from './SidePanelHeader';
import SidePanelNav from './SidePanelNav';

type Props = {
  open: boolean;
};

function SidePanel({ open }: Props) {
  const close = useClose();

  return (
    <PopoverPanel static>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              transition={{ ease: 'linear', duration: 0.3 }}
              className={cn(
                'fixed top-[50px] left-0 z-20 h-full w-full bg-black opacity-0 transition-opacity'
              )}
              onClick={close}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ ease: 'easeInOut', duration: 0.3 }}
              className={cn(
                'fixed top-[50px] left-0 z-30 flex h-full w-full flex-col bg-white',
                'sm:max-w-[360px]'
              )}
            >
              <SidePanelHeader />
              <SidePanelNav />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </PopoverPanel>
  );
}

export default SidePanel;
