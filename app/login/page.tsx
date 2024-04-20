"use client"

import Image from "next/image"
import BlipNinja from "../components/blipninja/blip"
import { AppImages } from "@/lib/constants/app_images"
import { FormHelperText, } from "@mui/material"
import CustomInput from "../components/customInput/customInput"
import { ArrowForward, MailOutlineRounded } from "@mui/icons-material"
import '../styles/navbar.css';
import { useState } from "react"


export default function LoginPage() {
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
                        Continue to
                    </div>
                    <div className='font-gameria  text-center  text-vivd-lime-green-10 text-[40px]'>
                        PUMP MILLITIA
                    </div>
                    <p className="text-center text-[14px] text-vivd-lime-green-10">The ultimate rewards arena.</p>
                </div>
                {/* email address input */}

                <div className="items-center justify-center">
                    <CustomInput
                        className=""
                        error={true}
                        sx={{ marginBottom: '10px' }}
                        label="Email Address"
                        placeholder="Enter email address"
                        type="email"
                        addOnStart={<MailOutlineRounded color="inherit" />}
                        addOnEnd={<ArrowForward />}
                    />

                    <hr className={`border-[#EC5572] mt-5`} />

                    <div className="my-5">
                        <button className="navbar-auth-btn w-full">Get In</button>
                    </div>

                    <FormHelperText className="text-[#898989] w-7/12 m-auto text-center font-normal">Try either of this below, only when “email address” fails to get you in.</FormHelperText>

                    <p className="text-[#EDF9D0] text-center mt-5 font-light">By continuing, you agree to our <span className="font-bold text-[#A5E314]">Terms of service,</span> and acknowledge you have understood our <span className="font-bold text-[#A5E314]">Privacy Policy</span> and <span className="font-bold text-[#A5E314]">Collection Statement.</span></p>
                </div>
                {/* get in button */}
                {/* text after that */}
                {/* google and X */}
                {/* terms and conditions */}
                {/* Ninja */}


            </div>
            <div className="absolute right-[150px] bottom-[20px]">
                <BlipNinja />
            </div>
        </div>
    )
}
