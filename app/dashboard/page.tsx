"use client"
import { useEffect } from "react";
import Hero from "../components/hero/hero";
import Faqs from "../components/faqs/faqs";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";

export default function IndexPage() {
  return (
    <div className="bg-cover bg-[url('/images/dashboardbg.png')] h-full w-full">
      <NavBar />
      <div>

      </div>
      <Faqs />
      <Footer />
    </div>
  )
}
