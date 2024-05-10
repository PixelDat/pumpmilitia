"use client"
import Hero from "./components/hero/hero";
import Preview from "./components/preview/preview";
import Features from "./components/features/features";
import Partners from "./components/partners/partners";
import MinePump from "./components/mine_pump/minePump";
import RoadMap from "./components/roadmap/roadmap";
import Faqs from "./components/faqs/faqs";
import Footer from "./components/footer/footer";
import Onboarding from "./components/onboarding/onboarding";
import { useEffect, useState } from "react";
import Tokenomics from "./components/tokenomics/tokennomics";
import Image from "next/image";
import { AppImages } from "@/lib/constants/app_images";

const Cookies = require('js-cookie');
let encrypt = Cookies.get('encrypt_id');

// if (encrypt) {
//   location.href = '/dashboard'
// }



export default function IndexPage() {
  const [startLoader, setStartLoader] = useState(true);

  const [percentage, setPercentage] = useState(0);
  const [width, setWidth] = useState('0px')


  useEffect(() => {
    let widthW = window.innerWidth;

    const updateCounter = () => {
      if (percentage >= 100) {
        setStartLoader(false);
      } else {
        setTimeout(() => {
          let widthPixels = widthW * ((percentage + 10) / 100)
          setWidth(`${widthPixels}px`)
          setPercentage(percentage + 10);
          // updateCounter()
        }, 200)
      }
    }
    updateCounter()

  }, [percentage])


  return (
    <>
      {startLoader ?
        <div className="bg-[#20251a] h-screen">

          <div className="absolute" style={{ zIndex: 6 }}>
          </div>

          <div className="h-[70%] d flex flex-row items-center justify-center">
            <div>
              <div className="w-full justify-center flex">
                <Image
                  className="object-center"
                  src={AppImages.navBarLogo}
                  width={110}
                  height={110}
                  alt=""
                  priority
                />
              </div>

              <div className="font-gameria text-[#A5E314] text-[40px]">
                PUMP MILITIA

                <div className="gradual-rectangle right-0 relative top-[-50px] ">
                </div>

              </div>
            </div>
          </div>

          <div className="md:inline ">
            <Image
              className="object-center bottom-0 w-full absolute"
              src={'/images/launch/desktop.png'}
              width={1000}
              height={1000}
              alt=""
              priority />
          </div>
          <div className="md:hidden">
            <Image
              className="object-center bottom-0 absolute"
              src={'/images/launch/mobile.png'}
              width={1000}
              height={1000}
              alt=""
              priority />
          </div>

          <div id="" className=" w-full absolute bottom-0">
            <h2 style={{ translate: '' }} className="font-gameria text-white text-[48px] ps-[10px]">{percentage}<span className="text-[#A5E314]"> %</span></h2>
            <div style={{ width: width }} id="loaderWidth" className={`bg-[#A5E314] my-4  h-[30px]`}>
            </div>
          </div>


        </div>
        :

        <div className="bg-cover bg-[url('/images/background.jpeg')] h-full w-full">
          <Hero />
          <Preview />
          <MinePump />
          <Features />
          <Onboarding />
          <RoadMap />
          <Tokenomics />
          <Partners />
          <Faqs />
          <Footer />
        </div>
      }

    </>

  )
}
