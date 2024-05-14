import idl from "../idl/new_presale";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import {
    Program,
    Idl,
    AnchorProvider,
    setProvider,
    getProvider,
} from "@coral-xyz/anchor"
import { PublicKey } from "@solana/web3.js";

const { connection } = useConnection()
const wallet = useAnchorWallet()

async function presale_contract(provider: AnchorProvider) {
    if (!wallet) return
    const provider = getProvider()
    // const provider = new AnchorProvider(connection, wallet, {})
    // setProvider(provider)

    const programId = new PublicKey("JPLockxtkngHkaQT5AuRYow3HyUv5qWzmhwsCPd653n")
    const program = new Program(JSON.parse(JSON.stringify(idl)) as Idl, provider, programId)

    const txn = await program.methods.presalePurchase().accounts({


    }).signers([]).transaction()

    return txn;
}