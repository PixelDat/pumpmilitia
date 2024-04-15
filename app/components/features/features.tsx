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

        <div className="flex flex-col pl-3 py-2">
          <div className='font-gameria text-vivd-lime-green-10 text-xl'>
            BATTLE FOR REWARDS
          </div>
          <div className='font-sans text-vivd-lime-green-10 text-sm'>
            Play against players from around the globe and earn rewards for your prowess
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  w-[100vw] mx-auto gap-[3rem] items-center h-auto ">
        <div>
          <h1 className='w-[468px] flex flex-row space-x-8 items-center justify-center text-[32px] font-normal text-[#EDF9D0] text-left' style={{ fontFamily: 'GAMERIA' }}>onboarding millions, redefining gaming</h1>
          <p className='w-[508px] flex flex-row space-x-8 items-center justify-center text-[14px] text-[#EDF9D0] font-medium text-left' style={{ fontFamily: 'Kanit' }}>Pump Militia is on a mission to bridge the gap between traditional gaming (Web2) and the decentralised future of gaming (Web3), aiming to onboard the next million players into the world of blockchain gaming</p>
          <Image
            src={'/svg/statistics_1.svg'}
            width={300}
            height={300}
            alt="Statistics"
            priority
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1">
          <div>
            <h1></h1>
            <p></p>
          </div>
         
          <div>
            <h1></h1>
            <p></p>
          </div>

          <div>
            <h1></h1>
            <p></p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Features