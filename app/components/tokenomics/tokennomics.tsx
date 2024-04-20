'use client'
import Image from "next/image"
import { useState } from "react"
import '../../styles/token.css';

const Tokenomics = () => {
    const [selectedFaq, setSelectedFaq] = useState(0)
    const colors = ['#6FFEFE', '#FF00D6', '#A5E314', '#FDCE00', '#E72A4E', '#E0F7AB', '#5062FF', '#36D800']
    const tokennomics = [
        {
            border_color: 'border-[#6FFEFE]',
            text_color: 'text-[#6FFEFE]',
            percent: 5,
            width: 'md:w-11/12',

            token_amount: 100000,
            title: "Seed Round",
            text: '20% TGE, 10% unlocked each month after',
        },
        {
            border_color: 'border-[#ff00d6]',
            text_color: 'text-[#ff00d6]',
            percent: 15,
            width: 'md:w-8/12',

            token_amount: 100000,
            title: "Seed Round",
            text: '20% TGE, 10% unlocked each month after',
        },
        {
            border_color: 'border-[#a5e314]',
            text_color: 'text-[#a5e314]',
            percent: 50,
            width: 'md:w-7/12',
            token_amount: 100000,
            title: "Seed Round",
            text: '20% TGE, 10% unlocked each month after',
        },
        {
            border_color: 'border-[#fdce00]',
            text_color: 'text-[#fdce00]',
            percent: 5,
            width: 'md:w-10/12',
            token_amount: 100000,
            title: "Seed Round",
            text: '20% TGE, 10% unlocked each month after',
        },
        {
            border_color: 'border-[#e72a4e]',
            text_color: 'text-[#e72a4e]',
            percent: 5,
            width: 'md:w-9/12',

            token_amount: 100000,
            title: "Seed Round",
            text: '20% TGE, 10% unlocked each month after',
        },
        {
            border_color: 'border-[#e0f7ab]',
            text_color: 'text-[#e0f7ab]',
            percent: 10,
            width: 'md:w-11/12',

            token_amount: 100000,
            title: "Seed Round",
            text: '20% TGE, 10% unlocked each month after',
        },
        {
            border_color: 'border-[#5062ff]',
            text_color: 'text-[#5062ff]',
            percent: 5,
            width: 'md:w-7/12',

            token_amount: 100000,
            title: "Seed Round",
            text: '20% TGE, 10% unlocked each month after',
        },
        {
            border_color: 'border-[#36d800]',
            text_color: 'text-[#36d800]',
            percent: 5,
            width: 'md:w-11/12',

            token_amount: 10000000,
            title: "Seed Round",
            text: '20% TGE, 10% unlocked each month after',
        },


    ]
    return (
        <div id="tokenomics" className="p-2 md:p-0 md:w-10/12 m-auto my-32">
            <div className="boderToken relative w-full h-[500px] md:h-[280px]">
                <div className="flex flex-col md:w-10/12  md:px-10 relative space-y-4">
                    <div className='font-gameria w-1/12 leading-10 text-[#EDF9D0] text-[56px]'>
                        $pump
                        tokenomics!
                    </div>

                    <div className='font-kanit  font-bold text-vivd-lime-green-10 text-[32px]'>
                        The real value of PUMP
                    </div>

                    <div className='font-kanit text-vivd-lime-green-10 text-[16px]'>
                        The $PUMP token, as the native cryptocurrency of Pump Militia, is designed to serve multiple utilities within the game's ecosystem, enhancing both the gameplay experience and the economic model. By integrating $PUMP into various aspects of the game, Pump Militia ensures that the token is not only valuable within the game's environment but also supports a broader economy that benefits players, developers, and stakeholders. Here are the key utilities of the $PUMP token.
                    </div>
                </div>
            </div>

            <div className="mt-20  md:flex flex-row justify-between items-center">
                <div className="lg:w-6/12 flex justify-center">
                    <div className="mb-20 md:mb-0">
                        <Image
                            src="/images/tokenomics.png"
                            alt="tokenomics"
                            width={704}
                            height={535}
                            priority
                        />
                        {/* <div className="border-dashed border h-[300px] w-[300px] rounded-full border-[#6E970D] p-10">
                            <div className="relative rounded-full border-dashed  flex flex-row text-center justify-center item-center bg-[#10130D66] h-[227px] w-[227px]">
                                <div className="top-[40%] absolute">
                                    <p className="text-white">Total supply</p>
                                    <p className="text-[#898989]">{Number(10000000000).toLocaleString()}</p>
                                </div>

                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="px-4 flex flex-col lg:w-6/12 justify-end">
                    {tokennomics.map((item: any, index: number) => {
                        let randWidth = Math.floor(Math.random() * 10) + 1;
                        let width = `w-${randWidth}/12`;
                        return (
                            <div key={`${index}-${item.color}`} className="justify-end flex">
                                <div className={`flex flex-row justify-between border-s-8 w-full leading-loose text-white bg-[#10130D66] ${item.width}  ${item.border_color}  rounded-lg mb-3 px-4 py-3`}>
                                    <div>
                                        <p className="text-[14px]" ><span className={`${item.text_color}`}>{item.percent}% </span>{item.title}</p>
                                        <p className="text-[10px] md:text-[12px] text-[#898989]">{item.text}</p>
                                    </div>
                                    <div className="text-end">
                                        <p className="text-[14px] ">{'tokens'}</p>
                                        <p className="text-[10px] md:text-[12px] text-[#898989]">{Number(item.token_amount).toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Tokenomics