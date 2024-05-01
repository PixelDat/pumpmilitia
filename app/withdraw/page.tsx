"use client"
import { useEffect, useMemo, useState } from "react";
import Context from "../context/context";
import WithdrawPage from "../components/withdraw/withdrawComp";



export default function WalletContext() {
  return (
    <Context >
      <WithdrawPage />
    </Context>
  )
}
