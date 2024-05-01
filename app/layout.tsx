import type { ReactNode } from "react";
import "./styles/globals.css";
import { Kanit } from 'next/font/google'
import localFont from 'next/font/local'
import Context from "./context/context";
export const metadata = {
  icons: {
    icon: '/images/favicon-32x32.png',
  },
};

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



export default function RootLayout({ children }: Props) {
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
        {children}
      </body>
    </html>
  );
}


