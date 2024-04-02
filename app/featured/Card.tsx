import Image from "next/image";
import React from "react";
import { MdDataSaverOff } from "react-icons/md";
import styled from "styled-components";

interface CardProps {
  data: {
    _id: string;
    image: string;
    content: string;
    title: string;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {


  return (
    <StyledCard
      style={{ backgroundImage: `url(${data.image})` }}
    >


      <main className="textContainer">

        <h1>
          {data.title}
        </h1>

        <h3>
          {data.content}
        </h3>

      </main>

    </StyledCard>
  )
}


export default Card



const StyledCard = styled.div`
width: 327.33px;
height: 314px;
display: flex;
flex-direction: column;
justify-content:flex-end;
border: 1px solid #B4E835;

border-radius: 24px;
background-image: url("/images/card.png");


.textContainer{
  width: 100%;
  height: 40%;
  border-radius: 0px 0px  24px 24px ;
  background: rgba(37, 32, 32, 0.323);
  backdrop-filter: blur(10px);
  padding: 20px;
}

  .textContainer h1{
    font-family: var(--font-gameria);
    font-size: 20px;
    color:#EDF9D0;
  }

  .textContainer h3{
    font-family: var(--font-kanit);
    font-size: 16px;
    color:#EDF9D0;
  }


  @media (min-width: 320px) and (max-width: 480px) {

    width: 327.33px;
height: 314px;
  }

@media (min-width: 481px) and (max-width: 768px) {

  width: 327.33px;
height: 314px;
}

@media (min-width: 769px) and (max-width: 1024px) {}


@media (min-width: 1024px) and (max-width: 1200px) {

}


`