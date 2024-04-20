"use client"

import Image from "next/image"
import BlipNinja from "../components/blipninja/blip"
import { AppImages } from "@/lib/constants/app_images"
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material"
import CustomInput from "../components/customInput/customInput"
import { ArrowForward, Mail, MailOutlineRounded } from "@mui/icons-material"

export default function LoginPage() {
    return (
        <div style={{ position: 'fixed', width: '100%', height: '100vh' }} className="flex justify-center items-center text-white bg-[#20251A]">
            <div className="bg-cover opacity-20 bg-dark bg-[url('/images/auth_bg.png')] h-[627px] top-1/3 absolute w-full">
            </div>
            <div>
                {/* image */}
                <div className="items-center">
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
                    <div className='font-gameria text-center md:text-start text-vivd-lime-green-10 text-[40px]'>
                        PUMP MILLITIA
                    </div>
                    <p className="text-center text-[14px] text-vivd-lime-green-10">The ultimate rewards arena.</p>
                </div>
                {/* email address input */}

                <div className="items-center justify-center">
                    <CustomInput
                        className=""
                        sx=""
                        placeholder="Enter email address"
                        type="email"
                        addOnStart={<MailOutlineRounded />}
                        addOnEnd={<ArrowForward />}
                    />
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
