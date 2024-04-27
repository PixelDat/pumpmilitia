"use client"
import { useEffect, useMemo, useState } from "react";
import NavBar from "../components/navbar/navbar";
import Image from "next/image";
import '../styles/footer.css';
import CustomInput from "../components/customInput/customInput";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { ConnectionProvider, WalletProvider, useConnection, useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import { clusterApiUrl } from "@solana/web3.js";
import { CoinbaseWalletAdapter, PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter, TrustWalletAdapter } from "@solana/wallet-adapter-wallets";
const Cookies = require('js-cookie');
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
interface UserType {
  username: string,
  email: string,
  role: string,
  profilePhoto: string,
  user_id: string,
  twitter_id: string,
  google_id: string,
  points: number,
  updated_at: string
}
require("@solana/wallet-adapter-react-ui/styles.css");
export default function WithdrawPage() {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new CoinbaseWalletAdapter(),
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
      new TrustWalletAdapter()
    ],
    [network]
  );



  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  console.log(connection, publicKey)
  let encrypt = Cookies.get('encrypt_id');
  const [user, setUser] = useState<UserType>({
    username: "",
    email: "",
    role: "",
    profilePhoto: "",
    user_id: "",
    twitter_id: "",
    google_id: "",
    points: 0,
    updated_at: ""
  })
  const [wallet, setWallet] = useState('')
  const [connected, setConnected] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!encrypt) {
      location.href = '/auth'
      return
    }
    // let userDetails = async () => {
    //   let config = {
    //     method: 'get',
    //     maxBodyLength: Infinity,
    //     url: 'https://evp-user-service-cea2e4kz5q-uc.a.run.app/get-user-details',
    //     headers: {
    //       'Authorization': `${encrypt}`
    //     }
    //   };
    //   try {
    //     const response = await axios.request(config);
    //     setUser({
    //       username: response.data.username,
    //       email: response.data.email,
    //       role: response.data.role,
    //       profilePhoto: response.data.profilePhoto,
    //       user_id: response.data.user_id,
    //       twitter_id: response.data.twitter_id,
    //       google_id: response.data.google_id,
    //       points: response.data.points,
    //       updated_at: response.data.updated_at
    //     });
    //   } catch (error: any) {
    //     if (error.response && error.response.status === 400) {
    //     } else {
    //       console.log(`An error occurred: ${error.message}`);
    //     }
    //   }

    // }
  }, [])


  let tasksCount = [
    {
      title: 'connect your wallet',
      image: '/images/deposit/connect.png',
      subtitle: 'ComClick the “Connect” button to connect your Defi walletpleted',
    },
    {
      title: 'Enter Amount',
      image: '/images/deposit/coins.png',
      subtitle: 'Input amount of $PUMP tokens you want to deposit into Pump Militia',
    },
  ]
  function startWithdrawal() {
    if (!connected) {
      console.log('Please connect your wallet first');
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 2000)
      return
    }
  }
  return (
    <ConnectionProvider endpoint={endpoint} >
      <WalletProvider wallets={wallets} >
        <WalletModalProvider>
          <div className="md:bg-cover bg-contain bg-center overflow-hidden bg-[url('/images/deposit/bgmobile.png')] md:bg-[url('/images/deposit/depbag.png')] md:h-screen w-full">
            <NavBar />
            <div className="pt-[20px] mb-10 w-11/12 m-auto text-[#EDF9D0] font-kanit">
              <div className="flex flex-col md:flex-row gap-10 items-end">
                <div className="basis-1/2 order-2 md:order-1 space-y-4">
                  <div className="">
                    <div className="flex gap-y-5 flex-row gap-x-5 pt-3">
                      {tasksCount.map((task, index) => {
                        let gradient = index % 2 != 0 ? 'bg-gradient-to-l md:bg-gradient-to-b' : 'bg-gradient-to-r md:bg-gradient-to-t';
                        return (
                          <div className={`${gradient} basis-1/2 from-[#A5E314]/50 to-black flex flex-row justify-center p-0.5 rounded-3xl`}>
                            <div key={`${index}-${task}`} className="h-[261px] relative px-[10px] md:px-[34.7px] py-[10px] md:py-[13px] w-full space-y-2 text-start md:w-full bg-black/80 rounded-3xl">
                              <div className="flex flex-row justify-center md:justify-start">
                                <Image
                                  className=""
                                  src={task.image}
                                  width={80}
                                  height={80}
                                  priority
                                  alt="" />
                              </div>
                              <h4 className="text-[14px] md:text-[24px] font-gameria font-[500]">{task.title}</h4>
                              <p className="text-[12px] md:text-[16px]">{task.subtitle}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="">
                    <div className="bg-gradient-to-t from-[#A5E314]/50 to-black p-0.5 rounded-3xl">
                      <div className="md:h-[259px] relative w-full bg-black/80 px-[24.8px] py-[24px] space-y-4  rounded-3xl">
                        <Image
                          className=""
                          src={'/images/deposit/checkmark.png'}
                          width={80}
                          height={80}
                          priority
                          alt="" />
                        <p className="text-[15px] font-[300]">Your balance today</p>
                        <h4 className="text-[24px] font-gameria font-[500]">CONFIRM AND COMPLETE PURCHASE</h4>
                        <p className="text-[15px] font-[300]">Click “Deposit” button and accept/approve transaction in your wallet. Wait for deposit to process</p>

                      </div>
                    </div>

                  </div>

                </div>
                <div className="basis-1/2  order-1  md:order-2 relative text-black ">
                  <div className="relative">

                    <div className="flex flex-row justify-center">
                      <Image
                        className="md:hidden"
                        src={'/images/deposit/military.png'}
                        width={297}
                        height={264}
                        priority
                        alt="" />
                    </div>
                    <div className="flex flex-row absolute w-full bottom-[-40px] md:top-[-60px] justify-center">
                      <Image
                        className="hidden md:inline"
                        src={'/images/deposit/pumpwit.png'}
                        width={392}
                        height={112}
                        priority
                        alt="" />
                      <Image
                        className="md:hidden"
                        src={'/images/deposit/pumpwit.png'}
                        width={275}
                        height={112}
                        priority
                        alt="" />
                    </div>
                  </div>


                  <div className="bg-[#D2F189] rounded-2xl h-[465px] md:h-[485px] space-y-2 p-2 md:p-6">


                    <div className="w-10/12 m-auto">
                      <p className="text-[14px] md:text-[16px] pt-8 text-center">
                        Swap your in-game coins for $PUMP tokens and unlock a whole new level of value in your gaming experience.
                      </p>
                    </div>

                    <div className="bg-[#20251a] h-[336px] space-y-6 rounded-3xl text-[] p-6">


                      <div className="flex flex-row justify-between items-center">
                        <div>
                          <div className="flex flex-row items-center gap-2 md:gap-4">
                            <div className="text-[#EDF9D0] text-[14px] md:text-[16px]">
                              $PUMP
                            </div>
                            <div className="text-[#EDF9D0] font-gameria text-[16px] md:text-[24px]">
                              MAIN-NET
                            </div>
                          </div>
                          <div className="text-end">
                            <p className="text-[#898989] text-[10px]">Balance: <span className="text-[#A5E314] font-gameria text-[16px] md:text-[24px]">099998</span></p>
                          </div>
                        </div>

                        <Image
                          className=""
                          src={'/images/deposit/arrow.png'}
                          width={40}
                          height={40}
                          priority
                          alt="" />

                        <div>
                          <div className="flex flex-row items-center gap-4">
                            <div className="text-[#EDF9D0] text-[14px] md:text-[16px]">
                              $PUMP
                            </div>
                            <div className="text-[#EDF9D0] font-gameria text-[16px] md:text-[24px]">
                              IN-GAME
                            </div>
                          </div>
                          <div className="text-end">
                            <p className="text-[#898989] text-[10px]">Balance: <span className="text-[#A5E314] font-gameria text-[16px] md:text-[24px]">099998</span></p>
                          </div>
                        </div>
                      </div>
                      <CustomInput
                        addOnStart={<Image
                          className=""
                          src={'/images/deposit/pumpcoin.png'}
                          width={32}
                          height={32}
                          priority
                          alt="" />}
                        type="text"
                        placeholder="Enter amount to deposit"
                      />

                      <div className="flex flex-row space-x-4 w-full mt-8 relative">

                        <WalletMultiButton
                          // sx={{ width: '100%', visbility: 'hidden' }}
                          className='rounded-5 multibuttton shadow w-100 text-white'
                        />
                        <button className="bg-vivd-lime-green w-full component_btn px-6 py-2 shadow-sm rounded-xl shadow-white">
                          Connect
                        </button>


                        <button onClick={startWithdrawal} className="px-6 relative py-2 border w-full component_btn_transparent border-vivd-lime-green rounded-xl text-vivd-lime-green-10">
                          Withdraw
                          {visible &&
                            <div className="bg-[#EDF9D0] absolute top-[-20px] right-0 p-2 text-[#181C13] text-[12px] rounded-2xl">
                              Connect your wallet first
                            </div>
                          }
                        </button>
                      </div>

                      <button className="px-6 py-3 border w-full component_btn_transparent border-vivd-lime-green rounded-xl text-vivd-lime-green-10">
                        Buy from Raydium
                      </button>

                    </div>
                  </div>
                </div>

              </div>

            </div>
            <div className="underBorder "></div>

            <div className='font-sans w-7/12 m-auto text-vivd-lime-green-10 my-5 text-sm text-center'>
              All rights reserved, ©2024. Brought to you by Pump Millitia.
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
