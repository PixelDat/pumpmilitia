import { IDL, TransferSol } from "@/lib/idl/pre_sale";
import { AnchorProvider, Program } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";


export async function loadBalances(anchorProvider: AnchorProvider, amount: number, publicKey: PublicKey) {
    const programId = new PublicKey("H1gw4ZtABwmBhDCcKravEryyNodDGQYP1qVQySTTZqN6");
    const program = new Program<TransferSol>(IDL, programId, anchorProvider);
    const saleAccount = await program.account.sale.fetch(new PublicKey('CgVh6qemnouBuc5BPPcA3nWzdHfYDSqnaswjKV3b249b'));

    let rate = saleAccount.rate.toNumber()
    let coinSold = saleAccount.totalTokensSold.toNumber()
    let coinBalance = saleAccount.totalTokensForSale.toNumber()
    let unlockingTimes = saleAccount.unlockingTimes as [{ amount: any, time: any }];
    let mapping = unlockingTimes.map((item) => {
        return {
            amount: item.amount.toNumber(),
            time: item.time.toNumber(),
        };
    })
    let val = amount * rate;
    const userBalance = await program.account.buyerAccount.all();
    let balanceFound = false;
    let balance = 0;

    userBalance?.forEach(element => {
        if (element.account.key.toBase58() === publicKey?.toBase58()) {
            balance = element.account.amount.toNumber();
            balanceFound = true;
        }
    });
    return {
        conversionRate: Number(val),
        percentage: ((coinSold / coinBalance) * 100),
        balance: balance,
        unlockingTimes: mapping,
    }

}

export type UnlockingItem = {
    amount: number;
    time: number;
};