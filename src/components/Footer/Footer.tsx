import { NavItem } from "../NavItem";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f6f6f6] pt-[96px] pb-[16px] px-[4%] md:px-[15%] md:pb-[82px] md:pt-[100px]">
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
          <NavItem to="/terms" className="text-[#91A0B6] hover:text-[#04BF94]">
            Terms of Service
          </NavItem>
          <span className="hidden md:inline mx-3 text-[#91A0B6]">|</span>
          <NavItem
            href="/privacy"
            className="text-[#91A0B6] hover:text-[#04BF94]"
          >
            Privacy Policy
          </NavItem>
          <span className="hidden md:inline mx-3 text-[#91A0B6]">|</span>
          <NavItem
            href="/subscription"
            className="text-[#91A0B6] hover:text-[#04BF94]"
          >
            Subscription Policy
          </NavItem>
        </div>

        <div className="text-[#91A0B6] text-center">
          Copyright © 2020 PlantIn. All rights reserved
        </div>
      </div>
    </footer>
  );
};
