import Image from "next/image";

const MinePump = () => {
  return (
    <div
      className="flex flex-col space-y-24 justify-center items-center mt-32"
      id="airdrop"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="font-gameria text-vivd-lime-green-10 text-[32px]">
          AIRDROP - MINE $PUMP
        </div>

        <div className="font-sans text-vivd-lime-green-10 text-[14px] max-w-[800px] text-center">
          You can start mining $PUMP tokens on your mobile phones right away.
          We're opening the doors wide for every crypto enthusiast to join in on
          the fun and rewards.
        </div>
      </div>

      <div className="flex flex-row justify-center items-start space-x-24">
        <div className="flex flex-col space-y-8 text-start max-w-[518px]">
          <Image
            src={"/svg/icon_logo_2.svg"}
            width={69}
            height={69}
            alt=""
            priority
          />

          <div className="flex flex-col justify-start items-start">
            <div className="font-gameria text-vivd-lime-green-10 text-[32px]">
              DONWLOAD PUMP MILITIA
            </div>

            <div className="font-sans text-vivd-lime-green-10 text-[14px]">
              Download the Pump Militia game from the Play Store and App Store,
              Install and Create an account and start this epic journey.
            </div>

            <div className="border-b border-[#52594B] w-full pt-2"></div>
          </div>

          <div className="flex flex-col justify-start items-start">
            <div className="font-gameria text-[#898989] text-[32px]">
              CLAIM YOUR $PUMP TOKENS
            </div>

            <div className="font-sans text-[#898989] text-[14px]">
              Tap the claim button to receive your $PUMP tokens. Remember, you
              can do this twice a day. (every 12 hours!). It's simple.
            </div>

            <div className="border-b border-[#898989] w-full pt-2"></div>
          </div>

          <div className="flex flex-col justify-start items-start">
            <div className="font-gameria  text-[32px] text-[#898989]">
              EARN MORE REWARDS
            </div>

            <div className="font-sans text-[#898989] text-[14px]">
              Maximize your earnings by playing the game, completing daily and
              special quests and inviting your friends to mine
            </div>

            <div className="border-b border-[#898989] w-full pt-2"></div>
          </div>

          <div className="flex flex-row space-x-4 items-start justify-start">
            <Image src={"/svg/play_store.svg"} width={185} height={56} alt="" />

            <Image src={"/svg/app_store.svg"} width={185} height={56} alt="" />
          </div>
        </div>

        <Image
          src={"/svg/mine_img.svg"}
          width={436}
          height={477}
          priority
          alt=""
        />
      </div>
    </div>
  );
};

export default MinePump;
