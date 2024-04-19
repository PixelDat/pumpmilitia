import { Add, Remove } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import { useState } from "react"

const Faqs = () => {
    const [selectedFaq, setSelectedFaq] = useState(0)
    const faqs = [
        {
            title: "What's $PUMP airdrop?",
            text: "The Pump Militia Airdrop is all about rewarding early supporters and players by giving them ways to mine $PUMP from their mobile phones before TGE. It's designed to reward early members, engage and incentivise users while driving adoption within the community."
        },
        {
            title: 'Who is eligible to mine $PUMP?',
            text: "The Pump Militia Airdrop is all about rewarding early supporters and players by giving them ways to mine $PUMP from their mobile phones before TGE. It's designed to reward early members, engage and incentivise users while driving adoption within the community."
        },
        {
            title: 'When can I withdraw my minded $PUMP?',
            text: "The Pump Militia Airdrop is all about rewarding early supporters and players by giving them ways to mine $PUMP from their mobile phones before TGE. It's designed to reward early members, engage and incentivise users while driving adoption within the community."
        },
        {
            title: 'What Blockchain Network is used?',
            text: "The Pump Militia Airdrop is all about rewarding early supporters and players by giving them ways to mine $PUMP from their mobile phones before TGE. It's designed to reward early members, engage and incentivise users while driving adoption within the community."
        },

    ]
    return (
        <div className="flex flex-col md:w-11/12 m-auto md:flex-row p-4 justify-center items-start space-x-24">
            <div className="">
                <div className="flex flex-col space-y-4">
                    <div className='font-gameria text-[#89BD11] text-[32px]'>
                        FAQs
                    </div>

                    <div className='font-gameria text-vivd-lime-green-10 text-5xl md:w-[300px]'>
                        Find your answers here
                    </div>

                    <div className='font-sans text-vivd-lime-green-10 text-sm md:w-[400px]'>
                        If there are any questions not answered here, please join the Discord community to request for further assistance.
                    </div>

                    <button className="border border-[#89BD11] rounded-xl px-6 py-3 w-fit">
                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                            Join Discord Community
                        </div>
                    </button>
                </div>
            </div>

            <div className="">
                {faqs.map((item: any, index: number) => {
                    return (
                        <Accordion
                            onChange={() => { setSelectedFaq(index) }}
                            expanded={selectedFaq == index ? true : false}
                            defaultExpanded={index == 0 ? true : false}
                            sx={{ background: 'transparent', boxShadow: '0px' }}
                            className="border-b border-[#52594B]"
                        >
                            <AccordionSummary
                                sx={{ background: 'transparent' }}
                                expandIcon={selectedFaq == index ? <Remove className="text-[#EDF9D0]" /> : <Add className="text-[#EDF9D0]" />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography className='font-kanit text-vivd-lime-green-10 text-[32px]'>{item.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography
                                    className="text-[#EDF9D0]"
                                >
                                    {item.text}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            </div>
        </div>
    )
}

export default Faqs