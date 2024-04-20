<<<<<<< HEAD
import { AppImages } from "@/lib/constants/app_images"
import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
    return (
        <nav className=' sticky px-16 flex flex-row items-center justify-between bg-black-leather-jacket-90 border border-black bg-opacity-75 backdrop-blur-[20px]'>
         <div className="flex flex-row items-center">
            <Image
              src={AppImages.navBarLogo}
              width={95}
              height={95}
              alt=""
              priority />

           <Link href="/"> 
            <div className='font-gameria text-vivd-lime-green-10 text-[24px]'>
                PUMP MILLITIA
            </div>
            </Link>
         </div>
=======
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
>>>>>>> c724b18 (header section in progress)

        <div className="font-sans text-vivd-lime-green-10 text-[16px]">
          <p>Whitepaper</p>
        </div>

<<<<<<< HEAD
         <div className="flex flex-row space-x-8 items-center">
         <Link href="/" > 
                <div className='font-sans text-vivd-lime-green-10 text-[16px]'> 
                  Airdrop
                </div>
            </Link>

           <Link href="/"> 
            <div className='font-sans text-vivd-lime-green-10 text-[16px]'>
                Whitepaper
            </div>
            </Link>

          <Link href=""> 
            <div className='font-sans text-vivd-lime-green-10 text-[16px]'>
                Presale
            </div>
            </Link>

          <Link href=""> 
            <div className='font-sans text-vivd-lime-green-10 text-[16px]'>
                Roadmap
            </div>
            </Link>

         <Link href=""> 
            <div className='font-sans text-vivd-lime-green-10 text-[16px]'>
                Tokenomics
            </div>
            </Link>
          <Link href=""> 
            <div className='font-sans text-vivd-lime-green-10 text-[16px]'>
                Quests
            </div>
            </Link>


            <button className='bg-vivd-lime-green px-[24px] py-[12px] shadow-sm rounded-2xl shadow-white'>
                Authentication
            </button>
         </div>
        </nav>
    )
}



export default NavBar
=======
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
>>>>>>> c724b18 (header section in progress)
