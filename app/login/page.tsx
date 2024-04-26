"use client"

import Image from "next/image"
import BlipNinja from "../components/blipninja/blip"
import { AppImages } from "@/lib/constants/app_images"
import { Avatar, AvatarGroup, CircularProgress, FormHelperText, } from "@mui/material"
import CustomInput from "../components/customInput/customInput"
import { ArrowForward, CloseRounded, LockRounded, MailOutlineRounded, ReportGmailerrorredRounded, VisibilityOffRounded, VisibilityRounded } from "@mui/icons-material"
import '../styles/navbar.css';
import { useEffect, useState } from "react"
import { request } from "@/lib/utils/helper"
import axios from "axios"


export default function LoginPage() {
    const [error, setError] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setloading] = useState(false)


    const [resMessage, setResMessage] = useState('')
    const [errMessage, setErrMessage] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [emailExists, setEmailExists] = useState(false)

    const checkEmailExists = async () => {
        setloading(true)
        if (email == '') {
            setError(true)
            setErrMessage('Email field is empty')
            setloading(false)
            return
        }
        let params = {
            email: email
        }
        let url = 'https://evp-login-signup-service-cea2e4kz5q-uc.a.run.app/signup';
        try {
            const response = await axios.post(url, params);
            setError(true)
            setloading(false)
        } catch (error: any) {
            if (error.response && error.response.status === 400) {
                setError(false)
                setEmailExists(true)
                setloading(false)
            } else {
                console.log(`An error occurred: ${error.message}`);
            }
        }
    }
    const HandleLogin = async () => {
        if (password == '') {
            setError(true)
            setErrMessage('Password field is empty')
            setloading(false)
            return
        }
        let params = {
            email: email,
            password: password
        }
        let url = 'https://evp-login-signup-service-cea2e4kz5q-uc.a.run.app/login';
        try {
            const response = await axios.post(url, params);
            console.log(response.status)
        } catch (error: any) {
            if (error.response && error.response.status === 400) {
                setError(true)
                setErrMessage(error.response.data.message)
                console.log(`${error.response.data.message}`);
            } else {
                console.log(`An error occurred: ${error.message}`);
            }
        }

    }

    return (
        <div style={{ position: 'fixed', width: '100%', height: '100vh' }} className="flex justify-center items-center text-white bg-[#20251A]">
            <div className="bg-cover  opacity-30 bg-dark bg-[url('/images/auth_bg.png')] h-[627px] top-1/4 absolute w-full">
            </div>
            {error &&
                <div>{resMessage}</div>
            }

            <div className="z-[20] p-2 md:p-0 w-[371px]">
                <div id="content">

                </div>
                {/* image */}
                <div className="items-center mb-5">
                    <div className=" flex flex-row  justify-center items-center">

                        {!emailExists &&
                            <Image
                                style={{ zIndex: 2 }}
                                className="object-center"
                                src={AppImages.navBarLogo}
                                width={95}
                                height={95}
                                alt=""
                                priority />}
                        {emailExists &&
                            <AvatarGroup max={2} className="">
                                <Avatar
                                    className="bg-[#20251A]"
                                    sx={{ width: 62, height: 62, zIndex: 1 }}
                                    src={AppImages.navBarLogo}
                                />
                                <Avatar
                                    className=""
                                    sx={{ width: 62, height: 62, zIndex: 1 }}
                                    src="/images/profileImg.png"
                                />
                            </AvatarGroup>
                        }


                    </div>
                    <div className='font-kanit text-center text-vivd-lime-green-10 text-[36px]'>
                        {emailExists ? 'Enter Password' : 'Continue to'}
                    </div>
                    {!emailExists &&
                        <div className='font-gameria  text-center  text-vivd-lime-green-10 text-[40px]'>
                            PUMP MILLITIA
                        </div>
                    }
                    <p className="text-center text-[14px] text-vivd-lime-green-10">
                        {emailExists ? 'Enter your password to get in' :
                            'The ultimate rewards arena.'}</p>
                </div>
                {/* email address input */}

                <div className="items-center justify-center">
                    {!emailExists ?
                        <CustomInput
                            className=""
                            error={error}
                            sx={{ marginBottom: '10px' }}
                            label="Email Address"
                            placeholder="Enter email address"
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            addOnStart={<MailOutlineRounded color="inherit" />}
                            addOnEnd={error ? <ReportGmailerrorredRounded className="text-[#E2002B]" /> : <ArrowForward />}
                        />
                        :
                        <CustomInput
                            className=""
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{ marginBottom: '10px' }}
                            value={password}
                            label="Enter Password"
                            placeholder="Enter password"
                            type={showPassword ? "text" : "password"}
                            addOnStart={<LockRounded color="inherit" />}
                            addOnEnd={!showPassword ? <VisibilityRounded onClick={() => { setShowPassword(!showPassword) }} className="text-[#E1F6B1]" /> : <VisibilityOffRounded onClick={() => { setShowPassword(!showPassword) }} className="text-[#E1F6B1]" />}
                        />
                    }
                    {
                        error && <>
                            <hr className={`border-[#E2002B]  border mt-2`} />

                            <div className="flex flex-row items-center p-3 gap-3">
                                <CloseRounded className="bg-[#EC5572] text-[18px] rounded-full text-[black]" />
                                {errMessage != '' ?
                                    <p className="text-[12px] text-[#F9CCD5] text-start">{errMessage}</p>
                                    :
                                    <p className="text-[12px] text-[#F9CCD5] text-start">Ops! you must have entered the wrong email address, please check and re-enter.</p>
                                }
                            </div>
                        </>
                    }
                    {!emailExists ?
                        <div className="my-5">
                            <button onClick={checkEmailExists} className="navbar-auth-btn w-full">{loading ? <CircularProgress size={16} color="inherit" /> : 'Get In'}</button>
                        </div>
                        :
                        <div className="my-5">
                            <button onClick={HandleLogin} className="navbar-auth-btn w-full">{loading ? <CircularProgress size={16} color="inherit" /> : 'Login'}</button>
                        </div>
                    }
                    {
                        !emailExists ? <>

                            <FormHelperText className="text-[#898989] text-[10px] leading-loose italic w-7/12 m-auto text-center font-light">Try either of this below, only when “email address” fails to get you in.</FormHelperText>

                            <div className="flex flex-row items-center justify-center gap-8 my-3">
                                <Image
                                    className="object-center"
                                    src={'/images/google.png'}
                                    width={44}
                                    height={44}
                                    alt="google icon"
                                    priority />
                                <Image
                                    className="object-center"
                                    src={'/images/xacct.png'}
                                    width={44}
                                    height={44}
                                    alt="X(formerly twitter) icon"
                                    priority />

                            </div>


                            <p className="text-[#EDF9D0] text-center mt-5 font-light">By continuing, you agree to our <span className="font-bold text-[#A5E314]">Terms of service,</span> and acknowledge you have understood our <span className="font-bold text-[#A5E314]">Privacy Policy</span> and <span className="font-bold text-[#A5E314]">Collection Statement.</span></p>
                        </>
                            :
                            <div className="font-bold text-[#A5E314] mt-3 grid grid-cols-2 divide-[#A5E314] justify-between divide-x-2">
                                <p onClick={() => { setEmailExists(false) }} className="text-center">Change Email</p>
                                <p className="text-center">Forgot Passord</p>
                            </div>
                    }
                </div>
            </div>
            <div className="hidden md:inline absolute right-[150px] bottom-[20px]">
                <BlipNinja />
            </div>
        </div>
    )
}
