`/* eslint-disable react-hooks/exhaustive-deps */import { ReactComponent as LoadingIcon } from "../assets/icons/loading.svg";import { ClipLoader } from 'react-spinners';import { useState, useMemo, useEffect, FormEvent } from "react";import config from "../config";import { useTranslation } from "react-i18next";import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";import { useWeb3Modal } from "@web3modal/react";import { useDispatch, useSelector } from "react-redux";import { RootState } from "../store";import { setCurrentChain } from "../store/presale";import useWeb3Functions from "../hooks/useWeb3Functions";// import PayableTokenButton from "./PayableTokenButton";// import NumberInput from "./NumberInput";import ClaimDatesCard from "./ClaimDatesCard2";// import PayableTokenButtonEthButton from "./PayableTokenButtonEthButton";import pcs from "../assets/pancakeswap.png"; import swapIcon from "../assets/swapIcon.png";import axios from "axios";import { toast } from "react-toastify";

export default function SaleForm() { const { t } = useTranslation(); const { isConnected, address } = useAccount(); const { open } = useWeb3Modal(); const { chain } = useNetwork(); const { switchNetwork } = useSwitchNetwork(); const dispatch = useDispatch(); const unlockingStatus = useSelector( (state: RootState) => state.presale.unlockingStatus );
const chainId = useSelector((state: RootState) => state.presale.chainId); const tokens = useSelector( (state: RootState) => state.presale.tokens[chainId] ); // const tokenPrices = useSelector((state: RootState) => state.presale.prices); const balances = useSelector((state: RootState) => state.wallet.balances); const amountToClaim = useSelector( (state: RootState) => state.presale.amountToClaim );
const [fromToken,] = useState<Token>(tokens[0]); const [toToken] = useState<Token>(config.saleToken[chainId]); const [fromValue, setFromValue] = useState<string | number>(""); const [, setToValue] = useState<string | number>(""); // const tokenPrice = useMemo( // () => tokenPrices[config.displayPrice[chainId]] || 1, // [tokenPrices] // );





const [profilePhoto, setProfilePhoto] = useState('');const [username, setUsername] = useState('');const [points, setPoints] = useState(0);const [encypted_session_id, setEncypted_session_id] = useState('');const [isProcessingWithdrawal, setIsProcessingWithdrawal] = useState(false);const [isLoadingUserData, setIsLoadingUserData] = useState(false);





const emptyValues = () => { setFromValue(""); setToValue(""); };
const fixedNumber = (num: number, decimals = 6) => +parseFloat((+num).toFixed(decimals));
const formatNumber = (num: number) => Intl.NumberFormat().format(fixedNumber(num, 2));
const insufficientBalance = useMemo(() => { if (!fromValue) return false; return +fromValue > balances[fromToken.symbol]; }, [fromValue, balances]);
// const fromValueChange = (e: React.ChangeEvent<HTMLInputElement>) => { // const value = e.target.value; // if (!value) { // emptyValues(); // return; // }
// setFromValue(fixedNumber(+value)); // if (tokenPrices[fromToken.symbol] !== 0) {
// console.log("fromToken.symbol", fromToken.symbol); // console.log("tokenPrices[fromToken.symbol]", tokenPrices[fromToken.symbol]); // console.log("value", +value);
// setToValue(fixedNumber((+value * tokenPrices[fromToken.symbol]), 4)); // } // };
// const toValueChange = (e: React.ChangeEvent<HTMLInputElement>) => { // const value = e.target.value; // if (!value) { // emptyValues(); // return; // }
// setToValue(+value); // if (tokenPrices[fromToken.symbol] !== 0) { // setFromValue(fixedNumber(+value / tokenPrices[fromToken.symbol])); // } // };
const lockedToken = useMemo( () => formatNumber(balances[toToken.symbol] || 0), [balances] );
const { buyToken, fetchIntialData, fetchLockedBalance, fetchAmountToClaim, fetchTokenBalances, claimTokens, loading, } = useWeb3Functions();
const submit = async (event: FormEvent<HTMLFormElement>) => { event.preventDefault();
if (!unlockingStatus) { if (+fromValue === 0) return;
const { success } = await buyToken(fromValue, fromToken); if (success) emptyValues(); } else { claimTokens(); } };
// const ethToken = { // address: null, // symbol: "ETH", // name: "ETH", // image: "/images/tokens/eth.svg", // decimals: 18, // }
useEffect(() => { if (!address || !chain) return; if (unlockingStatus) fetchAmountToClaim(); else fetchTokenBalances(); }, [address, unlockingStatus]);
useEffect(() => { if (!address || !chain) return; fetchLockedBalance(); }, [address]);
useEffect(() => { if (!isConnected) return;
if (config.chains.some((c) => c.id === chain?.id)) { dispatch(setCurrentChain(chain?.id as number)); } else { switchNetwork?.(config.chains[0].id as number); } }, [isConnected]);
useEffect(() => { try{ fetchIntialData(); }catch(e){} try{ startInit(); }catch(e){} }, []);
async function startInit() { // Get the URL parameters const urlParams = new URLSearchParams(window.location.search); // Get the user_session parameter const user_session = urlParams.get('user_session');
let encrypted_session_id;
// Check if user_session is not null and not an empty string if (user_session !== null && user_session.trim() !== '') { encrypted_session_id = user_session; // Clear the user_session parameter from the URL urlParams.delete('user_session'); window.history.replaceState({}, '', `${ window.location.pathname }?${ urlParams } `); } else { console.log('No user_session parameter found in the URL'); const regAuth = await getRegAuth(); encrypted_session_id = regAuth.encrypted_session_id; } setEncypted_session_id(encrypted_session_id); getUserData(encrypted_session_id); }
async function getUserData(encrypted_session_id: string) { try { const url = 'https://evp-user-service-cea2e4kz5q-uc.a.run.app/get-user-details'; const options = { headers: { Authorization: encrypted_session_id } };
const response = await axios.get(url, options);
// Save response.data in a cookie const resultString = JSON.stringify(response.data); 
document.cookie = `userData = ${ encodeURIComponent(resultString) }; path = /; max-age=3600`; / / Expires in 1 hour
setProfilePhoto(response.data.profilePhoto); setUsername(response.data.username); setPoints(response.data.points); setIsLoadingUserData(false); return response.data; } catch (error) { console.error('Error fetching user data:', error); throw error; } }
async function withdrawToken(walletAddress: string, amount: number) {
    try {
        setIsProcessingWithdrawal(true); const url = 'https://evp-pump-militia-service-cea2e4kz5q-uc.a.run.app/swap'; const options = { headers: { Authorization: encypted_session_id } };
        const data = { walletAddress: walletAddress, amount: amount };
        const response = await axios.post(url, data, options);
        toast.success(`Withdrawal successful`); setIsProcessingWithdrawal(false); fetchIntialData(); startInit(); return response.data;
    } catch (error) { console.error('Error fetching user data:', error); setIsProcessingWithdrawal(false); toast.error(`Erro Performing Swap. Please try again`); throw error; }
}

async function getRegAuth() {
    try {
        setIsLoadingUserData(true); const response = await axios.get('https://evp-cross-auth-handler-service-cea2e4kz5q-uc.a.run.app/get-reg-auth'); const result = { isAuthenticated: true, encrypted_session_id: response.data.encrypted_session_id, user_id: "", role: "user" };
        // Convert the result object to a JSON string const resultString = JSON.stringify(result);
        // Save the result in a cookie, adjusting for proper encoding and setting a max-age or expires as needed document.cookie = `authData=${encodeURIComponent(resultString)}; path=/; max-age=3600`; // Expires in 1 hour return result; } catch (error) { console.error(error); // In case of error, you might want to handle cookie setting differently or not set it at all return { isAuthenticated: false, encrypted_session_id: "", user_id: "", role: "user" }; }}


        return (<form onSubmit={submit} className="relative ml-auto flex w-full max-w-lg flex-col gap-6 bg-[url('/images/00.png')] bg-fit px-4 lg:px-8" style={{ backgroundColor: 'rgb(254, 253, 206)', borderRadius: '20px' }} > {!unlockingStatus ? (<> <div style={{ textAlign: "center", padding: "20px" }}> {isLoadingUserData ? (<ClipLoader color="rgb(62, 62, 62)" loading={true} size={30} />) : (<> <div><img src={profilePhoto} style={{ borderRadius: "20px", width: "40px", height: "40px", display: "inline-block" }} /></div> <div style={{ display: "inline-block", color: "rgb(62, 62, 62)" }}>{username}</div> </>)} </div>

            <div className="relative -top-4 flex flex-col px-2 lg:px-5 bg-gray"> <div className="relative"> <div className="relative "> <svg xmlns="http://www.w3.org/2000/svg" width="453" height="30" viewBox="0 0 453 30" fill="none" className="absolute -left-8 top-0 -z-0 translate-y-1/2" > <path d="M0 0H453L451.113 15L453 30H0L1.8875 15L0 0Z" fill="#151E26" /> </svg> <h4 style={{ transform: "rotate(-180deg) scaleX(1)" }} className="relative mb-6 bg-[url('/images/button-skin-2.png')] bg-fit py-4 text-center font-bold lg:px-4 lg:text-xl"> <div style={{ transform: "rotate(180deg) scaleX(1)", color: "rgb(62, 62, 62)" }} className="flex items-center justify-center gap-2"> Withdraw PUMP </div> </h4> </div> <div className="text-center text-sm font-medium lg:text-lg/normal" style={{ color: "rgb(62, 62, 62)" }}> <div style={{ fontSize: "13px", paddingBottom: "10px" }}>$PUMP Balance</div>
                {isLoadingUserData ? (<ClipLoader color="rgb(62, 62, 62)" loading={true} size={30} />) : (<> <div style={{ fontSize: "25px" }}>{points}</div> </>)} </div> </div> </div>



            {insufficientBalance && (<p className="text-sm font-bold text-red-500"> {t("insufficient-balance", { token: fromToken.symbol })} </p>)} </>) : (<> <ClaimDatesCard />
                <div className="text-center lg:text-lg"> {isConnected ? amountToClaim && amountToClaim > 0 ? t("you-have-amount-token-tokens-to-claim", { amount: amountToClaim, token: toToken.symbol, }) : t("you-have-to-wait-till-next-unlocking-time-to-claim-token-tokens", { token: toToken.symbol }) : t("connect-your-wallet-to-claim-token", { token: toToken.symbol, })} </div> </>)}
            <div> <div style={{ textAlign: "center" }}> <div><img src={swapIcon} style={{ borderRadius: "20px", width: "40px", height: "40px", display: "inline-block" }} /></div> </div> </div>
            <div style={{ fontSize: "13px", textAlign: "center", color: "rgb(62, 62, 62)" }}>$PUMP(Main-net) Balance</div>
            {isConnected ? (<> <div className=" flex items-center justify-between px-2.5 py-2.5"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" > <path d="M0 0H20L0 20V0Z" fill="rgb(62, 62, 62)" /> </svg> <div style={{ color: "rgb(62, 62, 62)", fontSize: "25px" }}> {(lockedToken || 0).toLocaleString()}{" "} </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" > <path d="M20 20L0 20L20 0L20 20Z" fill="rgb(62, 62, 62)" /> </svg> </div> <button style={{ color: "rgb(62, 62, 62)" }} className="mb-8 w-full bg-[url('/images/button-skin-2.png')] bg-fit px-4 py-4 font-medium uppercase text-black disabled:cursor-not-allowed disabled:opacity-50 lg:text-xl" disabled={loading || (unlockingStatus ? !amountToClaim || amountToClaim <= 0 : insufficientBalance)} type="submit" onClick={() => { if (address) { withdrawToken(address.toString(), points) } }} > {loading && (<LoadingIcon className="h-5 w-5 animate-spin fill-[#3DFF1D] text-gray-200" />)} {isProcessingWithdrawal && (<ClipLoader color="rgb(62, 62, 62)" loading={true} size={30} />)} {/* {unlockingStatus ? "Withdraw" : "Withdraw"} */} {!isProcessingWithdrawal ? "Withdraw" : ""} </button> </>) : (<button style={{ color: "rgb(62, 62, 62)" }} className="mb-8 w-full bg-[url('/images/button-skin-2.png')] bg-fit px-4 py-4 text-xl font-medium uppercase" onClick={() => open()} type="button" > {t("connect-wallet")} </button>)}

            <a style={{ textAlign: "center", color: "rgb(62, 62, 62)" }} href="https://greedyverse.gitbook.io/white-paper/other-links/how-to-buy"> <div style={{ display: "inline-block" }}> <div><b>Buy On</b></div> <div><img src={pcs} /></div> </div> </a> <br></br> </form>);
    }