"use client"

import Image from "next/image"
import BlipNinja from "../../components/blipninja/blip"
import { AppImages } from "@/lib/constants/app_images"
import { FormHelperText, } from "@mui/material"
import CustomInput from "../../components/customInput/customInput"
import { ArrowForward, CloseRounded, LockRounded, MailOutlineRounded, ReportGmailerrorredRounded, VisibilityOffRounded, VisibilityRounded } from "@mui/icons-material"
import '../../styles/navbar.css';
import { useEffect, useState } from "react"
import { Helpers } from "@/lib/utils/helper"

export async function getServerSideProps(context: any) {
        const { query } = context;
    
        // Now you can use query parameters
        const { oobCode } = query;
    
        // Pass the query parameters to your component as props
        return {
            props: { oobCode }, // will be passed to the page component as props
        };
    }

export default function LoginPage({ oobCode }: { oobCode: any }) {
    const [showPassword, setShowPassword] = useState(true)
    const [error, setError] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    console.log("OOB Code:", oobCode);

    const [errors, setErrors] = useState<string[]>([]);
    useEffect(() => {
        let val = Helpers.isValidPassword(password)
        if (val !== true) {
            setErrors(val as string[]);
        } else {
            setErrors([]);
        }
        if (password == confirmPassword) {
            setError(false)
        } else {
            setError(true)
        }

    }, [password, confirmPassword])

    return (
        <div style={{ position: 'fixed', width: '100%', height: '100vh' }} className="flex justify-center items-center      text-white bg-[#20251A]">
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
                    <p className="text-center text-[14px] text-vivd-lime-green-10">Enter a password, to secure your account and carryout transaction</p>
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
                                <div className="flex flex-row gap-2 justify-center">
                                    <div className="flex flex-row item-center justify-center gap-2">
                                        <div className={`${errors.length === 0 && password !== '' ? 'border-[#008000]' : errors.length === 2 && password.length >= 8 ? 'border-[#FFD700]' : errors.length > 2 && password !== '' ? 'border-[#FF0000]' : 'border-[#B0B0B0]'} border-b-2 h-2 w-[20px]`}>
                                        </div>
                                        <div className={`${errors.length === 0 && password !== '' ? 'border-[#008000]' : errors.length === 2 && password.length >= 8 ? 'border-[#FFD700]' : errors.length > 2 && password !== '' ? 'border-[#FF0000]' : 'border-[#B0B0B0]'} border-b-2 h-2 w-[20px]`}></div>
                                        <div className={`${errors.length === 0 && password !== '' ? 'border-[#008000]' : errors.length === 2 && password.length >= 8 ? 'border-[#FFD700]' : errors.length > 2 && password !== '' ? 'border-[#FF0000]' : 'border-[#B0B0B0]'} border-b-2 h-2 w-[20px]`}></div>
                                        <div className={`${errors.length === 0 && password !== '' ? 'border-[#008000]' : errors.length === 2 && password.length >= 8 ? 'border-[#FFD700]' : errors.length > 2 && password !== '' ? 'border-[#FF0000]' : 'border-[#B0B0B0]'} border-b-2 h-2 w-[20px]`}></div>
                                    </div>

                                    <div>
                                        {errors.length === 0 && password !== '' ? (
                                            <span className="text-[#008000]">Strong</span>
                                        ) : errors.length === 2 && password.length >= 8 ? (
                                            <span className="text-[#FFD700]">Medium</span>
                                        ) : errors.length > 2 && password !== '' ? (
                                            <span className="text-[#FF0000]">Weak</span>
                                        ) : (
                                            <span className="text-[#B0B0B0]">Default</span>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </>
                    }
                    <CustomInput
                        disabled={errors.length == 0 ? false : true}
                        className=""
                        error={error}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        sx={{ marginBottom: '10px' }}
                        label="Re-enter Password"
                        placeholder="Enter password"
                        type={showPassword ? "text" : "password"}
                        addOnStart={<LockRounded color="inherit" />}
                        addOnEnd={!showPassword ? <VisibilityRounded onClick={() => { setShowPassword(!showPassword) }} className="text-[#E1F6B1]" /> : <VisibilityOffRounded onClick={() => { setShowPassword(!showPassword) }} className="text-[#E1F6B1]" />}
                    />
                    {
                        error && confirmPassword.length > 0 && <>
                            <hr className={`border-[#E2002B]  border mt-2`} />

                            <div className="flex flex-row items-center p-3 gap-3">
                                <CloseRounded className="bg-[#EC5572] text-[18px] rounded-full text-[black]" />
                                <p className="text-[12px] text-[#F9CCD5] text-start">Password do not match.</p>
                            </div>
                        </>
                    }
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
