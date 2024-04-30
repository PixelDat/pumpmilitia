"use server"
const Cookies = require('js-cookie');
import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from 'uuid';


const firebaseConfig = { apiKey: "AIzaSyDWSQ-H8urokgoUcpbImbtnMpqMgL_jirc", authDomain: "everpump-6e275.firebaseapp.com", projectId: "everpump-6e275", storageBucket: "everpump-6e275.appspot.com", messagingSenderId: "138957984497", appId: "1:138957984497:web:6be3945adff541c5380f50", measurementId: "G-8T2XXV37GT", };

const app = initializeApp(firebaseConfig);


export default function referralProcessorPage({params}: any) {


    const genID = uuidv4();
    const refID = params.refID; 

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
