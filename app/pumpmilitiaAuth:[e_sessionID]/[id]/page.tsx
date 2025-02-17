"use client"
import Image from "next/image";
import BlipNinja from "../../components/blipninja/blip";
import { AppImages } from "@/lib/constants/app_images";
import {
    Avatar,
    AvatarGroup,
    CircularProgress,
    FormHelperText,
} from "@mui/material";
import CustomInput from "../../components/customInput/customInput";
import {
    ArrowForward,
    CloseRounded,
    LockRounded,
    MailOutlineRounded,
    ReportGmailerrorredRounded,
    VisibilityOffRounded,
    VisibilityRounded,
} from "@mui/icons-material";
import "../../styles/navbar.css";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";
const Cookies = require("js-cookie");
import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from "uuid";
import {
    getAuth,
    TwitterAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailLink,
} from "firebase/auth";
import { useParams } from 'next/navigation';
import { set } from "@coral-xyz/anchor/dist/cjs/utils/features";
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
const twitterProvider = new TwitterAuthProvider();
const googleProvider = new GoogleAuthProvider();

export default function gameAuthPage() {
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setloading] = useState(false);
    const [resMessage, setResMessage] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailExists, setEmailExists] = useState(false);
    const [canViewGoBackMsg, setcanViewGoBackMsg] = useState(false);
    const [signedInText, setSignedInText] = useState("You are signed in! Go Back to Pump Militia");
    const [tempSessionId, setTempSessionId] = useState("");
    const [failedExternalAuth, setFailedExternalAuth] = useState(false);
    const [AuthGenID, setAuthGenID] = useState("");
    const [save_connection_key_url_TG, set_save_connection_key_url_TG] = useState("https://t.me/Pumpmilitia_Auth_bot?start=");

    let cross_authkey = "";
    let refID = "";
    const params = useParams();

    const actionCodeSettings = {
        url: "https://pumpmilitia.io/create-password/?tempSessionId={tempSessionId}",
        handleCodeInApp: true,
    };

    try {
        const collected_param_raw = decodeURIComponent(params.id.toString());
        const collected_param = collected_param_raw.split(";");


        const operationType = collected_param[0].split("=")[1];
        const operationData = collected_param[1].split("=")[1];

        if (operationType === "referral") {
            referralProcessor();
            refID = operationData;
        } else if (operationType == "login") {
            cross_authkey = operationData;
        }
    } catch (e) {
        console.error('Error processing parameters:', e);
    }

    const firebaseSignUp = async (email: string, _tempSessionId: string, callback: () => void) => {

        try {
            // Encode the user's email to make it URL-safe
            const encodedtempSessionId = encodeURIComponent(_tempSessionId);
            // Replace the placeholder in the URL with the encoded email
            const customUrl = actionCodeSettings.url.replace("{tempSessionId}", encodedtempSessionId);

            await sendSignInLinkToEmail(auth, email, {
                ...actionCodeSettings,
                url: customUrl
            });
            // Execute the callback function
            callback();
        } catch (error) {
            console.error("Error sending email link", error);
        }
    };


    const checkEmailExists = async () => {
        setloading(true);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email == "") {
            setError(true);
            setErrMessage("Email field is empty");
            setloading(false);
            setTimeout(() => {
                setError(false)
            }, 2000)
            return;
        }
        if (!emailRegex.test(email)) {
            setError(true);
            setErrMessage("Please Enter a valid email");
            setloading(false);
            setTimeout(() => {
                setError(false)
            }, 2000)
            return;
        }

        // Save email to cookie
        Cookies.set("emailForSignIn", email);

        let params = {
            email: email,
        };
        let url = "https://evp-login-signup-service-cea2e4kz5q-uc.a.run.app/check-user-verification-status";
        try {
            // If the email exsists and is verified
            const response = await axios.post(url, params);
            setError(false);
            setEmailExists(true);
            setloading(false);

            

        } catch (error: any) {
            if (error.response && error.response.status === 400) {

                // If the email does not exsist


                // Perform email existence check via your API
                let params = {
                    email: email,
                };
                let url = "https://evp-login-signup-service-cea2e4kz5q-uc.a.run.app/temp-signup";
                try {
                    const response = await axios.post(url, params);
                    setTempSessionId(response.data.userId);
                    firebaseSignUp(email, response.data.userId, async () => {
                        Cookies.set("emailForSignIn", email);
                        Cookies.set("tempSessionId", response.data.userId);
                        location.href = "/verify-email";
                    });


                } catch (error: any) {
                    if (error.response && error.response.status === 400) {
                        setError(false);
                        setEmailExists(true);
                        setloading(false);
                    } else {
                        console.log(`An error occurred: ${error.message}`);
                    }
                }



            } else if (error.response && error.response.status === 405) {
                // If the email exsists but is not verified
                setError(false);
                // setloading(false);
                Cookies.set("emailForSignIn", email);
                Cookies.set("tempSessionId", error.response.data.userId);
                location.href = "/verify-email";
            } else {
                console.log(`An error occurred: ${error.message}`);
            }
        }





    };
    const HandleLogin = async () => {
        setError(false);
        if (password == "") {
            setError(true);
            setErrMessage("Password field is empty");
            setloading(false);
            return;
        }
        let params = {
            email: email,
            password: password,
        };
        let url = "https://evp-login-signup-service-cea2e4kz5q-uc.a.run.app/login";
        try {
            const response = await axios.post(url, params);
            Cookies.set("encrypt_id", `${response.data.encypted_session_id}`);
            setloading(false);
            setSignedInText("Go Back to Pump Militia and use your email and password to login");
            setcanViewGoBackMsg(true);

        } catch (error: any) {
            if (error.response) {
                setError(true);
                setErrMessage(error.response.data.message);
                console.log(`${error.response.data.message}`);
            } else {
                console.log(`An error occurred: ${error.message}`);
            }
        }
    };
    const handleExternalLogin = async (type: string) => {
        setloading(true);
        let user;
        try {
            
            if (type == "google") {
                user = await signInWithPopup(auth, googleProvider);
            } else if(type == "telegram"){
                try{
                    const id = uuidv4();
                setAuthGenID(id);
                const url = `${save_connection_key_url_TG}${id}`;
                window.open(url, '_blank');
                setTimeout(async () => {
                const res = await axios.post(
                    "https://evp-cross-auth-handler-service-cea2e4kz5q-uc.a.run.app/get-conn-key-auth",
                    { connectionKey: id }
                );
                if (res.status === 200) {
                    setloading(false)
                    Cookies.set('encrypt_id', `${res.data.encypted_session_id}`)
                    successfullAuth();
                    setcanViewGoBackMsg(true);
                }
            }, 10000);
                }catch(error: any){
                    if (error.response) {
                        setError(true);
                        setErrMessage(error.response.data.message);
                        setloading(false);
                        setFailedExternalAuth(true);
                    } else {
                        setloading(false);
                    }
                }
            }else {
                user = await signInWithPopup(auth, twitterProvider);
            }
            const authToken = user?.user?.uid?.trim();
            try {
                setTimeout(async () => {
                    const res = await axios.get(
                        "https://us-central1-everpump-6e275.cloudfunctions.net/app/checkAuth",
                        { headers: { Authorization: authToken } }
                    );
                    if (res.status === 200) {
                        setloading(false)
                        Cookies.set('encrypt_id', `${res.data.encypted_session_id}`)
                        successfullAuth();
                        setcanViewGoBackMsg(true);
                    }
                }, 4000);

            } catch (error: any) {
                if (error.response) {
                    setError(true);
                    setErrMessage(error.response.data.message);
                    setloading(false);
                    setFailedExternalAuth(true);
                } else {
                    setloading(false);
                }
            }
        } catch (error: any) {
            if (error.response) {
                setError(true);
                setErrMessage(error.response.data.message);
                setloading(false);
            } else {
                console.log(`An error occurred: ${error.message}`);
            }
        }
    };
    const handleSignInWithEmailLink = async () => {
        if (isSignInWithEmailLink(auth, window.location.href)) {
            let email = Cookies.get("emailForSignIn");
            if (!email) {
                // Prompt the user for their email if not available
                email = window.prompt("Please provide your email for confirmation");
            }
            try {
                const result = await signInWithEmailLink(auth, email, window.location.href);
                // Clear the email from storage
                Cookies.remove("emailForSignIn");
                // Successful sign-in, redirect to dashboard
                location.href = "/dashboard";
            } catch (error) {
                console.error("Error signing in with email link", error);
            }
        }
    };
    useEffect(() => {
        handleSignInWithEmailLink();
        let encrypt = Cookies.get('encrypt_id');
        if (encrypt != 'undefined' && encrypt) {
            successfullAuth();
            setcanViewGoBackMsg(true);
        }
    }, []);

    const successfullAuth = async () => {
        reg_auth();
        saveConnectionKey();
        confirmPotentialRef();
        // Display `You are signed in! Go back to pumpmilitia`
    }

    async function confirmPotentialRef() {
        // Retrieve genID and refID from cookies
        const genID = Cookies.get('genID');
        const refID = Cookies.get('refID');

        // Check if both IDs exist
        if (!genID || !refID) {
            console.error("Missing genID or refID for referral confirmation.");
            return;
        }

        try {
            const response = await axios.post(
                "https://evp-referral-service-cea2e4kz5q-uc.a.run.app/reg-potential-referrals",
                {
                    _genID: genID,
                    _refID: refID,
                }
            );
            console.log("Referral confirmation response:", response.data);
        } catch (error) {
            console.error("Error confirming referral:", error);
        }
    }

    async function reg_auth() {
        try {
            let token = Cookies.get("encrypt_id", { path: "" });
            token = token.trim();
            const response = await axios.post(
                "https://evp-cross-auth-handler-service-cea2e4kz5q-uc.a.run.app/reg-auth",
                {},
                {
                    headers: { Authorization: token },
                }
            );
        } catch (e) {
            console.log(e)
        }
    }

    async function saveConnectionKey() {
        const url = "https://evp-cross-auth-handler-service-cea2e4kz5q-uc.a.run.app/save-connection-key";

        // Passed connection key
        const connectionKey = cross_authkey;


        // Get the encrypted session id from cookies
        const token = Cookies.get("encrypt_id", { path: "" });

        // Create a new object to hold the request parameters
        const data = {
            connectionKey: connectionKey,
            encypted_session_id: token
        };

        try {
            const response = await axios.post(url, data);
            console.log(`Server response: ${response.data}`);
        } catch (error) {
            console.log(`Axios error: ${error}`);
        }
    }

    function referralProcessor() {

        const genID = uuidv4();

        // Cache genID and refID using cookies
        Cookies.set('genID', genID, { expires: 7 }); // Expires in 7 days
        Cookies.set('refID', refID, { expires: 7 });

        confirmPotentialRef();
        
        // Cache genID and refID using cookies
        const userAgent = (navigator.userAgent || navigator.vendor || (window as any).opera) as string;
        if (/iPad|iPhone|iPod/.test(userAgent) && !(navigator as any).MSStream) {
            // iOS device detected
            location.href = 'https://apps.apple.com/app'; // Put your App Store link here
        } else if (/android/i.test(userAgent)) {
            // Android device detected
            location.href = 'https://play.google.com/store/apps/details?id=com.everpumpstudio.pumpmilitia'; // Put your Play Store link here
        } else {
            // Non-mobile device detected, redirecting to Play Store as fallback
            location.href = 'https://play.google.com/store/apps/details?id=com.everpumpstudio.pumpmilitia'; // Put your Play Store link here
        }


        return null; // This component does not render anything
    }

    const forgotPassword = async () => {
        const emailGotten = Cookies.get('emailForSignIn');
        setloading(true);
        let params = {
            email: emailGotten,
        };
        let url = "https://evp-login-signup-service-cea2e4kz5q-uc.a.run.app/send-password-reset-email";
        try {
            const response = await axios.post(url, params);
            location.href = "/forget-password";
        } catch (error: any) {
            if (error.response) {
                setError(true);
                setErrMessage(error.response.data.message);
                setloading(false)
                console.log(`${error.response.data.message}`);
                setTimeout(() => { setError(false) }, 2000)
            } else {
                console.log(`An error occurred: ${error.message}`);
            }
        }
        // console.log('Forgot Password Clicked', emailGotten)

    }


    return (
        <div
            style={{ position: "fixed", width: "100%", height: "100vh" }}
            className="flex justify-center items-center text-white bg-[#20251A]"
        >
            <div className="bg-cover  opacity-30 bg-dark bg-[url('/images/auth_bg.png')] h-[627px] top-1/4 absolute w-full"></div>
            {error && <div>{resMessage}</div>}
            <div className="z-[20] p-2 md:p-0 w-[371px]">
                <div id="content"></div>
                {/* image */}
                <div className="items-center mb-5">
                    <div className=" flex flex-row  justify-center items-center">
                        {!emailExists && (
                            <Image
                                style={{ zIndex: 2 }}
                                className="object-center"
                                src={AppImages.navBarLogo}
                                width={95}
                                height={95}
                                alt=""
                                priority
                            />
                        )}
                        {emailExists && (
                            <AvatarGroup max={2} className="">
                                <Avatar
                                    className="bg-[#20251A]"
                                    sx={{ width: 62, height: 62, zIndex: 1 }}
                                    src={AppImages.navBarLogo}
                                />
                                <Avatar
                                    className=""
                                    sx={{ width: 62, height: 62, zIndex: 1 }}
                                    src=""
                                    alt={`${email} User`}
                                />
                            </AvatarGroup>
                        )}
                    </div>
                    <div className="font-kanit text-center text-vivd-lime-green-10 text-[36px]">
                        {emailExists ? "Enter Password" : "Continue to"}
                    </div>
                    {!emailExists && (
                        <div className="font-gameria  text-center  text-vivd-lime-green-10 text-[40px]">
                            PUMP MILLITIA
                        </div>
                    )}
                    <p className="text-center text-[14px] text-vivd-lime-green-10">
                        {emailExists ? "Enter your password to get in" : "The ultimate rewards arena."}
                    </p>
                </div>
                {/* email address input */}

                {!canViewGoBackMsg && <div className="items-center justify-center">
                    
                    {!emailExists &&
                        <>
   <FormHelperText className="text-[14px] text-vivd-lime-green-10 leading-tight mb-5 w-8/12 m-auto text-center font-bold">Login With</FormHelperText>
                            <div className="flex flex-row items-center justify-center gap-8 my-3">
                                <Image
                                    onClick={() => { handleExternalLogin('google') }}
                                    className="object-center"
                                    src={'/images/google.png'}
                                    width={60}
                                    height={60}
                                    alt="google icon"
                                    priority />
                                <Image
                                    onClick={() => { handleExternalLogin('twitter') }}

                                    className="object-center"
                                    src={'/images/xicon.png'}
                                    width={60}
                                    height={60}
                                    alt="X(formerly twitter) icon"
                                    priority />
                                    <Image
                                    onClick={() => { handleExternalLogin('telegram') }}

                                    className="object-center"
                                    src={'/images/TelegramLogomark.png'}
                                    width={60}
                                    height={60}
                                    alt="TelegramLogomark icon"
                                    priority />

                            </div>
                            <FormHelperText className="text-[12px] text-vivd-lime-green-10 leading-tight mb-5 w-8/12 m-auto text-center font-bold">Try this below, only when you fail to login via Google or X.</FormHelperText>
                        </>

                    }
                    {!emailExists ?
                        <CustomInput
                            className=""
                            // disabled={!failedExternalAuth}
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
                    {/* <div className={`${!failedExternalAuth ? "blur-[2px] my-5" : "my-5"}`}> */}
                    <div className="my-5">

                        {!emailExists ?
                            <div className="my-5">
                                {/* <button disabled={!failedExternalAuth} onClick={checkEmailExists} className="navbar-auth-btn buttonTracker w-full">{loading ? <CircularProgress size={16} color="inherit" /> : 'Get In'}</button> */}
                                <button onClick={checkEmailExists} className="navbar-auth-btn buttonTracker w-full">{loading ? <CircularProgress size={16} color="inherit" /> : 'Get In'}</button>
                            </div>
                            :
                            <div className="my-5">
                                <button onClick={HandleLogin} className="navbar-auth-btn buttonTracker w-full">{loading ? <CircularProgress size={16} color="inherit" /> : 'Login'}</button>
                            </div>
                        }
                    </div>
                    {
                        !emailExists ? <>




                            <p className="text-[#EDF9D0] text-center mt-5 font-light">By continuing, you agree to our <span className="font-bold text-[#A5E314]">Terms of service,</span> and acknowledge you have understood our <span className="font-bold text-[#A5E314]">Privacy Policy</span> and <span className="font-bold text-[#A5E314]">Collection Statement.</span></p>
                        </>
                            :
                            <div className="font-bold text-[#A5E314] mt-3 grid grid-cols-2 divide-[#A5E314] justify-between divide-x-2">
                                <p style={{ cursor: 'pointer' }} onClick={() => {
                                    setEmailExists(false)
                                    setError(false)
                                }} className="text-center">Change Email</p>
                                <p style={{ cursor: 'pointer' }} onClick={() => forgotPassword()} className="text-center">Forgot Passord</p>

                            </div>
                    }
                </div>}
                {canViewGoBackMsg && <div className="items-center justify-center">
                    <p className="text-[#EDF9D0] text-center mt-5 font-light">{signedInText}</p>
                </div>}
            </div>
            <div className="hidden md:inline absolute right-[150px] bottom-[20px]">
                <BlipNinja />
            </div>
        </div >
    );
}