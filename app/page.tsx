import Hero from "./components/hero/hero";
import Preview from "./components/preview/preview";
import Features from "./components/features/features";
import Partners from "./components/partners/partners";
import MinePump from "./components/mine_pump/minePump";
import Onboarding from "./components/onboarding/onboarding";
import RoadMap from "./components/roadmap/roadmap";
import Faqs from "./components/faqs/faqs";
import Footer from "./components/footer/footer";

export default function IndexPage() {
  return (
    <div className="bg-cover bg-[url('/images/background.png')] h-full w-full">
         <Hero />
         <Preview />
         <MinePump />
         <Features />
         <Onboarding />
         <RoadMap />
         <Partners />
         <Faqs />
         <Footer />
    </div>
  )
}
