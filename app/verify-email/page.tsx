"use client";

import Image from "next/image";
import BlipNinja from "../components/blipninja/blip";
import { AppImages } from "@/lib/constants/app_images";
import { Avatar, AvatarGroup, FormHelperText } from "@mui/material";
import CustomInput from "../components/customInput/customInput";
import { ArrowForward, Check, CheckCircle, CloseRounded, MailOutlineRounded, ReportGmailerrorredRounded } from "@mui/icons-material";
import "../styles/navbar.css";
import { useEffect, useState } from "react";
import OtpComp from "../components/otpComp/otpComp";
import axios from "axios";
import { ToastComponent } from "../components/toastComponent/toastComponent";
const Cookies = require("js-cookie");
import { initializeApp } from "firebase/app";
import {
    getAuth,
    TwitterAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailLink,
} from "firebase/auth";
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



export default function VerifyEmail() {
    let encrypt = Cookies.get("encrypt");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const [countDown, setCountDown] = useState(60);
    const [otp, setOtp] = useState("");
    const [toastShow, setToastShow] = useState(true);
    const [toastContent, setToastContent] = useState("Click on the verification link sent to your email");
    const [toastType, setToastType] = useState('info');
    
    const [email, setEmail] = useState("");
    const [tempSessionId, setTempSessionId] = useState("");

    const actionCodeSettings = {
        url: "https://pumpmilitia.io/create-password/?tempSessionId={tempSessionId}",
        handleCodeInApp: true,
    };

    

    useEffect(() => {
        setEmail(Cookies.get("emailForSignIn"));
        setTempSessionId(Cookies.get("tempSessionId"));
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setToastShow(false);
        }, 3000);
        if (countDown > 0) {
            const timer = setTimeout(() => {
                setCountDown((prevCount) => prevCount - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [countDown]);

    useEffect(() => {
        if (otp.length == 6) {
            const verify_otp = async () => {
                let config = {
                    method: "get",
                    maxBodyLength: Infinity,
                    url: "https://evp-user-service-cea2e4kz5q-uc.a.run.app/get-user-details",
                    headers: {
                        Authorization: `${encrypt}`,
                    },
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
            };

            verify_otp();
        }
    }, [otp]);

    function resendVerificationLink() {
        setCountDown(60); // reset countdown timer
        firebaseSignUp(email, async () => {
            console.log("Email sent")
        });
    }

    const firebaseSignUp = async (email: string, callback: () => void) => {
        try {
            const encodedtempSessionId = encodeURIComponent(tempSessionId);
          
            const customUrl = actionCodeSettings.url.replace("{tempSessionId}", encodedtempSessionId);

            console.log("Custom URL", customUrl);

            await sendSignInLinkToEmail(auth, email, {
                ...actionCodeSettings,
                url: customUrl
            });

            // Update the toast message state
            setToastType('success');
            setToastContent('Click on the verification link sent to your email');
            setToastShow(true);
            callback();
        } catch (error) {
            console.error("Error sending email link", error);
            // Optionally, you could handle error showing in toast as well
            setToastType('error');
            setToastContent('Failed to send verification link. Please try again.');
            setToastShow(true);
        }
    };

    return (
        <div
            style={{ position: "fixed", width: "100%", height: "100vh" }}
            className="flex justify-center items-center text-white bg-[#20251A]"
        >
            {toastShow && (
                <ToastComponent
                    type={toastType}
                    content={toastContent}
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
            <div className="bg-cover  opacity-30 bg-dark bg-[url('/images/auth_bg.png')] h-[627px] top-1/4 absolute w-full"></div>
            <div className="z-[20] p-2 md:p-0 w-[371px]">
                {/* image */}
                <div className="items-center mb-10">
                    <div className=" flex flex-row mb-5 justify-center items-center">
                        <AvatarGroup max={2} spacing={"small"} className="">
                            <Avatar
                                src={AppImages.navBarLogo}
                                alt=""
                                className="bg-[#20251A] border-[#A5E314]"
                                sx={{ width: 95, height: 95 }}
                            />
                            <Avatar
                                className="object-center border-none"
                                src={"/images/launch/sms-tracking.png"}
                                sx={{ width: 95, height: 95 }}
                            />
                        </AvatarGroup>
                    </div>
                    <div className="font-gameria text-center text-vivd-lime-green-10 text-[36px]">
                        Verify Email
                    </div>
                    <p className="text-center text-[14px] text-vivd-lime-green-10">
                        Check your email inbox, click link to verify account
                    </p>
                </div>
                <div className="flex flex-row gap-5 justify-center">
                    <p className=" text-[#A5E314] border-e-2 border-[#52594B] pe-5">
                        Resend Link in <span className="text-[#52594B]">{countDown}s</span>
                    </p>
                    <a href="/pumpmilitiaAuth/type=login;data=" className=" text-[#A5E314]">
                        Change Email
                    </a>
                </div>

                <div className="items-center justify-center pt-4">
                    <div className="mt-10">
                        <button
                            disabled={countDown > 0}
                            onClick={resendVerificationLink}
                            className={`navbar-auth-btn buttonTracker w-full ${countDown > 0 && "blur-[2px]"}`}
                        >
                            Resend Link
                        </button>
                    </div>
                    <p className="text-[#EDF9D0] text-center mt-10 font-light">
                        By continuing, you agree to our{" "}
                        <span className="font-bold text-[#A5E314]">Terms of service,</span> and
                        acknowledge you have understood our{" "}
                        <span className="font-bold text-[#A5E314]">Privacy Policy</span> and{" "}
                        <span className="font-bold text-[#A5E314]">Collection Statement.</span>
                    </p>
                </div>
            </div>
            <div className="hidden md:inline absolute right-[150px] bottom-[20px]">
                <BlipNinja />
            </div>
        </div>
    );
}
