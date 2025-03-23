import { cn } from '@/lib/utils';
import chatLogo from '@assets/logos/whatsapp.svg?inline';
import Button from './Button';

function PageHeaderButtons() {
  return (
    <div className="hidden lg:flex lg:gap-[12px]">
      <button
        type="button"
        className={cn(
          'cursor-pointer rounded-[8px] bg-[#f2f2f2] p-[3px]',
          'hover:bg-gray-200 active:bg-[#505050]'
        )}
      >
        <img src={chatLogo} alt="WhatsApp" className="h-[24px] w-auto" />
      </button>
      <Button>Login</Button>
    </div>
  );
}

export default PageHeaderButtons;
