import { dashboardfaqs, landingfaqs, presalefaqs } from "@/lib/constants/app_images"
import { Add, Remove } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import { usePathname } from "next/navigation"
import { useState } from "react"

const Faqs = () => {
    let path = usePathname()
    const [selectedFaq, setSelectedFaq] = useState(0)
    const faqs = path == '/' ? landingfaqs : path == '/pre-sale' ? presalefaqs : path == '/dashboard' ? dashboardfaqs : landingfaqs;
    return (
        <div className="flex flex-col md:w-11/12 m-auto md:flex-row p-4 justify-center items-start md:space-x-24">
            <div className="">
                <div className="flex flex-col space-y-4">
                    <div className='font-gameria text-[#89BD11] text-[32px]'>
                        FAQs
                    </div>

                    <div className='font-gameria text-vivd-lime-green-10 text-[32px] w-7/12 md:w-[300px]'>
                        Find your answers here
                    </div>

                    <div className="space-y-5 hidden md:inline">
                        <div className='font-sans text-vivd-lime-green-10 text-sm md:w-[400px]'>
                            If there are any questions not answered here, please join the Discord community to request for further assistance.
                        </div>

                        <button className="border buttonTracker border-[#89BD11] rounded-xl px-6 py-3 w-fit">
                            <a href="https://discord.com/invite/tvZGAP4Qt8" target="_blank" className='font-sans buttonTracker text-vivd-lime-green-10 text-sm'>
                                Join Discord Community
                            </a>
                        </button>
                    </div>

                </div>
            </div>

            <div className="w-full my-5">
                {faqs.map((item: any, index: number) => {
                    return (
                        <Accordion
                            key={index}
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
                                <Typography className='font-kanit text-vivd-lime-green-10 text-[16px] font-bold md:text-[32px]'>{item.title}</Typography>
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


            <div className="space-y-5 md:hidden">
                <div className='font-sans text-vivd-lime-green-10 text-sm md:w-[400px]'>
                    If there are any questions not answered here, please join the Discord community to request for further assistance.
                </div>

                <button className="border buttonTracker border-[#89BD11] rounded-xl px-6 py-3 w-fit">
                    <a href="https://discord.com/invite/tvZGAP4Qt8" target="_blank" className='font-sans buttonTracker text-vivd-lime-green-10 text-sm'>
                        Join Discord Community
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Faqs