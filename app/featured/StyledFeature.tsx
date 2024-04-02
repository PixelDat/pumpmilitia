import styled from "styled-components"



export const StyledFeature = styled.section`
height: auto;
width: 100%;
padding-bottom: 40px;
position: relative;
overflow-x: hidden;
/* z-index: 1; */

.featureHeader{
  font-family: var(--font-gameria);
  font-size: 30px;
  padding: 30px 0px 30px 0px;
  width:50%;
  margin: auto;
  text-align: center;
  color:#EDF9D0;
}


.featureText{
 z-index: 2;
 width: 50%;
 margin: auto;
 color:#EDF9D0;
 font-size: 20px;
 font-weight: 800;
 text-align: center;
}

.cardContainer{
 width: 60%;
 margin: auto;
 height: auto;
 flex-wrap: wrap;
 display: flex;
 justify-content: space-between;
 align-items: center;
 gap:30px;
 margin-top: 40px;
padding: 30px 0px 30px 0px;
}

.cover{
    background-color: #000;
    position: absolute;
    width: 100%;
    opacity: 0.3;
    height: 100%;
}

.overall{
    width: 100%;
    height: 100%;
    z-index: 2;
    position: relative;
}

.onBoarding{
  height: auto;
  width: 60%;
  margin: auto;
  padding-top: 100px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: flex-start;
}

.onBoardingTextContainer{
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 
}

.onBoardingHeader{
  color:#EDF9D0;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 0.8px;
  padding: 10px 0px 10px 0px;
  font-family: var(--font-gameria);
}

.onBoardingText{
  color:#EDF9D0;
  width: 50%;
  font-family: var(--font-Kanit);
  font-size: 16px;
  padding: 10px 0px 10px 0px;
  font-weight: 600;
}

 .imageNumberCont{
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
 }

 .imageCont{
  width:80%;
  border-radius: 24px;
  height: 80%;
  background-color: red;
 }

 .numberCont{
  width: 30%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80%;
 }

  .number{
    width: 100%;
  }

  .numberText{
    font-size: 55px;
    line-height: 1.2;
    color:#EDF9D0;

    text-align: end;
    letter-spacing: 3px;
    font-family: var(--font-gameria);
  }

  .numberHeader{
    text-align: end;
    text-transform: uppercase;
    color:#EDF9D0;
  }

  


@media (min-width:320px) and (max-width:480px) {

  
  .cardContainer{
    width: 95%;
    justify-content: center;
  }

  .featureText{
    width: 90%;
  }


  .onBoarding{
    width: 90%;
  }

  .onBoardingHeader{
    text-align: center;
  }

  .onBoardingText{
    margin: auto;
    padding: 10px 0px 10px 0px;
    text-align: center;
    width: 95%;
  }





  .imageNumberCont{
    flex-direction: column
    ;
    padding-top: 30px;
    height: auto;
  }

  .imageCont{
  width:98%;
  height: 30vh;
 }


 .numberCont{
  width: 98%;
  margin: auto;
  padding-top: 30px;
  flex-direction: row-reverse;
  gap: 10px;
  align-items: flex-start;
  justify-content: space-between;
  height:auto;
 }

 .number{
  width: auto;
 }


}


@media (min-width: 481px) and (max-width: 768px) {


  .cardContainer{
    justify-content: center;
   width: 90%;
  }

  .onBoarding{
    width: 90%;
  }

  .imageNumberCont{
    flex-direction: column
    ;
    padding-top: 30px;
    height: auto;
  }


  .imageCont{
  width:98%;
  height: 30vh;
 }

 .numberCont{
  width: 98%;
  margin: auto;
  padding-top: 30px;
  gap: 10px;
  align-items: flex-start;
  justify-content: space-between;
  height:auto;
 }

}

@media (min-width: 769px) and (max-width: 1024px) {

  .cardContainer{
  align-items: center;
    width: 80%;
    flex-wrap: wrap;
    justify-content:space-around;
  }

  .onBoarding{
    width: 95%;
  }

  


}

@media (min-width: 1024px) and (max-width: 1200px) {


  .cardContainer{
    justify-content: center;

  }

  .onBoarding{
    width: 90%;
  }
}





`