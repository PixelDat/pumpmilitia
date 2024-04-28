"use client"
import React, { useEffect, useRef, useState } from "react";
import NavBar from "../navbar/navbar";
import Image from "next/image";
import '../../styles/footer.css';
import CustomInput from "../customInput/customInput";
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';
import { WalletMultiButton, useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import { ToastComponent } from "../toastComponent/toastComponent";
import { CancelOutlined, CheckCircle } from "@mui/icons-material";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, sendAndConfirmTransaction } from "@solana/web3.js";
import { bindAddress, checkHash } from "@/lib/utils/helper";
import { CircularProgress } from "@mui/material";
import { UserType } from "@/lib/utils/types";
import { labels } from "@/lib/constants/app_images";
const Cookies = require('js-cookie');
require("@solana/wallet-adapter-react-ui/styles.css");

export default function DepositCompPage() {
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
  const { sendTransaction, signTransaction, wallet } = useWallet();

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
      location.href = '/auth'
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
      subtitle: 'ComClick the “Connect” button to connect your Defi walletpleted',
    },
    {
      title: 'Enter Amount',
      image: '/images/deposit/coins.png',
      subtitle: 'Input amount of $PUMP tokens you want to deposit into Pump Militia',
    },
  ]
  const [error, setError] = useState(false)
  const [resMessage, setResMessage] = useState('')
  const [errMessage, setErrMessage] = useState({
    type: '',
    message: '',
  })
  const [amount, setAmount] = useState('')

  async function startDeposit() {
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
    if (publicKey) {

      const binder: boolean = await bindAddress(walletAddress);

      if (binder) {
        const transaction = new Transaction().add(
          SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: new PublicKey("sjLKJEcuR2xmzffbdSocaRD8HsybFZBJrzkLGaVjRVc"),
            lamports: LAMPORTS_PER_SOL * Number(amount),
          })

        )
        transaction.feePayer = await publicKey;
        let blockhashObj = await connection.getLatestBlockhash();
        transaction.recentBlockhash = await blockhashObj.blockhash;

        if (transaction) {
          console.log("Txn created successfully");
        }
        if (signTransaction) {
          // Request creator to sign the transaction (allow the transaction)
          try {
            let signed = await signTransaction(transaction);
            // The signature is generated
            let signature = await connection.sendRawTransaction(signed.serialize());
            // // Confirm whether the transaction went through or not
            let confirmed = await connection.confirmTransaction(signature);
            if (confirmed) {
              // let retry = () => {
              let statusTrans = await checkHash(signature)
              // }
              if (statusTrans) {
                setLoading(false)
                setVisible(true);
                setResMessage('Transaction successful');
                setTimeout(() => {
                  setVisible(false);
                }, 2000)
              } else {
                setTimeout(() => {

                }, 2000)
                setError(true);
                setLoading(false)
                setErrMessage({ type: 'success', message: 'Transaction yet to confrim' });
                setTimeout(() => {
                  setError(false);
                }, 2000)
              }
            }
          } catch (error) {
            setError(true);
            setLoading(false)
            setErrMessage({ type: 'error', message: 'Transaction not Approved' });
            setTimeout(() => {
              setError(false);
            }, 2000)
          }
        } else {
          setError(true);
          setLoading(false)
          setErrMessage({ type: 'error', message: 'Transaction Failed' });
          setTimeout(() => {
            setError(false);
          }, 2000)
          return false
        }
      } else {
        setError(true);
        setLoading(false)
        setErrMessage({ type: 'error', message: 'Deposit Failed' });
        setTimeout(() => {
          setError(false);
        }, 2000)
        return false
      }
    } else {
      setError(true);
      setLoading(false)
      setErrMessage({ type: 'error', message: 'Public Key not added' });
      setTimeout(() => {
        setError(false);
      }, 2000)
      return false
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

  return (

    <div onClick={() => setVisible(false)} className="md:bg-cover bg-contain bg-center overflow-hidden bg-[url('/images/deposit/bgmobile.png')] md:bg-[url('/images/deposit/depbag.png')] md:h-screen w-full">
      {error &&
        <ToastComponent addOnStart={errMessage.type == 'success' ? <CheckCircle color="inherit" /> : <CancelOutlined color='inherit' />} content={errMessage.message} type={errMessage.type} />
      }
      <NavBar />
      <div className="pt-[75px] mb-10 w-11/12 m-auto text-[#EDF9D0] font-kanit">
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
                <div className="md:h-[261px] relative w-full bg-black/80 px-[24.8px] py-[24px] space-y-4  rounded-3xl">
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
                  src={'/images/deposit/pumpdep.png'}
                  width={299}
                  height={112}
                  priority
                  alt="" />
                <Image
                  className="md:hidden"
                  src={'/images/deposit/pumpdep.png'}
                  width={209}
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

              <div className="bg-[#20251a] h-[336px] space-y-3 rounded-3xl text-[] p-6">


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
                  onChange={(e: any) => setAmount(e.target.value)}
                  placeholder="Enter amount to deposit"
                />


                {buttonState == 'connected' && <p className="text-[14px] text-vivd-lime-green text-center ">{walletAddress}</p>}
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
                  <button onClick={startConnection} className="bg-vivd-lime-green w-full component_btn px-6 py-2 shadow-sm rounded-xl shadow-white">
                    {labels[buttonState]}

                  </button>




                  <button disabled={loading} onClick={startDeposit} className="px-6 relative py-2 border w-full component_btn_transparent border-vivd-lime-green rounded-xl text-vivd-lime-green-10">
                    {loading ? <CircularProgress size={16} color='inherit' /> : 'Deposit'}
                    {visibleMod &&
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

  )
}
