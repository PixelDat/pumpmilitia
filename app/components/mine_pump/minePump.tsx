import Image from "next/image";
import { useState } from "react";
import '../../styles/mine.css';


const MinePump = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const items = [
    {
      title: "Download Pump Millitia",
      sub_title: "Download the Pump Militia game from the Play Store and App Store, Install and Create an account and start this epic journey.",
      image: "/images/mine1.png",
    },
    {
      title: "Claim Your $PUMP Tokens",
      sub_title: "Tap the claim button to receive your $PUMP tokens. Remember, you can do this twice a day. (every 12 hours!).It's simple.",
      image: "/images/mine2.png",

    },
    {
      title: "EARN MORE REWARDS",
      sub_title: " Maximize your earnings by playing the game, completing daily and special quests and inviting your friends to mine",
      image: "/images/mine3.png",

    }
  ]
  return (
    <div
      className="flex flex-col space-y-24 justify-center bg-cover bg-[url('/images/airdropbg.png')] items-center py-32"
      id="airdrop"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="font-gameria text-vivd-lime-green-10 text-[40px]">
          AIRDROP - MINE $PUMP
        </div>

        <div className="font-sans font-[700] text-vivd-lime-green-10 text-[16px] max-w-[800px] text-center">
          You can start mining $PUMP tokens on your mobile phones right away.
          We're opening the doors wide for every crypto enthusiast to join in on
          the fun and rewards.
        </div>
      </div>

      <div data-aos="fade-down-right" data-aos-duration="1000" className="flex flex-row justify-center items-start space-x-24">
        <div className="flex flex-col space-y-8 text-start max-w-[518px]">
          <div className="mb-8" style={{ position: 'relative' }}>

            <div className="loader">

            </div>
            <Image
              style={{ position: 'absolute', top: -28, }}
              src={"/svg/icon_logo_2.svg"}
              width={69}
              height={69}
              alt=""
              priority
            />
          </div>


          {items.map((item: any, index: number) => {
            if (index !== selectedItem) {
              return (
                <div onMouseEnter={() => { setSelectedItem(index) }} key={index} onClick={() => { setSelectedItem(index) }} className="flex flex-col justify-start items-start">
                  <div className="font-gameria text-[#898989] text-[32px]">
                    {item.title}
                  </div>

                  <div className="font-sans text-[#898989] text-[14px]">
                    {item.sub_title}
                  </div>

                  <div className="border-b border-[#898989] w-full pt-2"></div>
                </div>)
            } else {
              return (
                <div onMouseEnter={() => { setSelectedItem(index) }} onClick={() => { setSelectedItem(index) }} className="flex flex-col justify-start items-start">
                  <div className="font-gameria text-vivd-lime-green-10 text-[32px]">
                    {item.title}
                  </div>

                  <div className="font-sans text-vivd-lime-green-10 text-[14px]">
                    {item.sub_title}
                  </div>

                  <div className="border-b border-[#52594B] w-full pt-2"></div>
                </div>
              )
            }
          })}

          <div className="flex flex-row space-x-4 items-start justify-start">
            <Image src={"/svg/play_store.svg"} width={185} height={56} alt="" />

            <Image src={"/svg/app_store.svg"} width={185} height={56} alt="" />
          </div>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="2000" className="">
          <Image
            src={items[selectedItem].image}
            width={669}
            height={446}
            priority
            alt=""
          />
        </div>
      </div>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    </div>
  );
};

export default MinePump;
