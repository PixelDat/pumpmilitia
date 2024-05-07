"use client"
import Hero from "../components/hero/hero";
import Preview from "../components/preview/preview";
import Features from "../components/features/features";
import Partners from "../components/partners/partners";
import MinePump from "../components/mine_pump/minePump";
import RoadMap from "../components/roadmap/roadmap";
import Faqs from "../components/faqs/faqs";
import Footer from "../components/footer/footer";
import Onboarding from "../components/onboarding/onboarding";
import { useEffect, useState } from "react";
import Tokenomics from "../components/tokenomics/tokennomics";
import CustomButton from "../components/buttons/customButton";
import Image from "next/image";
import NavBar from "../components/navbar/navbar";
import TimerCount from "../components/timerComponent/timer";
import CustomInput from "../components/customInput/customInput";
import { stages, tasksCount } from "@/lib/constants/app_images";
import axios from "axios";
import { ToastComponent } from "../components/toastComponent/toastComponent";
import { CancelOutlined, CheckCircle } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
const Cookies = require('js-cookie');


export default function Presale() {
  let encrypt = Cookies.get('encrypt_id');
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errMessage, setErrMessage] = useState({
    type: '',
    message: '',
  })

  const [checkWl, setCheckWl] = useState(true)
  const [walletAddress, setWalletAddress] = useState('')

  async function checkWhitelistStatus() {
    // console.log('called ')
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
    // if (!encrypt) {
    //   setError(true);
    //   setLoading(false)
    //   setErrMessage({ type: 'error', message: 'Kindly Login' });
    //   setTimeout(() => {
    //     setError(false);
    //   }, 2000)
    //   return false
    // }

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
  return (

    <div className="bg-cover overflow-hidden bg-[url('/images/background.png')] h-full w-screen">
      {error &&
        <ToastComponent addOnStart={errMessage.type == 'success' ? <CheckCircle color="inherit" /> : <CancelOutlined color='inherit' />} content={errMessage.message} type={errMessage.type} />
      }
      <div>
        <div className="sm:pb-10 md:pb-20  overflow-hidden bg-cover bg-[url('/images/presale/presalebg.png')] md:bg-[url('/images/presale/presalebg.png')] z-0">

          <div className="z-10 flex flex-col space-y-8 relative">
            <NavBar />
            {!checkWl ?

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
                  <div className="flex flex-col md:flex-row justify-between gap-14 md:items-end">
                    <div className="basis-1/2  order-2 md:order-1 overflow-hidden rounded-2xl  bg-gradient-to-r from-[#89bd34] p-[1px] presaleGradient">
                      <div className="bg-[#282F20E9] p-4 rounded-2xl md:h-[383px] ">
                        <div className="flex flex-row items-center justify-between">
                          <p>Presale Progress</p>
                          <p>Raised <span className="text-[#C3EC62] text-[24px] font-gameria">$100M</span></p>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                          <p className="text-[#C3EC62]">Private Round</p>
                          <p>Hard Cap <span className="text-[#C3EC62] text-[24px] font-gameria">$100M</span></p>
                        </div>
                        {/* Rectangle */}
                        <div className="bg-[#374C07] my-4 h-[4px] rounded-full w-full">
                          <div className="bg-[#A5E314] rounded-full h-[4px] w-[192px]">

                          </div>
                          <div className="bg-[#A5E314] relative top-[-12px] left-[192px] h-[20px] rounded-full border w-[20px]">

                          </div>
                        </div>

                        <div className="space-y-2 mb-5">
                          <p>Purchased $PUMP Balance</p>
                          <p className="font-gameria font-300 text-[48px]">$0.0089</p>
                          <p>One token, Endless possibilities. Purchased token would be available for claim at TGE.</p>
                          <div className="flex flex-col md:flex-row gap-x-4 ">
                            <p><span className="text-[#C3EC62]">Starts:</span>  15/05/2024 (12:00 UTC)</p>
                            <p><span className="text-[#C3EC62]">Ends:</span> 16/05/2024 (12:00 UTC)</p>
                          </div>
                        </div>

                        {/* Social Icons and Total Prices  */}
                        <div className="flex flex-col md:flex-row justify-between">
                          <div className="flex order-2 md:order-1 mb-4 flex-row justify-start  items-start space-x-4">
                            <Image
                              className="justify-center items-center inline-flex max-w-[30px] max-h-[90px]"
                              src={"/svg/vert_border.svg"}
                              width={32}
                              height={40}
                              priority
                              alt=""
                            />
                            <a href="https://x.com/PumpMilitia" target="_blank">
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

                            <Image
                              className="justify-center items-center inline-flex max-w-[30px] max-h-[70px]"
                              src={"/svg/vert_border.svg"}
                              width={32}
                              height={32}
                              priority
                              alt=""
                            />

                          </div>

                          <div className="order-1 md:order-2 mb-3 md:mb-0">
                            <p>Token Prices: <span className="text-[#C3EC62] text-[24px] font-gameria">$0.0051</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="basis-1/2 order-1 md:order-2">
                      <div>
                        <TimerCount />

                      </div>
                      <div className="bg-gradient-to-l from-[#89bd34] rounded-2xl overflow-hidden p-0.5">
                        <div className="basis-1/2 rounded-2xl p-4 md:h-[316px]  bg-[#282F20E9] presaleGradient">
                          <div className="flex flex-row items-center justify-between">
                            <p>Pay with <span className="text-[#C3EC62] text-[24px] font-gameria mx-3">SOL</span> <span className="text-[#757A6F] text-[10px]">  Min buy 0.6</span></p>
                            <p>Receive <span className="text-[#C3EC62] text-[24px] font-gameria">$PUMP</span></p>
                          </div>

                          <div className="space-y-8 mb-5">
                            <div className="flex flex-col md:flex-row gap-4">
                              <CustomInput
                                className=""
                                sx={{ marginBottom: '10px' }}
                                placeholder="Enter Amount"
                                type="text"
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
                                addOnStart={<Image
                                  className=""
                                  src={'/images/presale/pumplogo.png'}
                                  width={24}
                                  height={24}
                                  priority
                                  alt="" />}
                              />
                            </div>

                            <div className="flex flex-col md:flex-row gap-4">
                              <button className="bg-vivd-lime-green w-full buttonTracker component_btn px-6 py-3 shadow-sm rounded-xl shadow-white">
                                Connect Wallet
                              </button>

                              <button className="px-6 py-3 border w-full component_btn_transparent buttonTracker border-vivd-lime-green rounded-xl text-vivd-lime-green-10">
                                Buy now
                              </button>
                            </div>

                            <button className="px-6 py-3 font-gameria border w-full buttonTracker component_btn_transparent border-vivd-lime-green rounded-xl text-vivd-lime-green-10">
                              Whitelist Status
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
                    <div className={`${gradient} ${hidden} h-[281px] shrink-0 w-[274px] md:max-w-[284px]  from-[#A5E314]/50 to-black  p-0.5 rounded-3xl`}>
                      <div key={`${index}-${task}`} className=" w-full h-full flex flex-row items-center justify-center relative px-[10px] md:px-[34.7px] py-[10px] md:py-[13px] space-y-2 text-start  bg-black/80 rounded-3xl">
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
                  <div className={`border-[#A5E314] ${order} ${border} p-6`}>
                    <div className={`${gradient} basis-1/2 from-[#A5E314]/40 to-black/20 flex flex-row justify-center p-0.5 rounded-3xl`}>
                      <div key={`${index}-${stage}`} className={`${width} ${height} flex flex-row justify-center items-center   text-start  bg-black/70 rounded-3xl`}>
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
    </div>
  )
}
