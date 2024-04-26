'use client'
import { AppImages } from "@/lib/constants/app_images";
import Image from "next/image";
import "../../styles/navbar.css";
import { useEffect, useState } from "react";
import { Link, Element, animateScroll as scroll } from 'react-scroll';
const Cookies = require('js-cookie');

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    let encrypt = Cookies.get('encrypt_id');
    if (encrypt) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [])

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  return (
    <nav className="nav flex flex-row  items-center justify-between mainnav sm:px-[24px] lg:px-[108px] relative  w-full">
      <a href="/" className="flex flex-row items-center">
        <Image
          src={AppImages.navBarLogo}
          width={95}
          height={95.009}
          alt=""
          priority
        />
        <div className="font-gameria hidden md:inline  text-vivd-lime-green-10 text-[24px] nav-pump-text">
          PUMP MILLITIA
        </div>
      </a>
      <div className="flex flex-row items-center justify-between right-sec">
        <div className="hidden md:flex flex-row space-x-8 items-center nav-links  ">
          <div className="font-sans text-vivd-lime-green-10 text-[16px]">
            <p className="hover:text-vivd-lime-green hover:text-[17px] hover:">
              <Link
                activeClass="active"
                to="airdrop"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >Airdrop</Link>
            </p>
          </div>

          <div className="font-sans text-vivd-lime-green-10 text-[16px]">
            <p className="hover:text-vivd-lime-green hover:tracking-wide hover:font-bold">
              <Link
                activeClass="active"
                to="whitepaper"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >Whitepaper</Link>
            </p>
          </div>

          <div className="font-sans text-vivd-lime-green-10 text-[16px]">
            <p className="hover:text-vivd-lime-green hover:tracking-wide hover:font-bold">
              <a style={{ cursor: 'pointer' }} href="/pre-sale">Presale</a>
            </p>
          </div>

          <div className="font-sans text-vivd-lime-green-10 text-[16px]">
            <p className="hover:text-vivd-lime-green hover:tracking-wide hover:font-bold">
              <Link
                activeClass="active"
                to="roadmap"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >Roadmap</Link>
            </p>
          </div>

          <div className="font-sans text-vivd-lime-green-10 text-[16px]">
            <p className="hover:text-vivd-lime-green hover:tracking-wide hover:font-bold">
              <Link
                activeClass="active"
                to="tokenomics"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >Tokenomics</Link>
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-[24px]">

          <div>
            {!loggedIn ?
              <a href="/login" className="navbar-auth-btn">Authentication</a> :
              <a onClick={() => {
                Cookies.remove('encrypt_id');
                location.href = '/'
              }} className="navbar-auth-btn">Logout</a>

            }

          </div>
          <div className="md:hidden menu-icon">
            <Image
              src={AppImages.menuicon}
              width={30}
              height={30}
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
              <Link
                activeClass="active"
                to="airdrop"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >Airdrop</Link>
            </p>
          </div>

          <div className="bordered-mlist">
            <p className="mlist-link text-vivd-lime-green-10">
              <a>Whitepaper</a>
            </p>
          </div>
          <div className="bordered-mlist">
            <p className="mlist-link text-vivd-lime-green-10">
              <a style={{ cursor: 'pointer' }} href="/pre-sale">Presale</a>
            </p>
          </div>
          <div className="bordered-mlist">
            <p className="mlist-link text-vivd-lime-green-10">
              <Link
                activeClass="active"
                to="roadmap"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >Roadmap</Link>
            </p>
          </div>
          <div className="bordered-mlist">
            <p className="mlist-link text-vivd-lime-green-10">
              <Link
                activeClass="active"
                to="tokenomics"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >Tokenomics</Link>
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
