"use client"
import type { Metadata } from "next";
import { Text } from "./components/typography/text";
import Hero from "./components/hero/hero";
import Preview from "./components/preview/preview";
import Features from "./components/features/features";
import Partners from "./components/partners/partners";
import MinePump from "./components/mine_pump/minePump";
import RoadMap from "./components/roadmap/roadmap";
import Faqs from "./components/faqs/faqs";


export default function IndexPage() {
  return (
    <div className="bg-cover bg-[url('/images/background.png')] h-full w-full">
         <Hero />
         <Preview />
         <MinePump />
         <Features />
         <RoadMap />
         <Partners />
         <Faqs />
    </div>
  )
}
