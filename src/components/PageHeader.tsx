import { cn } from '@/lib/utils';
import PageHeaderBrand from './PageHeaderBrand';
import PageHeaderMenuToggle from './PageHeaderMenuToggle';
import PageHeaderNav from './PageHeaderNav';
import PageHeaderButtons from './PageHeaderButtons';

function PageHeader() {
  return (
    <div
      className={cn(
        'sticky top-0 z-20 flex h-[50px] items-center justify-center bg-white text-[14px] leading-[22px] text-[#0E2638] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.15)]',
        'lg:h-[70px] lg:justify-start lg:px-[25px]'
      )}
    >
      <PageHeaderMenuToggle />
      <PageHeaderBrand />
      <PageHeaderNav />
      <PageHeaderButtons />
    </div>
  );
}

export default PageHeader;
