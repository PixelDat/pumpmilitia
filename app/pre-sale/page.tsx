"use client"
import axios from "axios";
import Context from "../context/context";
import PresaleComp from "../components/presale/presaleComp";


export default function Presale() {
  return (
    <Context>
      <PresaleComp />
    </Context>
  )
}