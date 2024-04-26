import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useSignIn from "../../hook/useSignInPumpMilitiaAuth";
import useSignInG from "../../hook/useSignInGPumpMilitiaAuth";
import Cookies from 'js-cookie';
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function PumpmilitiaAuth() {
    const { signIn, isLoading } = useSignIn();
    const { signInG, isLoadingG } = useSignInG();
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [userSessionId, set_user_session_id] = useState(false);
    const [user_id, set_user_id] = useState(false);
    const [user_role, set_user_role] = useState(false);
    const [searchParams] = useSearchParams();
    useEffect(() => {
        const userSessionId = Cookies.get('user_session_id');
        const user_id = Cookies.get('user_id');
        const user_role = Cookies.get('user_role');
        setIsSignedIn(!!userSessionId);
        set_user_session_id(userSessionId);
        set_user_id(user_id);
        set_user_role(user_role);
    }, [isLoading, isLoadingG]);
    useEffect(() => {
        reg_auth();
        saveConnectionKey();
        confirmPotentialRef();
    }, []);
    if (isSignedIn) { // window.location.href = `everpump://pumpmilitia?isAuthenticated=true&encypted_session_id=${userSessionId}&user_id=${user_id}&role=${user_role}`; reg_auth (); saveConnectionKey(); confirmPotentialRef(); return ( <StyledAuth> <div> <div style={{ fontFamily: "Slackey", textAlign:"center", fontSize:"25px" }}> You are signed in! Go Back to Pump Militia </div> {/* <br></br> <div style={{ fontFamily: "Slackey", textAlign:"center"}}> <a href={`everpump://pumpmilitia?isAuthenticated=true&encypted_session_id=${userSessionId}&user_id=${user_id}&role=${user_role}`}>click Here</a> if you dont automatically get redirected </div> */} </div>
        </StyledAuth> ); }
        async function confirmPotentialRef() { // Retrieve genID and refID from cookies const genID = Cookies.get('genID'); const refID = Cookies.get('refID');
            // Check if both IDs exist if (!genID || !refID) { console.error("Missing genID or refID for referral confirmation."); return; }
            try { const response = await axios.post("https://evp-referral-service-cea2e4kz5q-uc.a.run.app/reg-potential-referrals", { _genID: genID, _refID: refID, }); console.log("Referral confirmation response:", response.data); } catch (error) { console.error("Error confirming referral:", error); }
        }
        async function reg_auth() { try { let token = Cookies.get("user_session_id", { path: "" }); token = token.trim(); const response = await axios.post("https://evp-cross-auth-handler-service-cea2e4kz5q-uc.a.run.app/reg-auth", {}, { headers: { Authorization: token }, }); } catch (e) { console.log(e) } }
        async function saveConnectionKey() {
            const cross_authkey = searchParams.get("cross_authkey"); const url = "https://evp-cross-auth-handler-service-cea2e4kz5q-uc.a.run.app/save-connection-key";
            // Generate a new connection key const connectionKey = cross_authkey;
            // Get the encrypted session id from cookies const token = Cookies.get("user_session_id", { path: "" });
            // Create a new object to hold the request parameters const data = { connectionKey: connectionKey, encypted_session_id: token };
            try { const response = await axios.post(url, data); console.log(`Server response: ${response.data}`); } catch (error) { console.log(`Axios error: ${error}`); }
        }
        return (<StyledAuth><div style= {{ display: "flex", flexDirection: "column" }
    }> <div style={ { padding: "10px" } }> <button style={ { background: "rgb(29, 155, 240)" } } onClick = { signIn } > Sign in with X(Twitter) < /button> </div >
    <div style= {{ display: "flex", alignItems: "center", padding: "10px" }
}> <div style={ { flex: 1, height: "2px", background: "rgb(0,113,9)", margin: "0 10px" } }> </div> <div style={{ color: "rgb(0,113,9)", fontWeight: "bold" }}>OR</div > <div style={ { flex: 1, height: "2px", background: "rgb(0,113,9)", margin: "0 10px" } }> </div> </div >
    <div style={ { padding: "10px" } }> <button style={ { background: "rgb(214, 0, 0)" } } onClick = { signInG } > Sign in with Google < /button> </div > </div> </StyledAuth > );}
export default PumpmilitiaAuth;
const StyledAuth = styled.section` width: 100%; height: 100vh; background: linear-gradient( 180deg, rgba(5, 182, 88, 0.91) 0%, rgba(156, 254, 109, 0.91) 100% ); display: flex; justify-content: center; align-items: center;
button { padding: 20px; font-family: "Slackey"; font-weight: 800; font-size: 20px; cursor: pointer; outline: none; border: none; color: #fff; border-radius: 5px; transition: 0.4s; box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); min-width: 350px; }
button:hover { background: linear-gradient( 180deg, rgba(5, 182, 88, 0.91) 0%, rgba(156, 254, 109, 0.91) 100% ); transition: 0.4s; }`;