import React, { useMemo } from 'react'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { CoinbaseWalletAdapter, PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter, TrustWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import WithdrawPage from '../components/withdraw/withdrawComp';
require("@solana/wallet-adapter-react-ui/styles.css");


export default function Context({ children }: any) {
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
    return (
        <ConnectionProvider endpoint={endpoint} >
            <WalletProvider wallets={wallets} >
                <WalletModalProvider>
                    {/* <WithdrawPage /> */}
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}
