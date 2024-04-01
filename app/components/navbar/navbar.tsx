import { AppImages } from "@/lib/constants/app_images"
import Image from "next/image"

const NavBar = () => {
    return (
        <nav className='px-16 flex flex-row items-center justify-between bg-black-leather-jacket-90 border border-black bg-opacity-75 backdrop-blur-[20px]'>
         <div className="flex flex-row items-center">
            <Image
              src={AppImages.navBarLogo}
              width={95}
              height={95}
              alt=""
              priority />


            <div className='font-gameria text-vivd-lime-green-10 text-[24px]'>
                PUMP MILLITIA
            </div>
         </div>


         <div className="flex flex-row space-x-8 items-center">
           <div className='font-sans text-vivd-lime-green-10 text-[16px]'>
                Airdrop
            </div>

            <div className='font-sans text-vivd-lime-green-10 text-[16px]'>
                Whitepaper
            </div>

            <div className='font-sans text-vivd-lime-green-10 text-[16px]'>
                Presale
            </div>

            <div className='font-sans text-vivd-lime-green-10 text-[16px]'>
                Roadmap
            </div>

            <div className='font-sans text-vivd-lime-green-10 text-[16px]'>
                Tokenomics
            </div>

            <div className='font-sans text-vivd-lime-green-10 text-[16px]'>
                Quests
            </div>


            <button className='bg-vivd-lime-green px-[24px] py-[12px] shadow-sm rounded-2xl shadow-white'>
                Authentication
            </button>
         </div>
        </nav>
    )
}



export default NavBar