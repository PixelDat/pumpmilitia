"use client"
import type { Metadata } from "next";
import { Text } from "./components/typography/text";
import Hero from "./components/hero/hero";
import Preview from "./components/preview/preview";
import Features from "./components/features/features";
import Partners from "./components/partners/partners";

export default function IndexPage() {
  return (
    <div className="bg-cover bg-[url('/images/background.png')] h-full w-full">
         <Hero />
         <Preview />
         <Features />
         <Partners />
    </div>
  )
}
