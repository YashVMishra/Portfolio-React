import React from "react";
import { FaReact, FaFigma, FaJava, FaCloud } from "react-icons/fa";

import robot from "../../../images/robot-3.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Yash Vardhan</span>
                    </h1>
                    <p className="title">
                    Passionate frontend developer and UI/UX enthusiast with a strong 
                    foundation in Java-based DSA. Crafting delightful digital experiences 
                    through intuitive design and seamless code.
                    </p>
                    <CallToAction
                        text="Contact me"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    />
                </div>
                <div className="right-col">
                    <img
                        src={robot}
                        alt="Hello I am Yash Mishra"
                    />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <FaCloud />
                        </div>
                        <div className="text">Tech Enthusiast</div>
                    </div>

                    <div className="highlights verticle">
                        <div className="icon">
                            <FaJava />
                        </div>
                        <div className="text">
                            <span>Java</span>
                                Core / OOPs
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
