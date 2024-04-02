import Image from "next/image"

const Preview = () => {
    return (
        <div className="h-[457px] bg-cover bg-no-repeat bg-[url('/images/preview.png')] flex flex-row items-center justify-center space-x-2">
          <div className='font-gameria text-vivd-lime-green-10 text-[24px]'>
                GAMEPLAY TRAILER
            </div>

            <Image
            className="pb-1"
             width={20}
             height={20}
             src={'/svg/play.svg'}
             alt=""
             priority />
            
        </div>
    )
}

export default Preview