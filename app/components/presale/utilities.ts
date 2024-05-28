import { IDL, TransferSol } from "@/lib/idl/pre_sale";
import { AnchorProvider, Program } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";


export async function loadBalances(anchorProvider: AnchorProvider, amount: number, publicKey: PublicKey) {
    const programId = new PublicKey("3EAfgHxhMKesGivsHDitzVrMaiqYgXbWviR86BAJWzN4");
    const program = new Program<TransferSol>(IDL, programId, anchorProvider);
    const saleAccount = await program.account.sale.fetch(new PublicKey('6TSsFNoKPoWQJYRzUqdKuLK12PPggNFzLqqsBGuy6Z8F'));

    let rate = saleAccount.rate.toNumber()
    let coinSold = saleAccount.totalTokensSold.toNumber()
    let coinBalance = saleAccount.totalTokensForSale.toNumber()

    let val = amount * rate;
    // setConvertedAmount(Number(val));
    // setCoinBalPercentage((coinSold / coinBalance) * 100)

    // get user balance  
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
        balance: balance
    }

}