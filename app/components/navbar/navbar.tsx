import { AppImages } from "@/lib/constants/app_images";
import Image from "next/image";
import "../../styles/navbar.css";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  return (
    <nav className=" nav flex flex-row items-center justify-between mainnav sm:px-[24px] lg:px-[108px] relative">
      <div className="flex flex-row items-center">
        <Image
          src={AppImages.navBarLogo}
          width={95}
          height={95.009}
          alt=""
          priority
        />

        <div className="font-gameria text-vivd-lime-green-10 text-[24px] nav-pump-text lg:block sm:hidden xs:hidden">
          PUMP MILLITIA
        </div>
      </div>
      <div className="flex flex-row items-center justify-between right-sec">
        <div className="flex flex-row space-x-8 items-center nav-links sm:hidden xs:hidden lg:flex">
          <div className="font-sans text-vivd-lime-green-10 text-[16px]">
            <p>Airdrop</p>
          </div>

          <div className="font-sans text-vivd-lime-green-10 text-[16px]">
            <p>Whitepaper</p>
          </div>

          <div className="font-sans text-vivd-lime-green-10 text-[16px]">
            <p>Presale</p>
          </div>

          <div className="font-sans text-vivd-lime-green-10 text-[16px]">
            <p>Roadmap</p>
          </div>

          <div className="font-sans text-vivd-lime-green-10 text-[16px]">
            <p>Tokenomics</p>
          </div>

          <div className="font-sans text-vivd-lime-green-10 text-[16px]">
            <p>Quests</p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-[24px]">
          <div>
            <button className="navbar-auth-btn">Authentication</button>
          </div>
          <div className="lg:hidden">
            <Image
              src={AppImages.menuicon}
              width={23.333}
              height={23.333}
              alt=""
              priority
              onClick={() => setIsMenuOpened((prev) => !prev)}
            />
          </div>
        </div>
      </div>
      {isMenuOpened && (
        <div className="menu-mobile-container">
          <div className="bordered-mlist">
            <p className="mlist-link text-vivd-lime-green-10">Airdrop</p>
          </div>

          <div className="bordered-mlist">
            <p className="mlist-link text-vivd-lime-green-10">WhitePaper</p>
          </div>
          <div className="bordered-mlist">
            <p className="mlist-link text-vivd-lime-green-10">Presale</p>
          </div>
          <div className="bordered-mlist">
            <p className="mlist-link text-vivd-lime-green-10">Roadmap</p>
          </div>
          <div className="bordered-mlist">
            <p className="mlist-link text-vivd-lime-green-10">Tokenomics</p>
          </div>
          <div className="bordered-mlist">
            <p className="mlist-link text-vivd-lime-green-10">Quests</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
