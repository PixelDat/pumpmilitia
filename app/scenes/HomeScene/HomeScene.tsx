"use client"
import Features from "@/app/featured/Features"
import React from "react"
import styled from "styled-components"
const HomeScene = () => {
  return (
    <StyledHomeScene>
      <Features />

    </StyledHomeScene>
  )


}


export default HomeScene



const StyledHomeScene = styled.section`

width: 100%;
height: auto;
background-image:url("/images/bg.png");
background-size: cover;
background-position:50% 20%;
 


`

