"use client"

import Image from "next/image"
import BlipNinja from "../components/blipninja/blip"
import { AppImages } from "@/lib/constants/app_images"
import { FormHelperText, } from "@mui/material"
import CustomInput from "../components/customInput/customInput"
import { ArrowForward, Check, CheckCircle, CloseRounded, MailOutlineRounded, ReportGmailerrorredRounded } from "@mui/icons-material"
import '../styles/navbar.css';
import { useEffect, useState } from "react"
import OtpComp from "../components/otpComp/otpComp"
import axios from "axios"
const Cookies = require('js-cookie');




export default function VerifyEmail() {
    let encrypt = Cookies.get('encrypt');
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const [otp, setOtp] = useState('');
    console.log(otp);

    useEffect(() => {
        setTimeout(() => {

        }, 3000)
    }, [])

    useEffect(() => {
        if (otp.length == 6) {
            let verify_otp = async () => {
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'https://evp-user-service-cea2e4kz5q-uc.a.run.app/get-user-details',
                    headers: {
                        'Authorization': `${encrypt}`
                    }
                };
                try {
                    const response = await axios.request(config);
                    console.log(response);
                } catch (error: any) {
                    if (error.response && error.response.status === 400) {
                    } else {
                        console.log(`An error occurred: ${error.message}`);
                    }
                }

            }

            verify_otp()
        }
    }, [otp])


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

                <div className="mt-5">
                    <OtpComp setOtp={setOtp} error={error} success={success} />
                </div>


                <div className="items-center justify-center pt-4">

                    {
                        error && <>
                            <hr className={`border-[#E2002B]  border mt-2`} />
                            <div className="flex flex-row items-center p-3 gap-3">
                                <CloseRounded className="bg-[#EC5572] text-[18px] rounded-full text-[black]" />
                                <p className="text-[12px] text-[#F9CCD5] text-start">Ops! you must have entered the wrong code, please check your email and try again.</p>
                            </div>
                        </>
                    }

                    {
                        success && <>
                            <hr className={`border-[#57DE2A]  border mt-2`} />

                            <div className="flex flex-row items-center p-3 gap-3">
                                <Check className="bg-[#57DE2A] text-[18px] rounded-full text-[black]" />
                                <p className="text-[12px] text-[#D7F7CC] text-start">Yayy! that was successful, just one more step to authenticating your account.</p>
                            </div>

                            <div className="mt-10">
                                <button onClick={() => {
                                    setError(true)
                                    setSuccess(false);
                                }} className="navbar-auth-btn w-full">Proceed</button>
                            </div>

                        </>
                    }
                    {
                        loading && <>
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
