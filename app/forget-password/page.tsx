"use client"
import Image from "next/image"
import BlipNinja from "../components/blipninja/blip"
import { AppImages } from "@/lib/constants/app_images"
import { CircularProgress, FormHelperText, } from "@mui/material"
import CustomInput from "../components/customInput/customInput"
import { ArrowForward, CloseRounded, LockRounded, MailOutlineRounded, Password, ReportGmailerrorredRounded, VisibilityOffRounded, VisibilityRounded } from "@mui/icons-material"
import '../styles/navbar.css';
import { useEffect, useState } from "react"
import { Helpers } from "@/lib/utils/helper"
import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, TwitterAuthProvider, applyActionCode, getAuth } from "firebase/auth"
import { useSearchParams } from "next/navigation"
import axios from "axios"
import { ToastComponent, toast } from "../components/toastComponent/toastComponent"
const Cookies = require("js-cookie");


const firebaseConfig = {
    apiKey: "AIzaSyDWSQ-H8urokgoUcpbImbtnMpqMgL_jirc",
    authDomain: "everpump-6e275.firebaseapp.com",
    projectId: "everpump-6e275",
    storageBucket: "everpump-6e275.appspot.com",
    messagingSenderId: "138957984497",
    appId: "1:138957984497:web:6be3945adff541c5380f50",
    measurementId: "G-8T2XXV37GT",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



export default function ForgotPassword() {
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [otpToken, setOtpToken] = useState('')

    const searchParams = useSearchParams()
    const [errors, setErrors] = useState<string[]>([]);
    const [tempSessionId, setTempSessionId] = useState("")
    const [canViewGoBackMsg, setcanViewGoBackMsg] = useState(false);
    const [signedInText, setSignedInText] = useState(" ");
    const [loading, setLoading] = useState(false);
    const [toastItem, setToastItem] = useState({
        toastType: '',
        toastMessage: '',
    })
    const [countDown, setCountDown] = useState(60);

    console.log(otpToken);

    useEffect(() => {
        const apiKey = searchParams.get('apiKey');
        const oobCode = searchParams.get('oobCode');
        const checkAction = async () => {
            if (oobCode != null) {
                try {
                    // const response = await applyActionCode(auth, oobCode);
                    setTempSessionId(Cookies.get("tempSessionId"));
                } catch (error: any) {
                    console.log(error?.message)
                }
            }
        }
        checkAction();
    }, [])
    useEffect(() => {
        if (countDown > 0) {
            const timer = setTimeout(() => {
                setCountDown((prevCount) => prevCount - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [countDown]);
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


    async function UpdatePassword() {
        setLoading(true);
        let params = {
            token: otpToken,
            newPassword: password,
        };

        let url = "https://evp-login-signup-service-cea2e4kz5q-uc.a.run.app/password-reset";
        try {
            const response = await axios.post(url, params);
            if (response.status === 200) {
                Cookies.set("encrypt_id", `${response.data.encypted_session_id}`);
                setLoading(false);
                setToastItem({ toastType: 'success', toastMessage: "Password Updated Successfully!" });
                location.href = "pumpmilitiaAuth/type=login;data=";
                setTimeout(() => {
                    setToastItem({
                        toastType: '',
                        toastMessage: '',
                    })
                }, 2000)
            }

        } catch (error: any) {
            if (error.response) {
                setLoading(false)
                setToastItem({ toastType: 'error', toastMessage: error.response.data.message });
                setTimeout(() => {
                    setToastItem({
                        toastType: '',
                        toastMessage: '',
                    })
                }, 2000)
            }
        }

    }

    function resendOtp() {
        setCountDown(60); // reset countdown timer
        const forgotPassword = async () => {
            const emailGotten = Cookies.get('emailForSignIn');
            let params = {
                email: emailGotten,
            };
            let url = "https://evp-login-signup-service-cea2e4kz5q-uc.a.run.app/send-password-reset-email";
            try {
                const response = await axios.post(url, params);
                // location.href = "/forget-password";
                setCountDown(60);
                setLoading(false);
                setToastItem({ toastType: 'success', toastMessage: `Password reset mail sent to ${emailGotten}` });
                setTimeout(() => {
                    setToastItem({ toastType: '', toastMessage: "" });
                }, 2000)
            } catch (error: any) {
                if (error.response) {
                    setToastItem({ toastType: 'error', toastMessage: error.response.data.message });
                    console.log(`${error.response.data.message}`);
                    setLoading(false);
                    setTimeout(() => {
                        setToastItem({ toastType: '', toastMessage: "" });
                    }, 2000)
                } else {
                    console.log(`An error occurred: ${error.message}`);
                }
            }
        }

        forgotPassword();
    }
    return (
        <div style={{ position: 'fixed', width: '100%', height: '100vh' }} className="flex justify-center items-center      text-white bg-[#20251A]">
            {toastItem.toastType !== '' && (
                <ToastComponent
                    type={toastItem.toastType}
                    content={toastItem.toastMessage}
                    addOnStart={
                        <Image
                            src={"/images/launch/sms-tracking.png"}
                            alt=""
                            width={20}
                            height={20}
                        />
                    }
                />
            )}
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
                    {canViewGoBackMsg ?
                        <p className="text-center text-[14px] text-vivd-lime-green-10">{signedInText}</p>
                        :
                        <p className="text-center text-[14px] text-vivd-lime-green-10">Enter a password, to secure your account and carryout transaction</p>
                    }

                </div>
                {/* email address input */}

                {!canViewGoBackMsg && <div className="items-center justify-center">
                    <p style={{ cursor: 'pointer' }} onClick={() => resendOtp()} className=" text-[#A5E314] text-center my-5 pe-5">
                        Resend Link in <span className="text-[#52594B]">{countDown}s</span>
                    </p>
                    <CustomInput
                        className=""
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{ marginBottom: '10px' }}
                        label="Enter New Password"
                        placeholder="Enter New password"
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
                    {password.length > 0 &&
                        <>
                            <CustomInput
                                disabled={errors.length == 0 ? false : true}
                                className=""
                                error={error}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                sx={{ marginBottom: '10px' }}
                                label="Re-enter New Password"
                                placeholder="Re-enter New password"
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

                            <CustomInput
                                disabled={errors.length == 0 ? false : true}
                                className=""
                                error={false}
                                onChange={(e) => setOtpToken(e.target.value)}
                                sx={{ marginBottom: '10px' }}
                                label="Enter Token Sent"
                                placeholder="Enter Token Sent"
                                type={"text"}
                                addOnStart={<Password color="inherit" />}
                            />
                            {/* <CustomInput
                                className=""
                                error={false}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value)
                                    console.log(e.target.value);
                                }}

                                sx={{ marginBottom: '10px' }}
                                label="Enter OTP Sent"
                                placeholder="Enter Otp Sent"
                                type={"number"}
                                addOnStart={<Password color="inherit" />}
                            /> */}
                        </>

                    }
                    {password.length == 0 &&
                        <div className={`my-5`}>
                            <button onClick={() => resendOtp()} className=" buttonTracker py-3 border w-full component_btn_transparent border-vivd-lime-green rounded-xl text-vivd-lime-green-10">{loading ? <CircularProgress size={14} color="inherit" /> : 'Resend OTP'}</button>
                        </div>
                    }
                    <div className={`${errors.length == 0 ? "my-5" : "blur-[2px] my-5"}`}>
                        <button disabled={error} onClick={() => UpdatePassword()} className="navbar-auth-btn buttonTracker  w-full">{loading ? <CircularProgress size={14} color="inherit" /> : 'Update Password'}</button>
                    </div>


                </div>
                }

                {/* {canViewGoBackMsg && <div className="items-center justify-center">
                    <p className="text-[#EDF9D0] text-center mt-5 font-light">{signedInText}</p>
                </div>} */}

            </div>
            <div className="hidden md:inline absolute right-[150px] bottom-[20px]">
                <BlipNinja />
            </div>
        </div>
    )
}
