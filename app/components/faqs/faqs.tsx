import Image from "next/image"

const Faqs = () => {
    return (
        <div className="flex flex-row justify-center items-start space-x-24">
            <div className="flex-col space-y-4">
                <div className="flex flex-col space-y-4">
                    <div className='font-gameria text-[#89BD11] text-[32px]'>
                        FAQs
                    </div>

                    <div className='font-sans text-vivd-lime-green-10 text-5xl w-[300px]'>
                        Find your answers here
                    </div>

                    <div className='font-sans text-vivd-lime-green-10 text-sm w-[400px]'>
                        If there are any questions not answered here, please join the Discord community to request for further assistance.
                    </div>

                    <button className="border border-[#89BD11] rounded-xl px-6 py-3 w-fit">
                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                            Join Discord Community
                        </div>
                    </button>
                </div>
            </div>

            <div className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-4 items-start">
                    <div className="flex flex-row justify-between items-center w-[705px]">
                    <div className='font-sans text-vivd-lime-green-10 text-3xl'>
                    Lorem ipsum dolor sit amet
                    </div>

                    <Image
                    src={'/svg/minus.svg'}
                    width={24}
                    height={24}
                    priority
                    alt="" />
                    </div>

                    <div className='font-sans text-vivd-lime-green-10 text-sm w-[704px]'>
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum                     </div>

                    <div className="border-b border-[#52594B] w-full"></div>
                </div>

                <div className="flex flex-col space-y-4 items-start">
                    <div className="flex flex-row justify-between items-center w-[705px]">
                    <div className='font-sans text-vivd-lime-green-10 text-3xl'>
                    Lorem ipsum dolor sit amet 
                                        </div>

                    <Image
                    src={'/svg/add.svg'}
                    width={24}
                    height={24}
                    priority
                    alt="" />
                    </div>

                    <div className="border-b border-[#52594B] w-full"></div>
                </div>

                <div className="flex flex-col space-y-4 items-start">
                    <div className="flex flex-row justify-between items-center w-[705px]">
                    <div className='font-sans text-vivd-lime-green-10 text-3xl'>
                    Lorem ipsum dolor sit amet 
                                        </div>

                    <Image
                    src={'/svg/add.svg'}
                    width={24}
                    height={24}
                    priority
                    alt="" />
                    </div>

                    <div className="border-b border-[#52594B] w-full"></div>
                </div>

                <div className="flex flex-col space-y-4 items-start">
                    <div className="flex flex-row justify-between items-center w-[705px]">
                    <div className='font-sans text-vivd-lime-green-10 text-3xl'>
                    Lorem ipsum dolor sit amet 
                                        </div>

                    <Image
                    src={'/svg/add.svg'}
                    width={24}
                    height={24}
                    priority
                    alt="" />
                    </div>

                    <div className="border-b border-[#52594B] w-full"></div>
                </div>
            </div>
        </div>
    )
}

export default Faqs