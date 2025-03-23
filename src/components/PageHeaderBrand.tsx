import { cn } from '@/lib/utils';
import brandLogo from '@assets/logos/propertyguru-finance.svg?inline';

function PageHeaderBrand() {
  return (
    <a href="/">
      <img
        src={brandLogo}
        alt="PropertyGuru Finance"
        className={cn('h-[30px] w-auto', 'lg:h-[35px]')}
      />
    </a>
  );
}

export default PageHeaderBrand;
