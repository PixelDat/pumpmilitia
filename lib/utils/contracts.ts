import { PublicKey, Transaction, SystemProgram, sendAndConfirmTransaction, Connection, Keypair, LAMPORTS_PER_SOL, clusterApiUrl, TransactionInstruction, sendAndConfirmRawTransaction, VersionedTransaction } from "@solana/web3.js";
import { createTransferInstruction, getAssociatedTokenAddressSync, getOrCreateAssociatedTokenAccount, transfer } from '@solana/spl-token';
import { AnchorWallet, Wallet, WalletProvider, } from "@solana/wallet-adapter-react";
import { AnchorProvider, Program, setProvider, web3 } from "@project-serum/anchor";
import { commitmentLevel, connection, presaleProgramId, presaleProgramInterface } from "./constants";
import { Public, WalletRounded } from "@mui/icons-material";
import { invoke } from "@project-serum/anchor/dist/cjs/utils/rpc";

export const presalePurchase = async (
    solAmount: string,
    buyerPublicKey: any,
) => {
    let connection = new Connection(clusterApiUrl("devnet"), 'confirmed');
    try {
        let treasury = new PublicKey("13dqNw1su2UTYPVvqP6ahV8oHtghvoe2k2czkrx9uWJZ")
        // Get the sol from the user and transfer the sol to the treasury account
        const transaction = new Transaction();

        // Instruction 1: Get sol from user
        transaction.add(
            SystemProgram.transfer({
                fromPubkey: buyerPublicKey,
                toPubkey: treasury,
                lamports: LAMPORTS_PER_SOL * Number(solAmount),
            })
        );

        transaction.feePayer = buyerPublicKey;
        let blockhashObj = await connection.getLatestBlockhash();
        transaction.recentBlockhash = blockhashObj.blockhash;
        console.log(transaction)
        return transaction;
    } catch (error) {
        console.error("Error occurred:", error);
        return null;

    }
};

export const transferToken = async (solAmount: any, buyerPublicKey: any) => {
    let connection = new Connection(clusterApiUrl("devnet"), 'confirmed');
    let tokenAmount = await checkRates(solAmount)
    // token key
    let secretP = [221, 8, 175, 156, 150, 134, 103, 40, 245, 81, 238, 93, 209, 70, 105, 132, 177, 28, 2, 69, 145, 198, 161, 144, 195, 253, 77, 39, 80, 129, 123, 146, 5, 213, 114, 167, 42, 206, 246, 106, 151, 175, 75, 214, 18, 61, 41, 18, 119, 211, 57, 28, 52, 193, 156, 48, 58, 207, 56, 142, 170, 82, 78, 122];
    let tokenKey = Keypair.fromSecretKey(Uint8Array.from(secretP));

    //owner key
    let ownerP = [11, 54, 73, 115, 127, 169, 207, 253, 128, 164, 154, 45, 210, 173, 218, 105, 93, 211, 32, 202, 103, 210, 92, 3, 217, 205, 51, 6, 29, 135, 50, 248, 5, 213, 137, 250, 180, 248, 182, 74, 222, 154, 151, 212, 186, 15, 98, 124, 195, 87, 71, 214, 142, 142, 174, 111, 20, 206, 254, 133, 35, 12, 236, 91];
    let ownerKey = Keypair.fromSecretKey(Uint8Array.from(ownerP));

    const fromTokenAccount = getAssociatedTokenAddressSync(tokenKey.publicKey, ownerKey.publicKey);
    const toTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        buyerPublicKey,
        tokenKey.publicKey,
        buyerPublicKey
    );

    let signature = await transfer(
        connection,
        ownerKey,
        fromTokenAccount,
        toTokenAccount.address,
        ownerKey,
        parseInt(tokenAmount.toFixed(2)),
    );
    console.log(signature);
    if (signature) {
        return signature;
    } else {
        return null;
    }
}

export async function checkRates(value: any) {
    let url = "https://price.jup.ag/v4/price?ids=SOL&vsToken=USDC"
    try {
        const response = await fetch(url);
        const result = await response.json();
        const rates = result.data.SOL.price * value;
        return rates;
    } catch (error) {
        console.log(error);
        return 0;
    }
}

const getProvider = (wallet: any) => {
    const provider = new AnchorProvider(
        connection,
        wallet.adapter,
        {
            preflightCommitment: commitmentLevel,
        },
    )
    return provider;
}

