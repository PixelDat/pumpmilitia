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

export default function Presale() {
  return (
    <div className="bg-cover bg-[url('/images/background.png')] h-full w-full">

      <CustomButton type="gradient" text="Gradient Button" />

      <br />
      <br />
      <CustomButton type="normal" text="Normal Button" />

      <br />
      <br />
      <CustomButton type="transparent" text="Transparent Button" />

      {/* <Hero /> */}
      {/* <Preview /> */}
      {/* <MinePump /> */}
      {/* <Features /> */}
      {/* <Onboarding /> */}
      {/* <RoadMap /> */}
      {/* <Tokenomics /> */}
      {/* <Partners /> */}
      {/* <Faqs /> */}
      {/* <Footer /> */}

    </div>
  )
}
