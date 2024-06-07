"use client"
import Faqs from "../../components/faqs/faqs";
import Footer from "../../components/footer/footer";
import React, { useEffect, useRef, useState } from "react";
import Tokenomics from "../../components/tokenomics/tokennomics";
import Image from "next/image";
import NavBar from "../../components/navbar/navbar";
import TimerCount from "../../components/timerComponent/timer";
import CustomInput from "../../components/customInput/customInput";
import { labels, stages, tasksCount } from "@/lib/constants/app_images";
import axios from "axios";
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';

import { ToastComponent } from "../../components/toastComponent/toastComponent";
import { ArrowDownward, ArrowUpward, CancelOutlined, CheckCircle, ContentPasteSearchOutlined, ExpandCircleDown, ExpandLessRounded, ExpandMoreRounded, FolderCopy } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";


const Cookies = require('js-cookie');

import { Keypair, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionMessage, VersionedTransaction } from "@solana/web3.js";
import { AnchorProvider, Idl, Provider, getProvider, setProvider } from "@coral-xyz/anchor";
import { BN, Program } from "@project-serum/anchor";
import { IDL, TransferSol, } from "@/lib/idl/pre_sale";
import { getAssociatedTokenAddressSync, getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import { TOKEN_PROGRAM_ID } from "@coral-xyz/anchor/dist/cjs/utils/token";
import { UnlockingItem, getUserBalance, loadBalances } from "./utilities";


export default function PresaleComp() {
  let encrypt = Cookies.get('encrypt_id');
  const { connection } = useConnection();
  const [showPopup, setShowPopup] = useState(false);
  const [openSmall, setOpenSmall] = React.useState(false);
  const [connected, setConnected] = useState(false)
  const [visible, setVisible] = useState(false)
  const [visibleMod, setVisibleMod] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [errMessage, setErrMessage] = useState({
    type: '',
    message: '',
  })


  const [expandsClaims, setExpandsClaims] = useState(false);
  //This checks the whitelist
  const [checkWl, setCheckWl] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')
  const [amount, setAmount] = useState<any>('')
  const { sendTransaction, signTransaction, wallets, wallet } = useWallet();
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [copied, setCopied] = useState(false);
  const [coinBalPercentage, setCoinBalPercentage] = useState(0);
  const [userBalance, setUserBalance] = useState(0);
  const [updateD, setUpdate] = useState(0);
  const [userWalletAddress, setUserWalletAddress] = useState("");
  const [sentWalletAddress, setSentWalletAddress] = useState("CgVh6qemnouBuc5BPPcA3nWzdHfYDSqnaswjKV3b249b");
  const [showBalance, setShowBalance] = useState({
    status: false,
    balance: 0,
  })
  const [unlocking, setUnlocking] = useState<UnlockingItem[]>([
    {
      amount: 0,
      time: Number(Date.now() * 1000),
    }
  ]);
  const ref = useRef<HTMLUListElement>(null);
  // Wallet button
  const { setVisible: setModalVisible } = useWalletModal();

  const { buttonState, onConnect, onDisconnect, publicKey, walletIcon, walletName } = useWalletMultiButton({
    onSelectWallet() {
      setModalVisible(true);
    },
  });

  const anchorWallet = useAnchorWallet();
  useEffect(() => {
    if (onConnect) {
      onConnect();
    }
    const anchorProvider = anchorWallet && new AnchorProvider(connection, anchorWallet, {});
    if (anchorProvider) {
      setProvider(anchorProvider);
    }
  }, [anchorWallet, connection])



  useEffect(() => {
    if (!publicKey) {
      setConnected(false);
    } else {
      setConnected(true);
      setWalletAddress(publicKey?.toBase58());
    }

  }, [publicKey])
  useEffect(() => {
    (async () => {
      // let ancProvider = await getProvider();
      const anchorProvider = anchorWallet && new AnchorProvider(connection, anchorWallet, {});
      if (!anchorProvider || !publicKey) {
        return;
      }
      const { walletAddressSale, conversionRate, balance, percentage, unlockingTimes } = await loadBalances(anchorProvider, amount, publicKey)
      setConvertedAmount(conversionRate);
      setCoinBalPercentage(percentage)
      setUserBalance(balance)
      setUnlocking(unlockingTimes as [])
    })()

  }, [anchorWallet, amount, updateD])

  async function checkWhitelistStatus() {

    setLoading(true)
    if (walletAddress == '') {
      setError(true);
      setLoading(false)
      setErrMessage({ type: 'error', message: 'Kindly enter a wallet address' });
      setTimeout(() => {
        setError(false);
      }, 2000)
      return false
    }

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://evp-user-service-cea2e4kz5q-uc.a.run.app/get-user-details',
      headers: {
        'Authorization': `${encrypt}`,
        'apiKey': '59f638c9bf54d2634fe0a89b6ffed42dcfec2a6e2b95bcdcf3f314cf427a9016'
      }
    };
    try {
      const response = await axios.request(config);
      setError(true);
      setLoading(false)
      setErrMessage({ type: 'success', message: response?.data.message });
      setTimeout(() => {
        setError(false);
      }, 2000)
    } catch (error: any) {
      if (error.response) {
        setError(true);
        setLoading(false)
        setErrMessage({ type: 'error', message: error.response?.data.message });
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
  function copyClip(type: string) {
    if (type == "yourAddress") {
      navigator.clipboard.writeText(walletAddress);
      setError(true);
      setErrMessage({ type: 'success', message: 'Address Copied' });
      setTimeout(() => {
        setError(false);
      }, 2000)
    } else {
      navigator.clipboard.writeText(sentWalletAddress);
      setError(true);
      setErrMessage({ type: 'success', message: 'Transfer to Address Copied' });
      setTimeout(() => {
        setError(false);
      }, 2000)
    }

  }


  async function buyPump() {
    if (!connected) {
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

    if (!publicKey) {
      setError(true);
      setLoading(false)
      setErrMessage({ type: 'error', message: 'Wallet not connected' });
      setTimeout(() => {
        setError(false);
      }, 2000)
      return false
    }

    if (!wallet) {
      return;
    }

    let ancProvider = getProvider();
    const programId = new PublicKey("H1gw4ZtABwmBhDCcKravEryyNodDGQYP1qVQySTTZqN6");
    const program = new Program<TransferSol>(IDL, programId, ancProvider);
    let saleDetails = new PublicKey('CgVh6qemnouBuc5BPPcA3nWzdHfYDSqnaswjKV3b249b')
    // Define the accounts for the transfer_sol context
    const [buyerPDA, buyerBump] = await PublicKey.findProgramAddress(
      [
        Buffer.from("buyer"),
        publicKey.toBuffer(),
        saleDetails.toBuffer(),
      ],
      program.programId
    );

    if (!anchorWallet) return;
    try {
      const ix = await program.methods.transferSol(
        new BN(Number(convertedAmount))
      ).accounts({
        sale: saleDetails,
        buyer: buyerPDA,
        recipient: new PublicKey('5vUcLGZ96onngcGozSus2ipfU7iMVkAtx4nmtKmXoSUT'),
        payer: publicKey,
        systemProgram: SystemProgram.programId,
      }).signers([]).rpc();

      console.log(ix);
      let confirmed = await connection.confirmTransaction(ix);

      // console.log(confirmed);
      if (confirmed) {
        setLoading(false)
        setError(true);
        setUpdate(Math.random())
        setErrMessage({ type: 'success', message: 'Purchase Successful' });
        setTimeout(() => {
          setError(false);
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

    } catch (error) {
      setError(true);
      setLoading(false)
      setErrMessage({ type: 'error', message: 'Transaction Rejected' });
      setTimeout(() => {
        setError(false);
      }, 2000)
    }
  }

  async function checkBalance() {
    if (userWalletAddress == "") {
      setError(true);
      setLoading(false)
      setErrMessage({ type: 'error', message: 'Enter a valid address' });
      setTimeout(() => {
        setError(false);
      }, 2000)
      return false
    }
    let userPub = new PublicKey(userWalletAddress)
    let ancProvider = getProvider();
    let result = await getUserBalance(ancProvider, userPub);
    if (result.status != false) {
      setShowBalance({ status: true, balance: result.balance })
    } else {
      setError(true);
      setLoading(false)
      setErrMessage({ type: 'error', message: 'Account Not Found' });
      setTimeout(() => {
        setError(false);
      }, 2000)
      return false
    }
  }
  async function getRates(value: string) {

    setAmount(value);
    return
  }



  return (
    <div onClick={() => setVisible(false)} className="bg-cover overflow-hidden bg-[url('/images/background.jpeg')] h-full w-screen">
      {error &&
        <ToastComponent addOnStart={errMessage.type == 'success' ? <CheckCircle color="inherit" /> : <CancelOutlined color='inherit' />} content={errMessage.message} type={errMessage.type} />
      }
      <div>
        <div className="sm:pb-10 md:pb-20  overflow-hidden bg-cover bg-[url('/images/presale/presalebg.jpeg')] md:bg-[url('/images/presale/presalebg.jpeg')] z-0">

          <div className="z-10 flex flex-col space-y-8 relative">
            <NavBar />
            {!checkWl ?

              <div className="w-full md:w-10/12 m-auto pt-36 relative">
                <Image
                  className="max-w-full"
                  src={'/images/presale/horizontal.png'}
                  width={1120}
                  height={80}
                  priority
                  alt="" />

                <div className="pt-20 px-5 pb-10 relative bg-[#10130DB2] font-kanit text-[#EDF9D0] rounded-2xl ">
                  <div className="flex flex-row absolute items-center top-[-40px] md:top-[-65px]  w-full justify-center">
                    <Image
                      className="inline-flex max-w-[209px] md:max-w-[299px] z-50 max-h-[81px] md:max-h-[112px]"
                      src={"/images/presale/pumppresale.png"}
                      width={299}
                      height={112}
                      priority
                      alt=""
                    />
                  </div>
                  {/* Pop Up Balance Image */}
                  {showBalance.status &&
                    <div className="absolute h-full w-full top-0 right-0 rounded-3xl flex flex-row justify-center items-center m-auto bg-black/50 z-40">
                      <div className={`bg-gradient-to-r shrink-0 w-4/12 mb-5 from-[#A5E314]/50 to-black  p-0.5 rounded-2xl`}>
                        <div className="py-10 p-2 space-y-2 text-start  bg-black/80 rounded-2xl">
                          <div className="text-center" onClick={() => { setShowBalance({ status: false, balance: 0 }) }}>
                            <div><span className="text-[#C3EC62]"></span>$PUMP Balance</div>
                            <span className=" text-[64px] text-center w-full font-gameria font-[400] text-[#C3EC62]">${showBalance.balance <= 0 ? "000.000" : showBalance.balance.toLocaleString()}</span>
                          </div>

                        </div>
                      </div>
                    </div>
                  }
                  <div className="md:w-5/12 m-auto">
                    <TimerCount />

                  </div>
                  <div className="flex flex-col md:flex-row justify-between gap-14 md:items-center">
                    {/* First Box */}
                    <div className="basis-1/2  order-2 md:order-1 overflow-hidden rounded-2xl  bg-gradient-to-r from-[#89bd34] p-[1px] presaleGradient">
                      <div className="bg-[#282F20E9] p-4 rounded-2xl md:h-full ">
                        <div className="flex flex-row items-center justify-between">
                          <p>Presale Progress</p>
                          <p>Raised <span className="text-[#C3EC62] text-[24px] font-gameria">$0</span></p>
                        </div>
                        {/* <div className="flex flex-row items-center justify-between">
                          <p className="text-[#C3EC62]">Private Round</p>
                          <p>Hard Cap <span className="text-[#C3EC62] text-[24px] font-gameria">$100M</span></p>
                        </div> */}
                        {/* Rectangle */}
                        <div className="bg-[#374C07] my-4 h-[4px] rounded-full w-full">
                          <div className={`bg-[#A5E314] rounded-full h-[4px]`} style={{ width: `${coinBalPercentage}%` }}>

                          </div>
                          <div style={{ left: `${Math.floor(coinBalPercentage)}%` }} className={`bg-[#A5E314] relative top-[-12px] h-[20px] rounded-full border w-[20px]`}>

                          </div>
                        </div>

                        <div className="space-y-2 mb-5">
                          <p>Purchased $PUMP Balance</p>
                          <p className="font-gameria font-300 text-[48px]">
                            ${!publicKey ? "0.00" : userBalance.toLocaleString()}
                          </p>
                          <p>One token, Endless possibilities. Purchased token would be available for claim at TGE.</p>
                          <div className="flex flex-col md:flex-row justify-center gap-x-4 ">
                            <p><span className="text-[#C3EC62]">Starts:</span>  15/05/2024 (12:00 UTC)</p>
                            <p><span className="text-[#C3EC62]">Ends:</span> 16/05/2024 (12:00 UTC)</p>
                          </div>
                        </div>

                        <div style={expandsClaims ? { height: "100%", } : { height: "150px", overflow: "hidden" }} className="relative">
                          <div className="absolute h-[50px] bottom-0 rounded-t-2xl bottom-0 w-full bg-gradient-to-t from-[#2b331f] to-[#2b331f]/20 z-50 flex flex-row justify-center items-center m-auto">
                            <div onClick={() => setExpandsClaims(!expandsClaims)} className={`
                            animate-pulse animate-infinite animate-duration-1000 animate-ease-out
                            rounded-full scaleAnimation right-[50%] bg-[#A5E314] shadow font-bold `}>
                              {!expandsClaims ? <ExpandMoreRounded /> : <ExpandLessRounded />}
                            </div>
                          </div>

                          {unlocking.length > 0 && unlocking.map((item, index) => {
                            return (
                              <div key={`${index}-${item}`} className={`bg-gradient-to-r shrink-0 w-full mb-2 from-[#A5E314]/50 to-black  p-0.5 rounded-2xl`}>
                                <div className=" w-full  flex flex-col md:flex-row items-center justify-between relative p-2 space-y-2 text-start  bg-black/80 rounded-2xl">
                                  <div className="">
                                    <div><span className="font-gameria text-[#C3EC62]">Date:</span>{new Date(item.time * 1000).toLocaleDateString()} </div>
                                    <div className="flex flex-row md:flex-col gap-2 md:gap-0 ">
                                      <span className=" text-[22px] w-full font-gameria font-[400] text-[#C3EC62]">Amount:</span>
                                      <span className=" text-[22px] w-full font-gameria font-[400]">{item.amount.toLocaleString()}</span>
                                    </div>
                                  </div>
                                  <div>
                                    <button className="bg-[#A5E314] p-[10px] font-bold  w-[233px] rounded-2xl text-[#303827]">Claim</button>
                                  </div>
                                </div>
                              </div>
                            )
                          })}

                        </div>
                        {/* Social Icons and Total Prices  */}
                        <div className="flex flex-col md:flex-row py-2 justify-between">
                          <div className="flex order-2 md:order-1  flex-row justify-start  space-x-2">
                            <a href="https://x.com/Pump_Militia" target="_blank">
                              <Image
                                className="justify-start items-start inline-flex max-w-[32px] max-h-[32px]"
                                src={"/svg/twitter.svg"}
                                width={32}
                                height={32}
                                priority
                                alt=""
                              />
                            </a>
                            <a href="https://t.me/PumpMilitia" target="_blank">
                              <Image
                                className="justify-start items-start inline-flex max-w-[32px] max-h-[32px]"
                                src={"/svg/telegram.svg"}
                                width={32}
                                height={32}
                                priority
                                alt=""
                              />
                            </a>
                            <a href="https://discord.com/invite/tvZGAP4Qt8" target="_blank">
                              <Image
                                className="justify-start items-start inline-flex max-w-[32px] max-h-[32px]"
                                src={"/svg/discord.svg"}
                                width={32}
                                height={32}
                                priority
                                alt=""
                              />
                            </a>
                            <a href="https://www.tiktok.com/@pump.militia" target="_blank">
                              <Image
                                className="justify-start items-start inline-flex max-w-[32px] max-h-[32px]"
                                src={"/svg/tiktok.svg"}
                                width={32}
                                height={32}
                                priority
                                alt=""
                              />
                            </a>
                            <a href=" https://youtube.com/@PumpMilitia" target="_blank">
                              <Image
                                className="justify-start items-start inline-flex max-w-[32px] max-h-[32px]"
                                src={"/svg/youtube.svg"}
                                width={32}
                                height={32}
                                priority
                                alt=""
                              />
                            </a>
                            <a href="https://medium.com/@pumpmilitia" target="_blank">
                              <Image
                                className="justify-start items-start inline-flex max-w-[32px] max-h-[32px]"
                                src={"/svg/medium.svg"}
                                width={32}
                                height={32}
                                priority
                                alt=""
                              />
                            </a>

                          </div>

                          <div className="order-1 md:order-2 mb-3 md:mb-0">
                            <p>Token Prices: <span className="text-[#C3EC62] text-[24px] font-gameria">$0.0051</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Second Box */}
                    <div className="basis-1/2  order-1 md:order-2">
                      <div className="bg-gradient-to-l from-[#89bd34] rounded-2xl  p-0.5">
                        <div className="basis-1/2 rounded-2xl p-4 md:h-full  bg-[#282F20E9] presaleGradient">
                          <div className="flex flex-row items-center justify-between">
                            <p>Pay with <span className="text-[#C3EC62] text-[24px] font-gameria mx-3">SOL</span> <span className="text-[#757A6F] text-[10px]">  Min buy 0.6</span></p>
                            <p>Receive <span className="text-[#C3EC62] text-[24px] font-gameria">$PUMP</span></p>
                          </div>

                          <div className="space-y-4 mb-5">
                            <div className="flex flex-col md:flex-row gap-4">
                              <CustomInput
                                className=""
                                sx={{ marginBottom: '10px' }}
                                placeholder="Enter Amount"
                                type="number"
                                onChange={(e) => getRates(e.target.value)}
                                addOnStart={<Image
                                  className=""
                                  src={'/images/presale/protocol.png'}
                                  width={24}
                                  height={24}
                                  priority
                                  alt="" />}
                              />
                              <CustomInput
                                className=""
                                // onChange={(e) => setPassword(e.target.value)}
                                sx={{ marginBottom: '10px' }}
                                placeholder="PUMP you'd receive"
                                type="text"
                                value={convertedAmount}
                                onChange={(e) => { }}
                                addOnStart={<Image
                                  className=""
                                  src={'/images/presale/pumplogo.png'}
                                  width={24}
                                  height={24}
                                  priority
                                  alt="" />}
                              />
                            </div>
                            {buttonState == 'connected' && <p className="text-[14px] text-vivd-lime-green text-center ">
                              {`${walletAddress.slice(0, 7)}....${walletAddress.slice(-3, walletAddress.length)}`} <span onClick={() => copyClip('yourAddress')} className=''><FolderCopy /></span>
                            </p>}
                            <div className="flex flex-col md:flex-row gap-4 relative">
                              {visible &&
                                <span style={{ position: 'absolute', zIndex: 9999999, left: '100px', top: '30px' }}>
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

                              <button onClick={() => buyPump()} className="px-6 py-3 border w-full component_btn_transparent buttonTracker relative border-vivd-lime-green rounded-xl text-vivd-lime-green-10">
                                {loading ? <CircularProgress size={16} color='inherit' /> : 'Buy Now'}

                                {visibleMod &&
                                  <div className="bg-[#EDF9D0] absolute top-[-20px] right-0 p-2 text-[#181C13] text-[12px] rounded-2xl">
                                    Connect your wallet first
                                  </div>
                                }
                              </button>
                            </div>
                            <button className="px-6 py-3 font-gameria border w-full buttonTracker component_btn_transparent border-vivd-lime-green rounded-xl text-vivd-lime-green-10">
                              Whitelist Status
                            </button>

                            <div className="space-y-4">
                              <span className="italic text-[#ffffff]/50">"if you cannot connect"</span>
                              <p>Transfer to: <span className="text-[14px] text-vivd-lime-green text-center ">
                                {`${sentWalletAddress.slice(0, 30)}....${sentWalletAddress.slice(-3, sentWalletAddress.length)}`} <span onClick={() => copyClip('transAddress')} className=''><FolderCopy sx={{ fontSize: '14px' }} /></span>
                              </span></p>

                              <div className="flex flex-col md:flex-row items-center justify-between gap-2">

                                <CustomInput
                                  addOnStart={<Image
                                    className=""
                                    src={'/images/presale/pumplogo.png'}
                                    width={24}
                                    height={24}
                                    priority
                                    alt="" />}
                                  placeholder="Enter wallet address"
                                  type="text"
                                  onChange={(e) => setUserWalletAddress(e.target.value)}
                                />
                                <button onClick={checkBalance} className="mt-2 bg-vivd-lime-green buttonTracker w-10/12 md:w-6/12 component_btn px-6 py-3 shadow-sm rounded-xl shadow-white">
                                  Check Balance
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <Image
                  className="max-w-full"
                  src={'/images/presale/horizontal.png'}
                  width={1120}
                  height={80}
                  priority
                  alt="" />
              </div>
              :
              <div className="w-full md:w-10/12 m-auto pt-36">
                <Image
                  className="max-w-full"
                  src={'/images/presale/horizontal.png'}
                  width={1120}
                  height={80}
                  priority
                  alt="" />
                <div className="pt-20 px-5 pb-10 relative bg-[#10130DB2] font-kanit text-[#EDF9D0] rounded-2xl ">
                  <div className="flex flex-row absolute items-center top-[-40px] md:top-[-65px]  w-full justify-center">
                    <Image
                      className="inline-flex max-w-[209px] md:max-w-[299px] max-h-[81px] md:max-h-[112px]"
                      src={"/images/presale/pumppresale.png"}
                      width={299}
                      height={112}
                      priority
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col md:flex-row justify-center items-center ">

                    <div className="basis-1/2 order-1 md:order-2">

                      <div className="bg-gradient-to-t from-[#89bd34] rounded-2xl overflow-hidden p-0.5">
                        <div className=" flex flex-row justify-center items-center rounded-2xl p-4 md:h-[316px]  bg-[#282F20E9] presaleGradient">
                          <div className="space-y-8 mb-5 w-full">
                            <div className="flex flex-col md:flex-row gap-4">
                              <CustomInput
                                className="w-full"
                                placeholder="Enter your wallet address"
                                type="text"
                                onChange={(e) => setWalletAddress(e.target.value)}
                                addOnStart={
                                  <Image
                                    className=""
                                    src={'/images/presale/protocol.png'}
                                    width={24}
                                    height={24}
                                    priority
                                    alt=""
                                  />
                                }
                              />
                            </div>
                            <button onClick={() => checkWhitelistStatus()} className="px-6 py-4 buttonTracker font-gameria border w-full text-[#161911] bg-vivd-lime-green  hover:bg-[#466417]  border-vivd-lime-green rounded-xl">
                              {loading ? <CircularProgress color="inherit" size={16} /> : 'Check  Whitelist Status'}
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <Image
                  className="max-w-full"
                  src={'/images/presale/horizontal.png'}
                  width={1120}
                  height={80}
                  priority
                  alt="" />
              </div>
            }
          </div>
        </div>

      </div >
      {/* Instructions on how to buy it */}
      <div className="bg-[#20251a] py-10 pb-40">
        <div className="w-10/12 text-[#EDF9D0] flex flex-col md:flex-row gap-x-4 items-start m-auto ">
          <div className="boderToken basis-1/4 ">
            <div className="flex flex-col px-4  md:px-10 relative space-y-4">
              <div className='font-gameria leading-[50px] text-[#EDF9D0] text-[56px]'>
                <Image
                  className=""
                  src={'/images/presale/howtobuy.png'}
                  width={163}
                  height={112}
                  priority
                  alt="" />
              </div>
              <div className='font-kanit text-vivd-lime-green-10 text-[16px]'>
                Easy four steps to purchasing $Pump
              </div>
            </div>
          </div>

          <div className="basis-3/4 order-2 md:order-1 space-y-4">
            <div className="w-full overflow-hidden">
              <div className="flex overflow-scroll md:overflow-hidden w-[340px] md:w-full md:gap-y-5  gap-x-5 pt-3">
                {tasksCount.map((task, index) => {
                  let gradient = index % 2 != 0 ? 'bg-gradient-to-l md:bg-gradient-to-b' : 'bg-gradient-to-r md:bg-gradient-to-t';
                  let hidden = index == tasksCount.length - 1 && 'md:hidden';
                  return (
                    <div key={`${index}-${task}`} className={`${gradient} ${hidden} h-[281px] shrink-0 w-[274px] md:max-w-[284px]  from-[#A5E314]/50 to-black  p-0.5 rounded-3xl`}>
                      <div className=" w-full h-full flex flex-row items-center justify-center relative px-[10px] md:px-[34.7px] py-[10px] md:py-[13px] space-y-2 text-start  bg-black/80 rounded-3xl">
                        <div className="space-y-4 md:space-y-0">
                          <div className="flex flex-row leading-tight justify-start">
                            <Image
                              className=""
                              src={task.image}
                              width={80}
                              height={80}
                              priority
                              alt="" />
                          </div>
                          <h4 className=" text-[22px] w-full font-gameria font-[400]">{task.title}</h4>
                          <p className=" text-[16px]">{task.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-t from-[#A5E314]/50 to-black p-0.5 rounded-3xl">
                <div className=" relative overflow-hidden h-[229px] items-center justify-center w-full bg-black/70 px-[24.8px]  rounded-3xl">
                  <Image
                    style={{ zIndex: 0 }}
                    className="absolute top-[-10px] right-0"
                    src={'/images/presale/sketch.png'}
                    width={650}
                    height={400}
                    priority
                    alt="" />
                  <div style={{ zIndex: 14 }} className="py-3 absolute h-full w-full bg-gradient-to-r from-[#161a13]/60 to-black/10">
                    <Image
                      className=""
                      src={'/images/presale/menu.png'}
                      width={80}
                      height={80}
                      priority
                      alt="" />
                    <h4 className="text-[24px] font-gameria font-[500]">Claim from dashboard</h4>
                    <p className="text-[15px] font-[300]">When presales end, connect your wallet and claim your $PUMP tokens from the dashboard.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stages */}
      <div className="m-auto  bg-[#20251a] ">
        <div className="topBorder  text-[#EDF9D0] relative">
          <div className="w-full m-auto top-[-70px] absolute justify-center items-center flex">
            <Image
              className=""
              src={'/images/presale/salestage.png'}
              width={273}
              height={112}
              priority
              alt="" />
          </div>

          <div className="md:w-11/12  m-auto pt-5">
            <div className="text-center py-10">
              <p>Join now and secure your stake early in the Pump Militia project.</p>
            </div>
            <div className="flex flex-col md:flex-row overflow-hidden box-content  rounded-3xl px-3 md:py-24   bg-cover bg-top  bg-[url('/images/presale/stagesbg.png')]  justify-center items-center md:gap-x-8 m-auto">
              {stages.map((stage, index) => {
                let gradient = index % 2 != 0 ? 'bg-gradient-to-l md:bg-gradient-to-b' : 'bg-gradient-to-r md:bg-gradient-to-t';
                let width = index % 2 == 0 ? 'w-[320px]' : 'w-[320px] md:w-[398px]';
                let height = index % 2 == 0 ? 'h-[320px]' : 'h-[441px]';
                let order = index == 1 ? 'order-1 md:order-2' : 'order-2';
                let border = '';
                // let border = index == 0 ? 'border-t-2 md:border-e-2 md:border-t-0 md:p-e-8' : index == 2 ? 'border-t-2 md:border-t-0 md:border-s-2 md:p-s-8' : '';
                return (
                  <div key={`${index}-${stage}`} className={`border-[#A5E314] ${order} ${border} p-6`}>
                    <div className={`${gradient} basis-1/2 from-[#A5E314]/40 to-black/20 flex flex-row justify-center p-0.5 rounded-3xl`}>
                      <div className={`${width} ${height} flex flex-row justify-center items-center   text-start  bg-black/70 rounded-3xl`}>
                        <div className="space-y-8 relative px-[10px] md:px-[34.7px] py-[10px] md:py-[13px] w-full">
                          <div className="flex flex-row justify-between items-center">
                            <h4 className="text-[24px] w-full font-gameria font-[500]">{stage.title}</h4>
                            {index == 1 &&
                              <Image
                                className=""
                                src={"/svg/icon_logo_2.svg"}
                                width={69}
                                height={69}
                                priority
                                alt=""
                              />
                            }
                          </div>
                          <div className="flex flex-row justify-between text-[12px]">
                            <div className="w-full">
                              <p>START DATE</p>
                              <p>{stage.startDate}</p>
                            </div>
                            <div className="w-full">
                              <p>TOKEN PRICE</p>
                              <p>{stage.tokePrice}</p>
                            </div>
                          </div>
                          <div className="flex flex-row justify-between text-[12px]">
                            <div className=" w-full">
                              <p>END DATE</p>
                              <p>{stage.endDate}</p>
                            </div>
                            <div className=" w-full">
                              <p>MIN INVESTMENT</p>
                              <p>{stage.minInvestment}</p>
                            </div>
                          </div>
                          <div className="flex flex-row justify-between text-[12px]">
                            <div className=" w-full">
                              <p>HARD CAP</p>
                              <p>{stage.hardCap}</p>
                            </div>
                            <div className=" w-full">
                              <p>MAX INVESTMENT</p>
                              <p>{stage.maxInvestment}</p>
                            </div>
                          </div>
                          {index == 1 &&
                            <div>
                              <button className="px-6 relative py-2 border w-full bg-[#A5E314] buttonTracker h-border-vivd-lime-green rounded-xl text-[#303827]">
                                Buy $PUMP Token
                              </button>
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <Tokenomics />
      <Faqs />
      <Footer />
    </div >
  )
}
