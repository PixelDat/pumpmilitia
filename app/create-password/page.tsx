"use client"

import Image from "next/image"
import BlipNinja from "../components/blipninja/blip"
import { AppImages } from "@/lib/constants/app_images"
import { FormHelperText, } from "@mui/material"
import CustomInput from "../components/customInput/customInput"
import { ArrowForward, CloseRounded, LockRounded, MailOutlineRounded, ReportGmailerrorredRounded, VisibilityOffRounded, VisibilityRounded } from "@mui/icons-material"
import '../styles/navbar.css';
import { useEffect, useState } from "react"


export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(true)
    const [error, setError] = useState(false)
    const [password, setPassword] = useState('')

    useEffect(() => {
        isValidPassword(password) ? console.log('true') : console.log('false')
    }, [password])

    function isValidPassword(password) {
        const regex = /^(?=.*[A-Z])(?=.*[\W])(.{8,})$/;
        return regex.test(password);
    }

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
                        onChange={(e) => setPassword(e.target.value)}
                        error={error}
                        sx={{ marginBottom: '10px' }}
                        label="Password"
                        placeholder="Enter password"
                        type={showPassword ? "text" : "password"}
                        addOnStart={<LockRounded color="inherit" />}
                        addOnEnd={!showPassword ? <VisibilityRounded onClick={() => { setShowPassword(!showPassword) }} className="text-[#E1F6B1]" /> : <VisibilityOffRounded onClick={() => { setShowPassword(!showPassword) }} className="text-[#E1F6B1]" />}
                    />
                    {
                        error && <>
                            <hr className={`border-[#E2002B]  border mt-2`} />

                            <div className="flex flex-row items-center p-3 gap-3">
                                <CloseRounded className="bg-[#EC5572] text-[18px] rounded-full text-[black]" />
                                <p className="text-[12px] text-[#F9CCD5] text-start">Ops! you must have entered the wrong email address, please check and re-enter.</p>
                            </div>
                        </>
                    }
                    <CustomInput
                        active={true}
                        className=""
                        error={error}
                        sx={{ marginBottom: '10px' }}
                        label="Re-enter Password"
                        placeholder="Enter password"
                        type="password"
                        addOnStart={<LockRounded color="inherit" />}
                        addOnEnd={!showPassword ? <VisibilityRounded onClick={() => { setShowPassword(!showPassword) }} className="text-[#E1F6B1]" /> : <VisibilityOffRounded onClick={() => { setShowPassword(!showPassword) }} className="text-[#E1F6B1]" />}
                    />
                    <div className="my-5">
                        <button onClick={() => setError(!error)} className="navbar-auth-btn w-full">Set Password</button>
                    </div>

                </div>

            </div>
            <div className="hidden md:inline absolute right-[150px] bottom-[20px]">
                <BlipNinja />
            </div>
        </div>
    )
}
