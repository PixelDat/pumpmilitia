"use client"

import '../styles/navbar.css';
import { useEffect, useState } from "react"
const Cookies = require('js-cookie');
import { initializeApp } from "firebase/app";
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';


import { getAuth, TwitterAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = { apiKey: "AIzaSyDWSQ-H8urokgoUcpbImbtnMpqMgL_jirc", authDomain: "everpump-6e275.firebaseapp.com", projectId: "everpump-6e275", storageBucket: "everpump-6e275.appspot.com", messagingSenderId: "138957984497", appId: "1:138957984497:web:6be3945adff541c5380f50", measurementId: "G-8T2XXV37GT", };

const app = initializeApp(firebaseConfig);


export default function referralProcessorPage() {
  const router = useRouter();

  useEffect(() => {
    const genID = uuidv4();
    const { refID } = router.query;

    // Cache genID and refID using cookies
    Cookies.set('genID', genID, { expires: 7 }); // Expires in 7 days
    Cookies.set('refID', refID, { expires: 7 });

    // Detect the device OS and redirect accordingly
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      // iOS device detected
      window.location.href = 'https://apps.apple.com/app'; // Put your App Store link here
    } else if (/android/i.test(userAgent)) {
      // Android device detected
      window.location.href = 'https://play.google.com/store/apps/details?id=com.everpumpstudio.pumpmilitia'; // Put your Play Store link here
    } else {
      // Non-mobile device detected, redirecting to Play Store as fallback
      window.location.href = 'https://play.google.com/store/apps/details?id=com.everpumpstudio.pumpmilitia'; // Put your Play Store link here
    }
  }, [router, router.isReady]);

  return null; // This component does not render anything
}

