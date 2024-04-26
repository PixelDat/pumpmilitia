API Implementation:

1. user registers with email.endpoint: evp - login - signup - service / signup

2. user confirms email.endpoint: evp - login - signup - service / verifyEmail

3. user sets password.endpoint: evp - login - signup - service / set - password

For Google and Twitter auth:

- We use firebase

const firebaseConfig = { apiKey: "AIzaSyDWSQ-H8urokgoUcpbImbtnMpqMgL_jirc", authDomain: "everpump-6e275.firebaseapp.com", projectId: "everpump-6e275", storageBucket: "everpump-6e275.appspot.com", messagingSenderId: "138957984497", appId: "1:138957984497:web:6be3945adff541c5380f50", measurementId: "G-8T2XXV37GT", };

Config Constants:

const app = initializeApp(firebaseConfig); const analytics = getAnalytics(app);

const auth = getAuth(app);

const twitterProvider = new TwitterAuthProvider();

const googleProvider = new GoogleAuthProvider();


import { initializeApp } from "firebase/app";

import { getAnalytics, logEvent } from "firebase/analytics";

import { getAuth, TwitterAuthProvider, GoogleAuthProvider } from "firebase/auth";

Get Auth Token with:

const authToken = user.user.uid.trim();

send a request to evp - x - auth - service / checkAuth passing the authToken as Authorization Header.and save it response fas cookie to be used for other requests within the application.

    Note: call endpoint evp - referral - service / register - referral.passing authrisation header of encypted_session_id and the following json body`{ twitter_id: userObj.uid, // Changed from twitter_id to google_id referral_id: refID, },`

example:

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { auth, googleProvider } from "../firebase/config";
// Import Google providerimport { signInWithPopup } from "firebase/auth";
import axios from "axios";
import { UserContext } from "../context/userContext";

const useSignInG = () => {
    const navigate = useNavigate(); const [isLoadingG, setIsLoading] = useState(false);
    const { userName, setUserName, userPhotoUrl, setUserPhotoUrl,
        userCompletedTaskCount, setUserCompletedTaskCount, userUncompletedTaskCount, setUserUncompletedTaskCount, userTotalTaskCount, setUserTotalTaskCount, userTotalPoints, setUserTotalPoints, googleuuid,
        // Changed from twitteruuid to googleuuid setGoogleuuid,
        // Changed setter name referralPoints,
        setReferralPoints, referrer_id, setReferrer_id, } = useContext(UserContext);



    import React, { useState, useEffect } from "react"; import styled from "styled-components"; import useSignIn from "../../hook/useSignInPumpMilitiaAuth"; import useSignInG from "../../hook/useSignInGPumpMilitiaAuth"; import Cookies from 'js-cookie'; import axios from "axios"; import { useSearchParams } from "react-router-dom";
    function PumpmilitiaAuth() {
        const { signIn, isLoading } = useSignIn();
        const { signInG, isLoadingG } = useSignInG();
        const [isSignedIn, setIsSignedIn] = useState(false);
        const [userSessionId, set_user_session_id] = useState(false); const [user_id, set_user_id] = useState(false); const [user_role, set_user_role] = useState(false);
        const [searchParams] = useSearchParams();
        useEffect(() => { const userSessionId = Cookies.get('user_session_id'); const user_id = Cookies.get('user_id'); const user_role = Cookies.get('user_role'); setIsSignedIn(!!userSessionId); set_user_session_id(userSessionId); set_user_id(user_id); set_user_role(user_role); }, [isLoading, isLoadingG]);
        useEffect(() => { reg_auth(); saveConnectionKey(); confirmPotentialRef(); }, []);
        if (isSignedIn) { // window.location.href = `everpump://pumpmilitia?isAuthenticated=true&encypted_session_id=${userSessionId}&user_id=${user_id}&role=${user_role}`; reg_auth (); saveConnectionKey(); confirmPotentialRef(); return ( <StyledAuth> <div> <div style={{ fontFamily: "Slackey", textAlign:"center", fontSize:"25px" }}> You are signed in! Go Back to Pump Militia </div> {/* <br></br> <div style={{ fontFamily: "Slackey", textAlign:"center"}}> <a href={`everpump://pumpmilitia?isAuthenticated=true&encypted_session_id=${userSessionId}&user_id=${user_id}&role=${user_role}`}>click Here</a> if you dont automatically get redirected </div> */} </div>
</StyledAuth > ); }
async function confirmPotentialRef() { // Retrieve genID and refID from cookies const genID = Cookies.get('genID'); const refID = Cookies.get('refID');
    // Check if both IDs exist if (!genID || !refID) { console.error("Missing genID or refID for referral confirmation."); return; }
    try { const response = await axios.post("https://evp-referral-service-cea2e4kz5q-uc.a.run.app/reg-potential-referrals", { _genID: genID, _refID: refID, }); console.log("Referral confirmation response:", response.data); } catch (error) { console.error("Error confirming referral:", error); }
}
async function reg_auth() {
    try {
        let token = Cookies.get("user_session_id", { path: "" });
        token = token.trim(); const response = await axios.post("https://evp-cross-auth-handler-service-cea2e4kz5q-uc.a.run.app/reg-auth", {},
            { headers: { Authorization: token }, });
    } catch (e) { console.log(e) }
}
async function saveConnectionKey() {
    const cross_authkey = searchParams.get("cross_authkey");
    const url = "https://evp-cross-auth-handler-service-cea2e4kz5q-uc.a.run.app/save-connection-key";
    // Generate a new connection key const connectionKey = cross_authkey;
    // Get the encrypted session id from cookies const token = Cookies.get("user_session_id", { path: "" });
    // Create a new object to hold the request parameters const data = { connectionKey: connectionKey, encypted_session_id: token };
    try {
        const response = await axios.post(url, data);
        console.log(`Server response: ${response.data}`);
    } catch (error) { console.log(`Axios error: ${error}`); }
}
return (<StyledAuth>

    <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "10px" }}> <button style={{ background: "rgb(29, 155, 240)" }} onClick={signIn}> Sign in with X(Twitter) </button> </div>
        <div style={{ display: "flex", alignItems: "center", padding: "10px" }}> <div style={{ flex: 1, height: "2px", background: "rgb(0,113,9)", margin: "0 10px" }}></div> <div style={{ color: "rgb(0,113,9)", fontWeight: "bold" }}>OR</div> <div style={{ flex: 1, height: "2px", background: "rgb(0,113,9)", margin: "0 10px" }}></div> </div>
        <div style={{ padding: "10px" }}> <button style={{ background: "rgb(214, 0, 0)" }} onClick={signInG}> Sign in with Google </button> </div> </div>

</StyledAuth>);}
export default PumpmilitiaAuth;


