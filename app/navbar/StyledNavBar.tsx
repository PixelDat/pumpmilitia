import styled from "styled-components";



export const StyledNavBar = styled.section`
  height: 100px;
  width:100%;
  display: flex;
  align-items: center;
 justify-content: center;
  background-image:url("/images/bg.png");
  background-size: cover;
  background-position:50% 20%;
  position: relative;
  z-index: 10;

  .cover{
    background-color: #000;
    position: absolute;
    width: 100%;
    opacity: 0.3;
    height: 100%;
  }

  .container {
    width: 80%;
    margin: auto;
    z-index: 1;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .logo {
    width: 10%;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: flex-start;
  }

  .logoText{
    font-family: var(--font-gameria);
    white-space: nowrap;
    font-size: 20px;
    font-weight: 800;
    color:#EDF9D0;
  }

  #logoImg {
    width: 250px;
    height: 80px;
    object-fit: contain;
  }

  .mainNav {
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .mainContent{
    width:80%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

  }



  .mainContent li {
    list-style: none;
    padding: 5px;
   
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    font-family: var(--font-kanitM);
    line-height: normal;
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: text-decoration 0.2s;
  }

  .mainNav li a{
    color:#EDF9D0;
  }

  .mainNav li:hover {
  }

  .languageCont {
    width:auto;
    padding: 0px 8px 0px 8px;
  }

  .languageCont button {
    padding: 10px;
    width: 100%;
    padding: 10px 15px 10px 15px;
    outline: none;
    border: none;
    color: #000;
    text-align: center;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-family:  var(--font-kanit),'san-serif';
    border-radius: 8px;
    background-color: #B4E835;
    cursor: pointer;
    transition: background-color 0.2s;
    box-shadow: 0px 1px 2px rgba(70, 68, 68, 0.46);
  }

  .mobileButtonContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
  }

  .mobileButtonContainer .mobileButton {
    padding: 10px;
    width: 100%;
    padding: 10px 13px 10px 13px;
    outline: none;
    border: none;
    color: #000;
    text-align: center;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-family:  var(--font-kanit),'san-serif';
    border-radius: 8px;
    background-color: #B4E835;
    cursor: pointer;
    transition: background-color 0.2s;
    box-shadow: 0px 1px 2px rgba(70, 68, 68, 0.46);
  }

  .languageCont button:hover {
    background-color: #fff;
    color: #000;
  }

  .mobileMenuCont {
    display: none;
    height: 100%;
    position: relative;
    margin: 0px !important;
  }

  .coverMobile{
     background-color: red;
     position: absolute;
     width:100%;
     height: 100%;
  }

  .mobileMenuIconContainer{
   width: 100%;
   padding: 0px 10px 0px 10px;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
   position: relative;
  }

  .mobileMenuIcon{
    font-weight: 800;
    color:#EDF9D0;
  }

  .mobileMenuList {
    position: absolute;
    width: 60vw;
    transform: translateY(60px);
    right: 0px;
    top: 0px;
    transition: display 0.2s;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    padding-inline-start: 0px;
    margin-top: 10px;
    padding: 8px;
    z-index: 20;
  background-image:url("/images/bg.png");
  background-size: cover;
  background-position:center center;
  }

  .mobileMenuList li {
    padding: 5px;
    list-style: none;
    width: 90%;
    text-align: start;
    line-height: 2;
    margin: auto;
    font-family: var(--font-kanit);
    cursor: pointer;
    color:#EDF9D0;
    border-bottom: 1px solid #B4E835;
  }

  /* @media (min-width: 320px) and (max-width: 480px) {
  } */

  @media (min-width: 320px) and (max-width: 800px) {
    #logoImg {
      width: 150px;
      height: 80px;
      /* object-fit: contain; */
    }

    height: 70px;

  .logo {
    width:20%;
    
  }
    .mainNav,
    .languageCont {
      display: none;
    }

    .mobileMenuCont {
      display: block;
    }

    .mobileMenuIcon {
      font-size: 25px;
    }
  }

  @media  (min-width: 800px) {
   
    .container{
      width: 100%;
    }



  }


  @media (min-width: 769px) and (max-width: 1024px) {
    

    .logo{
      flex-direction: column;
      width: fit-content;
    }


    #logoImg {
    width: 200px;
    height: 50px;
    object-fit: contain;
  }/* background-color: orange !important; */
      
  

  .mainNav{
    width: 100%;
  }

  
    
  }


`