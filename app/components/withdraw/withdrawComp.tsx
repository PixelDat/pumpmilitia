"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import '../../styles/footer.css';
import axios from "axios";
import NavBar from "../navbar/navbar";
import CustomInput from "../customInput/customInput";
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';
import { WalletMultiButton, useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { CircularProgress } from "@mui/material";
import { ToastComponent } from "../toastComponent/toastComponent";
import { ArrowBack, CancelOutlined, CheckCircle, FolderCopy } from "@mui/icons-material";
import { labels } from "@/lib/constants/app_images";
import { usePathname } from "next/navigation";
const Cookies = require('js-cookie');
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
  const path = usePathname();
  let referrer = document.referrer;
  let encrypt = Cookies.get('encrypt_id');
  const { connection } = useConnection();
  const [walletAddress, setWalletAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [connected, setConnected] = useState(false)
  const [visible, setVisible] = useState(false)
  const [visibleMod, setVisibleMod] = useState(false)

  const [openSmall, setOpenSmall] = React.useState(false);


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


  // Wallet button
  const { setVisible: setModalVisible } = useWalletModal();
  const { buttonState, onConnect, onDisconnect, publicKey, walletIcon, walletName } = useWalletMultiButton({
    onSelectWallet() {
      setModalVisible(true);
    },
  });
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (!publicKey) {
      setConnected(false);
    } else {
      setConnected(true);
      setWalletAddress(publicKey?.toBase58());
    }

  }, [publicKey])

  useEffect(() => {
    if (!encrypt) {
      location.href = '/pumpmilitiaAuth/type=login;data='
      return
    }

    let userDetails = async () => {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://evp-user-service-cea2e4kz5q-uc.a.run.app/get-user-details',
        headers: {
          'Authorization': `${encrypt}`
        }
      };
      try {
        const response = await axios.request(config);
        setUser({
          username: response.data.username,
          email: response.data.email,
          role: response.data.role,
          profilePhoto: response.data.profilePhoto,
          user_id: response.data.user_id,
          twitter_id: response.data.twitter_id,
          google_id: response.data.google_id,
          points: response.data.points,
          updated_at: response.data.updated_at
        });
      } catch (error: any) {
        if (error.response && error.response.status === 400) {
        } else {
          console.log(`An error occurred: ${error.message}`);
        }
      }

    }
    userDetails()
  }, [])



  let tasksCount = [
    {
      title: 'connect your wallet',
      image: '/images/deposit/connect.png',
      subtitle: 'Click the “Connect” button to connect your Defi wallet',
    },
    {
      title: 'Enter Amount',
      image: '/images/deposit/coins.png',
      subtitle: 'Input amount of $PUMP tokens you want to withdraw',
    },
  ]
  const [error, setError] = useState(false)
  const [resMessage, setResMessage] = useState('')
  const [errMessage, setErrMessage] = useState({
    type: '',
    message: '',
  })
  const [amount, setAmount] = useState('')
  async function startWithdrawal() {
    if (!connected) {
      console.log('Please connect your wallet first');
      setVisibleMod(true);
      setTimeout(() => {
        setVisibleMod(false);
      }, 2000)
      return
    }

    setLoading(true)
    if (amount == '' || !Number(amount)) {
      setError(true);
      setLoading(false)
      setErrMessage({ type: 'error', message: 'Kindly enter a valid amount' });
      setTimeout(() => {
        setError(false);
      }, 2000)
      return false
    }
    if (Number(amount) > user?.points) {
      setError(true);
      setLoading(false)
      setErrMessage({ type: 'error', message: 'Available balance is less than the entered amount' });
      setTimeout(() => {
        setError(false);
      }, 2000)
      return false
    }

    setError(true);
    setErrMessage({ type: 'success', message: "Withdrawal not available. Withdraw your $PUMP airdrop balance at TGE" });
    setLoading(false);
    setTimeout(() => {
      setError(false);
    }, 2000)

    return;
    // This is what prevents withdrawal from happening till withdrawal is ready

    let params = {
      walletAddress: walletAddress,
      amount: amount
    }

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://evp-pump-militia-service-cea2e4kz5q-uc.a.run.app/swap',
      headers: {
        'Authorization': `${encrypt}`
      },
      data: params
    };
    try {
      const response = await axios.request(config);
      setError(true);
      setErrMessage({ type: 'success', message: response.data.message });
      setLoading(false);
      setTimeout(() => {
        setError(false);
      }, 2000)
    } catch (error: any) {
      if (error.response) {
        setError(true);
        setLoading(false);
        setErrMessage({ type: 'error', message: error?.response.data.message });
        setTimeout(() => {
          setError(false);
        }, 2000)
      } else {
        console.log(`An error occurred: ${error.message}`);
      }
    }
  }

  function startConnection() {
    setVisible(!visible);
    switch (buttonState) {
      case 'no-wallet':
        setModalVisible(true);
        break;
      case 'has-wallet':
        if (onConnect) {
          onConnect();
          setVisible(!visible);
        }
        break;
      case 'connected':
        if (onDisconnect) {
          onDisconnect();
        }
        break;
    }
  }
  function copyClip() {
    navigator.clipboard.writeText(walletAddress);
    setError(true);
    setErrMessage({ type: 'success', message: 'Address Copied' });
    setTimeout(() => {
      setError(false);
    }, 2000)
  }

  const [showPopup, setShowPopup] = useState(false);

  return (

    <div onClick={() => setVisible(false)} className="md:bg-cover bg-contain bg-center overflow-hidden bg-[url('/images/deposit/bgmobile.png')] md:bg-[url('/images/deposit/depbag.jpeg')] md:h-screen w-full">
      {error &&
        <ToastComponent addOnStart={errMessage.type == 'success' ? <CheckCircle color="inherit" /> : <CancelOutlined color='inherit' />} content={errMessage.message} type={errMessage.type} />
      }
      {referrer == "http://localhost:3000/telegram-dash" ?
        <div className='w-full bg-transparent text-white flex flex-row justify-between items-end fixed px-4 pt-5 '>
          <div className='flex flex-row justify-center gap-4'>
            {
              path == "/telegram-dash" ?
                <></>
                :
                <div onClick={() => { history.back() }}>
                  <ArrowBack sx={{ color: 'white', }} />
                </div>
            }
          </div>
        </div>
        : <NavBar />}
      <div className="pt-[50px] mb-10 w-11/12 m-auto text-[#EDF9D0] font-kanit">
        <div className="flex flex-col md:flex-row gap-10 items-end">
          <div className="basis-1/2 order-2 md:order-1 space-y-4">
            <div className="">
              <div className="flex gap-y-5 flex-row gap-x-5 pt-3">
                {tasksCount.map((task, index) => {
                  let gradient = index % 2 != 0 ? 'bg-gradient-to-l md:bg-gradient-to-b' : 'bg-gradient-to-r md:bg-gradient-to-t';
                  return (
                    <div key={`${index}-${task}`} className={`${gradient} basis-1/2 from-[#A5E314]/50 to-black flex flex-row justify-center p-0.5 rounded-3xl`}>
                      <div className="h-[261px] relative px-[10px] md:px-[34.7px] py-[10px] md:py-[13px] w-full space-y-2 text-start md:w-full bg-black/80 rounded-3xl">
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
                  <p className="text-[15px] font-[300]">
                    Click “Withdraw” button and accept/approve transaction in your wallet. Wait for Withdraw to process
                  </p>
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


            <div className="bg-[#D2F189] rounded-2xl  space-y-2 p-2 md:p-6">


              <div className="w-10/12 m-auto">
                <p className="text-[14px] md:text-[16px] pt-8 text-center">
                  Swap your in-game coins for $PUMP tokens and unlock a whole new level of value in your gaming experience.
                </p>
              </div>

              <div className="bg-[#20251a]  space-y-3 rounded-3xl  p-6">
                <div className="flex flex-row justify-between items-center">


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
                      <p className="text-[#898989] text-[10px]">Balance: <span className="text-[#e4a43d] font-gameria text-[16px] md:text-[24px]">{Number(user?.points).toLocaleString()}</span></p>
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
                    <div className="flex flex-row items-center gap-2 md:gap-4">
                      <div className="text-[#EDF9D0] text-[14px] md:text-[16px]">
                        $PUMP
                      </div>
                      <div className="text-[#EDF9D0] font-gameria text-[16px] md:text-[24px]">
                        MAIN-NET
                      </div>
                    </div>
                    <div className="text-end">
                      <p className="text-[#898989] text-[10px]">Balance: <span className="text-[#A5E314] font-gameria text-[16px] md:text-[24px]">?</span></p>
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
                  onChange={(e: any) => setAmount(e.target.value)}
                  placeholder="Enter amount to withdraw"
                />

                <CustomInput
                  addOnStart={<Image
                    className=""
                    src={'/images/deposit/pumpgreencoin.png'}
                    width={32}
                    height={32}
                    priority
                    alt="" />}
                  type="text"
                  onChange={(e: any) => setAmount(e.target.value)}
                  placeholder="?"
                />

                {buttonState == 'connected' && <p className="text-[14px] text-vivd-lime-green text-center ">
                  {`${walletAddress.slice(0, 7)}....${walletAddress.slice(-3, walletAddress.length)}`} <span onClick={copyClip} className=''><FolderCopy /></span>
                </p>}
                <div className="flex flex-row space-x-2 w-full mt-2 relative">
                  {visible &&
                    <span style={{ position: 'absolute', left: '100px', top: '30px' }}>
                      <ul
                        aria-label="dropdown-list"
                        className={`wallet-adapter-dropdown-list wallet-adapter-dropdown-list-active`}
                        ref={ref}
                        role="menu"
                      >
                        {publicKey ? (
                          <li
                            className="wallet-adapter-dropdown-list-item"
                            onClick={async () => {
                              await navigator.clipboard.writeText(publicKey.toBase58());
                              setCopied(true);
                              setTimeout(() => setCopied(false), 400);
                            }}
                            role="menuitem"
                          >
                            {copied ? labels['copied'] : labels['copy-address']}
                          </li>
                        ) : null}
                        <li
                          className="wallet-adapter-dropdown-list-item"
                          onClick={() => {
                            setModalVisible(true);
                            setOpenSmall(false);
                          }}
                          role="menuitem"
                        >
                          {labels['change-wallet']}
                        </li>
                        {onDisconnect ? (
                          <li
                            className="wallet-adapter-dropdown-list-item"
                            onClick={() => {
                              onDisconnect();
                              setOpenSmall(false);
                            }}
                            role="menuitem"
                          >
                            {labels['disconnect']}
                          </li>
                        ) : null}
                      </ul>
                    </span>
                  }
                  <button onClick={startConnection} className="bg-vivd-lime-green buttonTracker w-full component_btn px-6 py-2 shadow-sm rounded-xl shadow-white">
                    {labels[buttonState]}

                  </button>


                  <button onClick={startWithdrawal} className="px-6 relative py-2 buttonTracker border w-full component_btn_transparent border-vivd-lime-green rounded-xl text-vivd-lime-green-10">
                    {loading ? <CircularProgress size={16} color='inherit' /> : 'Withdraw'}

                    {visibleMod &&
                      <div className="bg-[#EDF9D0] absolute top-[-20px] right-0 p-2 text-[#181C13] text-[12px] rounded-2xl">
                        Connect your wallet first
                      </div>
                    }
                  </button>
                </div>
                <div>
                  <p className="text-center text-[#898989]">Withdraw your $PUMP airdrop balance at TGE</p>
                </div>
                <div className="relative">
                  <button onClick={() => {
                    setShowPopup(true)
                    setTimeout(() => {
                      setShowPopup(false)
                    }, 1000)
                  }} className="px-6 py-3 buttonTracker border w-full component_btn_transparent border-vivd-lime-green rounded-xl text-vivd-lime-green-10">
                    Sell on Raydium
                  </button>
                  {
                    showPopup &&
                    <span className="bg-[#EDF9D0] absolute top-[-20px] left-0 p-2 text-[#181C13] text-[12px] rounded-2xl">
                      Would be available at launch!
                    </span>
                  }

                </div>

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
  )
}
