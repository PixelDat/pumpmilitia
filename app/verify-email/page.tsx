"use client"

import Image from "next/image"
import BlipNinja from "../components/blipninja/blip"
import { AppImages } from "@/lib/constants/app_images"
import { FormHelperText, } from "@mui/material"
import CustomInput from "../components/customInput/customInput"
import { ArrowForward, CloseRounded, MailOutlineRounded, ReportGmailerrorredRounded } from "@mui/icons-material"
import '../styles/navbar.css';
import { useState } from "react"


export default function VerifyEmail() {
    const [error, setError] = useState(false)
    return (
        <div style={{ position: 'fixed', width: '100%', height: '100vh' }} className="flex justify-center items-center text-white bg-[#20251A]">
            <div className="bg-cover  opacity-30 bg-dark bg-[url('/images/auth_bg.png')] h-[627px] top-1/4 absolute w-full">
            </div>
            <div className="z-[20] p-2 md:p-0 w-[371px]">
                {/* image */}
                <div className="items-center mb-5">
                    <div className=" flex flex-row  justify-center items-center">
                        <Image
                            className="object-center"
                            src={AppImages.navBarLogo}
                            width={95}
                            height={95}
                            alt=""
                            priority />
                    </div>
                    <div className='font-kanit text-center text-vivd-lime-green-10 text-[36px]'>
                        Confirm your email
                    </div>
                    <p className="text-center text-[14px] text-vivd-lime-green-10">Enter the code we sent to allineedisagame@gmail.com</p>
                </div>
                <div className="flex flex-row gap-5 justify-center">
                    <p className=" text-[#A5E314] border-e-2 border-[#52594B] pe-5">Resend Code in <span className="text-[#52594B]">60s</span></p>
                    <p className=" text-[#A5E314]">Change Email</p>

                </div>


                <div className="items-center justify-center">

                    {
                        error && <>
                            <hr className={`border-[#E2002B]  border mt-2`} />

                            <div className="flex flex-row items-center p-3 gap-3">
                                <CloseRounded className="bg-[#EC5572] text-[18px] rounded-full text-[black]" />
                                <p className="text-[12px] text-[#F9CCD5] text-start">Ops! you must have entered the wrong code, please check your email and click input box to try again.</p>
                            </div>
                        </>
                    }
                </div>


            </div>
            <div className="hidden md:inline absolute right-[150px] bottom-[20px]">
                <BlipNinja />
            </div>
        </div>
    )
}
