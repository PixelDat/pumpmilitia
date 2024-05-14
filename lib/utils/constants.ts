import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import idl from "../idl/new_presale.json";

/* Constants for RPC Connection the Solana Blockchain */
export const commitmentLevel = "processed";
export const endpoint = clusterApiUrl("devnet");
export const connection = new Connection(endpoint, commitmentLevel);

/* Constants for the Deployed "Hello World" Program */
export const presaleProgramId = new PublicKey("H52i4cUPbh7CUoqafWm6bpTVFnENAJkrSYrrGB5CYifz");
export const presaleProgramInterface = JSON.parse(JSON.stringify(idl));