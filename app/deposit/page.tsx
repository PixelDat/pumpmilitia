"use client"
import React, { useEffect, useRef, useState } from "react";
import Context from "../context/context";
import DepositCompPage from "../components/deposit/depositComp";


export default function DepositContext() {
  return (
    <Context>
      <DepositCompPage />
    </Context>

  )
}
