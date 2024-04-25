'use-client'
import Image from "next/image"
import '../../styles/feature.css';
import React, { useEffect, useRef } from "react";
import AOS from 'aos';


const Features = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="flex flex-col space-y-12 items-center justify-center w-10/12 md:w-7/12 mx-auto text-center mt-24">
      <div className="flex flex-col space-y-4">
        <div className='font-gameria text-vivd-lime-green-10 text-[32px]'>
          FEATURES
        </div>

        <div className='font-sans text-vivd-lime-green-10 text-md'>
          Pump Militia is a blockchain-based game designed to merge thrilling gameplay with the innovative aspects of GameFi featuring competitive combat, strategic missions, and a vibrant community allowing players to earn real-world value through in-game achievements.
        </div>
      </div>


      <div className="flex flex-col  md:flex-row items-center gap-3 justify-center">

        <div
          data-aos="zoom-in-right"
          className=" feature-box relative">

          <Image
            src={'/images/feature1.png'}
            width={333}
            height={214}
            alt=""
            priority />

          <div className="absolute bottom-0 flex flex-row bg-black-leather-jacket-70 rounded-b-2xl bg-opacity-60 backdrop-blur-[10px] text-start">
            <div className="flex flex-col pl-3 py-2">
              <div className='font-gameria text-vivd-lime-green-10 text-xl'>
                BATTLE FOR REWARDS
              </div>
              <div className='font-sans text-vivd-lime-green-10 text-sm'>
                Play aganist players from around the the globe and earn rewards for your prowess
              </div>
            </div>

            <Image
              className="opacity-20"
              src={'/svg/vector.svg'}
              width={80}
              height={100}
              priority
              alt="" />
          </div>
        </div>

        <div
          data-aos="zoom-in-center"
          className="feature-box relative">
          <Image
            src={'/images/feature2.png'}
            width={333}
            height={214}
            alt=""
            priority />

          <div className="absolute bottom-0 flex flex-row bg-black-leather-jacket-70 rounded-b-2xl bg-opacity-60 backdrop-blur-[10px] text-start">
            <div className="flex flex-col pl-3 py-2">
              <div className='font-gameria text-vivd-lime-green-10 text-xl'>
                EARN WITH FRIENDS
              </div>
              <div className='font-sans text-vivd-lime-green-10 text-sm'>
                Rally your friends, strategize, and face off against other gangs in epic battles
              </div>
            </div>
            <Image
              className="opacity-20"
              src={'/svg/vector.svg'}
              width={80}
              height={100}
              priority
              alt="" />
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          className="feature-box relative">
          <Image
            src={'/images/feature3.png'}
            width={333}
            height={214}
            alt=""
            priority />

          <div className="absolute bottom-0 flex flex-row bg-black-leather-jacket-70 rounded-b-2xl bg-opacity-60 backdrop-blur-[10px] text-start">
            <div className="flex flex-col pl-3 py-2">
              <div className='font-gameria text-vivd-lime-green-10 text-xl'>
                OWN AND TRADE NFTS
              </div>
              <div className='font-sans text-vivd-lime-green-10 text-sm'>
                Own unique in-game assets with real world value. Trade, Sell and Lease
              </div>
            </div>
            <Image
              className="opacity-20"
              src={'/svg/vector.svg'}
              width={80}
              height={100}
              priority
              alt="" />
          </div>
        </div>

      </div>
      {/* <script>
      </script>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> */}
    </div>
  )
}

export default Features