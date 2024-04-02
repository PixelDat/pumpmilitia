"use client"


import React from "react";
import { StyledFeature } from "./StyledFeature";
import Card from "./Card";
import { featureArray } from "./featureArray";


const Features = () => {

    return (
        <StyledFeature>
            <div className="cover">

            </div>
            <main className="overall">
                <header className="featureHeader" >FEATURES</header>
                <article className="featureText">
                    Pump Militia is a blockchain-based game designed to merge thrilling gameplay with the innovative aspects of GameFi featuring competitive combat, strategic missions, and a vibrant community allowing players to earn real-world value through in-game achievements.
                </article>

                <section className="cardContainer">
                    {
                        featureArray.map((item) => (
                            <Card data={item} key={item._id} />
                        ))
                    }
                </section>

                <section className="onBoarding">

                    <article className="onBoardingTextContainer">
                        <header className="onBoardingHeader">
                            onboarding millions,<br />
                            redefining gaming
                        </header>

                        <p className="onBoardingText">
                            Pump Militia is on a mission to bridge the gap between traditional gaming (Web2) and the decentralised future of gaming (Web3), aiming to onboard the next million players into the world of blockchain gaming
                        </p>


                    </article>

                    <main className="imageNumberCont">

                        <div className="imageCont">

                        </div>

                        <ul className="numberCont">

                            <li className="number">
                                <p className="numberText">15,752</p>
                                <p className="numberHeader">Total Downloads</p>
                            </li>

                            <li className="number">
                                <p className="numberText">6,251</p>
                                <p className="numberHeader">ACTIVE PLAYERS</p>

                            </li>
                            <li className="number">
                                <p className="numberText">252,773</p>
                                <p className="numberHeader">TOTAL BATTLES</p>

                            </li>

                        </ul>
                    </main>

                </section>
            </main>





        </StyledFeature>
    )

}



export default Features