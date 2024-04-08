import { AppImages } from "@/lib/constants/app_images";
import Image from "next/image";
import "../../styles/navbar.css";

const NavBar = () => {
  return (
    <nav className=" nav flex flex-row items-center justify-between mainnav">
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

      <div className="flex flex-row space-x-8 items-center nav-links">
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

        <button className="navbar-auth-btn font-sans">Authentication</button>
      </div>
    </nav>
  );
};

export default NavBar;
