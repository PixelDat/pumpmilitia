"use client"
import { useEffect, type ReactNode } from "react";
import "./styles/globals.css";
import { Kanit } from 'next/font/google'
import localFont from 'next/font/local'
import Context from "./context/context";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "@firebase/analytics";
import Script from "next/script";


interface Props {
  readonly children: ReactNode;
}

const gameria = localFont({
  src: "../public/fonts/GAMERIA.ttf",
  variable: "--font-gameria"
})

const digital = localFont({
  src: "../public/fonts/digital.ttf",
  variable: "--font-digital"
})

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400']
})
// Initialize Firebase app and analytics
const firebaseConfig = {
  apiKey: "AIzaSyDWSQ-H8urokgoUcpbImbtnMpqMgL_jirc",
  authDomain: "everpump-6e275.firebaseapp.com",
  projectId: "everpump-6e275",
  storageBucket: "everpump-6e275.appspot.com",
  messagingSenderId: "138957984497",
  appId: "1:138957984497:web:6be3945adff541c5380f50",
  measurementId: "G-8T2XXV37GT",
};

export default function RootLayout({ children }: Props) {
  useEffect(() => {
    if (navigator.serviceWorker) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        }).catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
      });
    }
  }, []);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    // handleAudio();

    logEvent(analytics, 'page-viewed', { name: window.location.pathname });

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const buttonText = button.textContent || 'Unknown';
        logEvent(analytics, 'button_click', {
          description: `This button is ${buttonText.trim()} button`
        });
      });
    });
    return () => {
    };
  }, []);

  // const handleAudio = async () => {
  //   const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  // }

  return (

    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="Pump Militia" />
        <meta property="og:description" content="Pump Militia is a blockchain-based game designed to merge thrilling gameplay with the innovative aspects of GameFi featuring competitive combat, strategic missions, and a vibrant community allowing players to earn real-world value through in-game achievements." />
        <meta property="og:image" content="https://everpump-6e275.web.app/sheared_external_imgs/sitethumnail.jpg" />
        <meta property="og:url" content="https://pumpmilitia.io" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Pump Militia is a blockchain-based game designed to merge thrilling gameplay with the innovative aspects of GameFi featuring competitive combat, strategic missions, and a vibrant community allowing players to earn real-world value through in-game achievements." />
        <link rel="apple-touch-icon" href="favicon.ico" />
        <link rel="manifest" href="/files/manifest.json" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      </head>
      <body className={`${kanit.className} ${digital.variable} ${gameria.variable}`}>
        <audio id="tapaudio" src="/audio/tap.wav" style={{ visibility: "hidden", }} ></audio>
        <audio id="gunaudio" src="/audio/gunshot.wav" style={{ visibility: "hidden", }} ></audio>
        <audio id="coinaudio" src="/audio/coin.wav" style={{ visibility: "hidden", }} ></audio>
        <audio id="confettiaudio" src="/audio/gunshot.wav" style={{ visibility: "hidden", }} ></audio>
        <audio id="explosionaudio" src="/audio/explosion.mp3" style={{ visibility: "hidden", }} ></audio>
        <div style={{ display: "none" }} id="coingif" className="fixed z-10 bottom-0 ">
          <img src="/telegram/dashpage/coinsmove.gif" />
        </div>
        {children}
        {/* <Script src="/script.ts" /> */}
      </body>
    </html>
  );
}


