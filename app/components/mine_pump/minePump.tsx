'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import '../../styles/mine.css';
import { KeyboardArrowLeftRounded, KeyboardArrowRightRounded } from "@mui/icons-material";
import BlipNinja from '../blipninja/blip'

const MinePump = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  function switchItems(index: number, button: string) {
    if (button === 'forward') {
      index == 0 ? setSelectedItem(2) : setSelectedItem(index - 1)
    }
    if (button === 'backward') {
      index == items.length - 1 ? setSelectedItem(0) : setSelectedItem(index + 1)
    }
  }
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
    <div id="airdrop">

      {/* Big screens */}
      <div
        className="md:flex hidden relative  flex-col space-y-24 justify-center bg-cover  bg-[url('/images/airdropbg.png')] items-center py-32"
      >
        <div className="bg-gradient-to-b from-[#20251a05] to-[#20251a]" style={{ zIndex: 0, position: 'absolute', width: '100%', height: '100%' }}></div>
        <div className="flex flex-col items-center justify-center" style={{ zIndex: 1, }}>
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

            <BlipNinja />

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
                  <div key={index} onMouseEnter={() => { setSelectedItem(index) }} onClick={() => { setSelectedItem(index) }} className="flex flex-col justify-start items-start">
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
              <a target="_blank" href="https://play.google.com/store/apps/details?id=com.everpumpstudio.pumpmilitia&hl=en_US&gl=US"><Image src={"/svg/play_store.svg"} width={185} height={56} alt="" /></a>

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


      {/* Small screens */}
      <div
        className="flex md:hidden flex-col space-y-24 justify-center relative bg-cover  bg-[url('/images/airdropbg.png')] items-center py-2 md:py-32"
      >
        <div className="bg-gradient-to-b from-[#20251a05] to-[#2C3322] h-full w-full bottom-0" style={{ zIndex: 0, position: 'absolute' }}></div>

        <div className="" style={{ zIndex: 1, }}>
          <div className="font-gameria text-center text-vivd-lime-green-10 text-[40px]">
            AIRDROP - MINE $PUMP
          </div>

          <div className="font-sans font-[700] p-3  text-vivd-lime-green-10 text-[14px] max-w-[800px] text-center">
            You can start mining $PUMP tokens on your mobile phones right away.
            We're opening the doors wide for every crypto enthusiast to join in on
            the fun and rewards.
          </div>
        </div>

        <div style={{ zIndex: 1, }} className="">
          <div className="flex flex-col text-start max-w-[518px]">
            <BlipNinja />
            {items.map((item: any, index: number) => {
              if (selectedItem == index) {
                return (
                  <div key={index} className="flex flex-col p-4 justify-start items-start">
                    <div
                      //  data-aos="zoom-in-up" data-aos-duration="2000"
                      className="mb-3">
                      <Image
                        src={item.image}
                        width={669}
                        height={446}
                        priority
                        alt=""
                      />
                    </div>

                    <div className="font-gameria text-vivd-lime-green-10 text-[24px]">
                      {item.title}
                    </div>

                    <div className="font-sans w-[276px] leading-loose text-vivd-lime-green-10 text-[14px]">
                      {item.sub_title}
                    </div>

                    <div className="border-b border-[#52594B] w-full pt-2"></div>
                    <div className="mt-8 flex items-center w-full justify-between gap-9">
                      <div className="flex flex-row border-1 gap-2">
                        <KeyboardArrowLeftRounded onClick={() => {
                          switchItems(index, 'forward')
                        }} className="hover:bg-[#A5E314] bg-[none] text-[#979B93] hover:text-dark border border-[#979B93]" style={{ fontSize: '50px', borderRadius: '50%' }} />
                        <KeyboardArrowRightRounded
                          onClick={() => {
                            switchItems(index, 'backward')
                          }}
                          className="hover:bg-[#A5E314] bg-[none] text-[#979B93] hover:text-dark border border-[#979B93]" style={{ fontSize: '50px', borderRadius: '50%' }} />
                      </div>
                      <div className="flex flex-row item-center justify-end gap-2">
                        <div className={`${selectedItem === 0 ? 'border-[#A5E314]' : 'border-[#757A6F]'} border-b-4 w-[25.5px]`}></div>
                        <div className={`${selectedItem === 1 ? 'border-[#A5E314]' : 'border-[#757A6F]'} border-b-4 w-[25.5px]`}></div>
                        <div className={`${selectedItem === 2 ? 'border-[#A5E314]' : 'border-[#757A6F]'} border-b-4 w-[25.5px]`}></div>
                      </div>
                    </div>
                  </div>
                )
              }
            }
            )
            }




            <div className="flex flex-row space-x-4 py-3 items-start justify-center">
              <a target="_blank" href="https://play.google.com/store/apps/details?id=com.everpumpstudio.pumpmilitia&hl=en_US&gl=US"><Image src={"/svg/play_store.svg"} width={185} height={56} alt="" /></a>

              <Image src={"/svg/app_store.svg"} width={153} height={45} alt="" />
            </div>
          </div>

        </div>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

      </div>
    </div>


  );
};

export default MinePump;
