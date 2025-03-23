import chatLogo from '@assets/logos/whatsapp.svg?inline';
import Button from './Button';

function SidePanelHeader() {
  return (
    <div className="bg-[#007C80] text-white">
      <div className="py-[8px]">
        <a
          href="#"
          className="flex items-center gap-[8px] p-[16px] font-medium"
        >
          <img src={chatLogo} alt="WhatsApp" className="h-[16px] w-auto" />
          +65 0000 0000
        </a>
      </div>
      <div className="px-[16px]">
        <hr className="bg-[#E8FEFF]" />
        <div className="flex flex-col gap-[8px] py-[28px]">
          <div className="text-[12px] leading-[18px]">
            Personalize your search & get unlimited access to features:
          </div>
          <Button variant="light" className="w-full">
            Login / Create Account
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SidePanelHeader;
