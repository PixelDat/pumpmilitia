"use client"
import Hero from "../components/hero/hero";
import Preview from "../components/preview/preview";
import Features from "../components/features/features";
import Partners from "../components/partners/partners";
import MinePump from "../components/mine_pump/minePump";
import RoadMap from "../components/roadmap/roadmap";
import Faqs from "../components/faqs/faqs";
import Footer from "../components/footer/footer";
import Onboarding from "../components/onboarding/onboarding";
import { useEffect } from "react";
import Tokenomics from "../components/tokenomics/tokennomics";
import CustomButton from "../components/buttons/customButton";
import Image from "next/image";
import NavBar from "../components/navbar/navbar";

export default function Presale() {
  return (

    <div className="bg-cover bg-[url('/images/background.png')] h-full w-full">

      <div>
        <div className="sm:pb-10 md:pb-20 overflow-hidden bg-cover bg-[url('/images/presale/presalebg.png')] md:bg-[url('/images/presale/presalebg.png')] z-0">
          <div className="z-10 flex flex-col space-y-8 relative">
            <NavBar />

            <div>

            </div>
          </div>
        </div>
      </div >

      {/* <Hero /> */}
      {/* <Preview /> */}
      {/* <MinePump /> */}
      {/* <Features /> */}
      {/* <Onboarding /> */}
      {/* <RoadMap /> */}
      <Tokenomics />
      <Faqs />
      <Footer />
    </div>
  )
}
