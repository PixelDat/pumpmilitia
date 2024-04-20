"use client"

import Image from "next/image"
import BlipNinja from "../components/blipninja/blip"
import { AppImages } from "@/lib/constants/app_images"
import { FormHelperText, } from "@mui/material"
import CustomInput from "../components/customInput/customInput"
import { ArrowForward, CloseRounded, LockRounded, MailOutlineRounded, ReportGmailerrorredRounded, VisibilityOffRounded, VisibilityRounded } from "@mui/icons-material"
import '../styles/navbar.css';
import { useEffect, useState } from "react"
import { Helpers } from "@/lib/utils/helper"


export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(true)
    const [error, setError] = useState(false)
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<string[]>([]);
    console.log(password)
    useEffect(() => {
        let val = Helpers.isValidPassword(password)
        if (val !== true) {
            console.log(val);
            setErrors(val as string[]);
        } else {
            setErrors([]);
        }
    }, [password])

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
                        sx={{ marginBottom: '10px' }}
                        label="Password"
                        placeholder="Enter password"
                        type={showPassword ? "text" : "password"}
                        addOnStart={<LockRounded color="inherit" />}
                        addOnEnd={!showPassword ? <VisibilityRounded onClick={() => { setShowPassword(!showPassword) }} className="text-[#E1F6B1]" /> : <VisibilityOffRounded onClick={() => { setShowPassword(!showPassword) }} className="text-[#E1F6B1]" />}
                    />
                    {
                        Array.isArray(errors) && <>
                            <div className="text-[10px] flex items-start justify-between text-[#B0B0B0] px-5 my-3">
                                <div>
                                    <li className={`${errors.includes("min") && password !== '' ? 'text-[#ff0000]' : 'text-[#E1F6B1]'}`} >Password, must be 8 character long.</li>
                                    <li className={`${errors.includes("ucl") && password !== '' ? 'text-[#ff0000]' : 'text-[#E1F6B1]'}`} >Some uppercase letter.</li>
                                    <li className={`${errors.includes("sym") && password !== '' ? 'text-[#ff0000]' : 'text-[#E1F6B1]'}`} >One symbol (!@%$*).</li>
                                </div>
                                <div>
                                    <div className="flex flex-row item-center justify-center gap-2">
                                        <div className={`${errors.length <= 3 && password == '' ? 'border-[#B0B0B0]' : errors.length == 0 && password != '' ? 'border-[#00ff00]' : 'border-[#ff0000]'} border-b-2 h-2 w-[25.5px]`}></div>
                                        {/* <div className={`${errors.length <= 2 ? 'border-[#ff0000]' : 'border-[#b0b0b0]'} border-b-2 w-[25.5px]`}></div> */}
                                        {/* <div className={`${errors.length <= 1 ? 'border-[#ff0000]' : 'border-[#b0b0b0]'} border-b-2 w-[25.5px]`}></div> */}
                                        {/* <div className={`${errors.length === 0 ? 'border-[#ff0000]' : 'border-[#b0b0b0]'} border-b-2 w-[25.5px]`}></div> */}
                                        <div>{errors.length == 0 || password == '' ? <span className="text-[#B0B0B0]">Default</span> : errors.length == 3 ? <span className="text-[#ff0000]">Weak</span> : <span className="text-[#ff0000]">Strong</span>}</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    <CustomInput
                        disabled={errors.length == 0 ? false : true}
                        className=""
                        sx={{ marginBottom: '10px' }}
                        label="Re-enter Password"
                        placeholder="Enter password"
                        type="password"
                        addOnStart={<LockRounded color="inherit" />}
                        addOnEnd={!showPassword ? <VisibilityRounded onClick={() => { setShowPassword(!showPassword) }} className="text-[#E1F6B1]" /> : <VisibilityOffRounded onClick={() => { setShowPassword(!showPassword) }} className="text-[#E1F6B1]" />}
                    />
                    <div className={`${errors.length == 0 ? "my-5" : "blur-[2px] my-5"}`}>
                        <button disabled onClick={() => { }} className="navbar-auth-btn  w-full">Set Password</button>
                    </div>

                </div>

            </div>
            <div className="hidden md:inline absolute right-[150px] bottom-[20px]">
                <BlipNinja />
            </div>
        </div>
    )
}
