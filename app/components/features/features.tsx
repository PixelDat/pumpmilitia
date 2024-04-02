import Image from "next/image"

const Features = () => {
  return (
    <div className="flex flex-col space-y-12 items-center justify-center w-7/12 mx-auto text-center mt-24">
      <div className="flex flex-col space-y-4">
        <div className='font-gameria text-vivd-lime-green-10 text-[32px]'>
          FEATURES
        </div>

        <div className='font-sans text-vivd-lime-green-10 text-md'>
          Pump Militia is a blockchain-based game designed to merge thrilling gameplay with the innovative aspects of GameFi featuring competitive combat, strategic missions, and a vibrant community allowing players to earn real-world value through in-game achievements.
        </div>
      </div>


      <div className="flex flex-row space-x-8 items-center justify-center">
        <div className="w-[300px] h-[300px] relative">
          <Image
            src={'/svg/feature_1.svg'}
            width={300}
            height={280}
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
            src={'/svg/vector.svg'}
            width={60}
            height={60}
            priority
            alt="" />
          </div>
        </div>

        <div className="w-[300px] h-[300px] relative">
          <Image
            src={'/svg/feature_2.svg'}
            width={300}
            height={280}
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
            src={'/svg/vector.svg'}
            width={60}
            height={60}
            priority
            alt="" />
          </div>
        </div>

        <div className="w-[300px] h-[300px] relative">
          <Image
            src={'/svg/feature_3.svg'}
            width={300}
            height={280}
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
            src={'/svg/vector.svg'}
            width={60}
            height={60}
            priority
            alt="" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Features