import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./provider/StoreProvider";
import "./styles/globals.css";
import { Kanit } from 'next/font/google'
import localFont from 'next/font/local'
import NavBar from "./components/navbar/navbar";
export const metadata = {
  icons: {
    icon: '/images/favicon-32x32.png',
  },
};

interface Props {
  readonly children: ReactNode;
}

// const poppins = Poppins({ subsets: ['latin'], weight: '400' })

const gameria = localFont({
  src: "../public/fonts/GAMERIA.ttf",
  variable: "--font-gameria"
})

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400']
})


export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#000000" />

          <meta property="og:title" content="EverPump" />
          <meta property="og:description" content="EverPump is a social experiment that rewards users for completing tasks on X(Twitter)" />
          <meta property="og:image" content="https://everpump-6e275.web.app/sheared_external_imgs/sitethumnail.jpg" />
          <meta property="og:url" content="https://everpump.io" />
          <meta property="og:type" content="website" />
          <meta name="description" content="EverPump is a social experiment that rewards users for completing tasks on X(Twitter)" />

          <link rel="apple-touch-icon" href="/images/logo192.png" />
          <link rel="manifest" href="/files/manifest.json" />
        </head>
        <body className={`${kanit.className} ${gameria.variable}`}>
          {children}

        </body>
      </html>
    </StoreProvider>
  );
}


