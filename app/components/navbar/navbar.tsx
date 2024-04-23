import { AppImages } from "@/lib/constants/app_images";
import Image from "next/image";
import "../../styles/navbar.css";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  return (
    <nav className="nav flex flex-row  items-center justify-between mainnav sm:px-[24px] lg:px-[108px] relative  w-full">

      <div className="flex flex-row items-center">
        <Image
          src={AppImages.navBarLogo}
          width={95}
          height={95.009}
          alt=""
          priority
        />



        <div className="font-gameria text-vivd-lime-green-10 text-[24px] nav-pump-text">
          PUMP MILLITIA
        </div>
      </div>
      <div className="flex flex-row items-center justify-between right-sec">
        <div className="flex flex-row space-x-8 items-center nav-links hidden sm:flex  ">
          <div className="font-sans text-vivd-lime-green-10 text-[16px]">
            <p className="hover:text-vivd-lime-green hover:text-[17px] hover:">
              <a href="#airdrop">Airdrop</a>
            </p>
          </div>

          <div className="font-sans text-vivd-lime-green-10 text-[16px]">
            <p className="hover:text-vivd-lime-green hover:tracking-wide hover:font-bold">
              <a>Whitepaper</a>
            </p>
          </div>

          <div className="font-sans text-vivd-lime-green-10 text-[16px]">
            <p className="hover:text-vivd-lime-green hover:tracking-wide hover:font-bold">
              <a>Presale</a>
            </p>
          </div>

          <div className="font-sans text-vivd-lime-green-10 text-[16px]">
            <p className="hover:text-vivd-lime-green hover:tracking-wide hover:font-bold">
              <a href="#roadmap"> Roadmap</a>
            </p>
          </div>

          <div className="font-sans text-vivd-lime-green-10 text-[16px]">
            <p className="hover:text-vivd-lime-green hover:tracking-wide hover:font-bold">
              <a href="#tokenomics">Tokenomics</a>
            </p>
          </div>

          <div className="font-sans text-vivd-lime-green-10 text-[16px]">
            <p className="hover:text-vivd-lime-green hover:tracking-wide hover:font-bold">
              Quests
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-[24px]">
          <div>
            <a href="/login" className="navbar-auth-btn">Authentication</a>
          </div>
          <div className="md:hidden menu-icon">
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
            <p className="mlist-link text-vivd-lime-green-10">
              <a href="#airdrop">Airdrop</a>
            </p>
          </div>

          <div className="bordered-mlist">
            <p className="mlist-link text-vivd-lime-green-10">
              <a>Whitepaper</a>
            </p>
          </div>
          <div className="bordered-mlist">
            <p className="mlist-link text-vivd-lime-green-10">
              <a>Presale</a>
            </p>
          </div>
          <div className="bordered-mlist">
            <p className="mlist-link text-vivd-lime-green-10">
              <a href="#roadmap"> Roadmap</a>
            </p>
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
