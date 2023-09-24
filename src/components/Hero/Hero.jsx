import React from "react";
import './Hero.css';
import Header from "../Header/Header";
import '../../App.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
function Hero(){
    return (
    <div className="hero">
        <div className="left-h">
            <Header/>
{/*the best advertizement */}
            <div className="the-best-ad">
                <div></div>
                <span>the best fitness club in the town</span>
            </div>
        
{/* Hero Heading */}
        
            <div className="hero-text">
                <div>
                    <span className="stroke-text">shape </span>
                    <span>your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                    <span>
                        In here we will help you to shape and build your ideal body and live up your life to fullest
                    </span>
                </div>
            </div>
{/* Figures */}
            <div className="figures">
                <div><span>+ 140</span>
                    <span>expert coaches</span>
                </div>
                <div><span>+ 900</span>
                    <span>members joined</span>
                </div>
                <div><span>+ 50</span>
                    <span>fitness program</span>
                </div>

            </div>
{/* Buttons */}
            <div className="hero-button">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>

            </div>
        </div>

        <div className="right-h">
            <button className="btn">Join Now </button>

            <div className="heart-rate">
                <img src = {Heart} alt ="Heart Rate image"/>
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </div>

            {/* Hero Image */}
            <img className="hero-image" src = {hero_image} alt="Hero images"/>
            <img className="hero-image-back" src = {hero_image_back} alt="Hero images"/>

            {/* Calories */}
            <div className="calories">
                <img src = {Calories} alt = "Calories Image"/>
                <div>
                    <span>Calories Burnt</span>
                    <span>220 Kcal</span>
                </div>
            </div>


        
        </div>

    </div>
    )
}
export default Hero;