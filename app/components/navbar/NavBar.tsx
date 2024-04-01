"use client"
import React, { useState } from "react"
import { StyledNavBar } from "./StyledNavBar"
import { MdOutlineMenu } from "react-icons/md";
import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";
import logo from "./../../../public/images/logo.png";
const nav = [
    {
        _id: "12DD",
        link: "/",
        content: "Airdrop",
    },
    {
        _id: "12",
        link: "airdrop",
        content: "Whitepaper",
    },
    {
        _id: "10",
        link: "#howtobuy",
        content: "Presale",
    },
    {
        _id: "9",
        link: "#",
        content: "Roadmap",
    },

    {
        _id: "9",
        link: "#",
        content: "Tokenomics",
    },
    {
        _id: "9",
        link: "#",
        content: "Quest",
    },
];



const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMobileMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <StyledNavBar>
            <div className="cover">

            </div>

            <div className="container">
                <div className="logo">
                    <Image id="logoImg" alt="logo" src={logo} />
                    <p className="logoText"> PUMP MILITIA </p>
                </div>

                <main className="mainNav">

                    <div className="mainContent">
                        {nav.map((item) => (
                            <li key={item._id}>
                                <a
                                    style={{
                                        textDecoration: "none",
                                    }}
                                    href={item.link}
                                >
                                    {item.content}
                                </a>
                            </li>
                        ))}
                    </div>

                    <aside className="languageCont">
                        <button>
                            Authentication
                        </button>
                    </aside>
                </main>



                <div className="mobileMenuCont">

                    <main
                        onClick={handleMobileMenu}
                        className="mobileMenuIconContainer"
                    >

                        {
                            isOpen ? <MdOutlineClose
                                className="mobileMenuIcon"
                            /> : <MdOutlineMenu

                                className="mobileMenuIcon"
                            />
                        }
                    </main>

                    <div
                        style={{ display: `${isOpen ? "block" : "none"}` }}
                        className="mobileMenuList"
                    >

                        {nav.map((item) => (
                            <li onClick={handleMobileMenu} key={item._id}>
                                <a
                                    style={{
                                        textDecoration: "none",
                                    }}
                                    href={item.link}
                                >
                                    {item.content}
                                </a>
                            </li>
                        ))}
                        <aside className="mobileButtonContainer">


                            <button className="mobileButton" >
                                Authentication
                            </button>
                        </aside>


                    </div>
                </div>
            </div>
        </StyledNavBar>
    )
}


export default NavBar