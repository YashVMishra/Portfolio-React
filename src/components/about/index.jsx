import React from "react";
import { AiFillProject } from "react-icons/ai";

import CallToAction from "../shared/CallToAction";
import Photo from "../../images/about-3.png";
import Section from "../shared/section";
import { scrollToSection } from "../utils/helpers";

import "./style.scss";

const About = () => {
    return (
        <Section
            background="dark"
            id="about"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={Photo}
                        alt="JavaScript, React, CSS, HTML, SASS, Photoshop, Figma"
                    />
                </div>
                <div className="right-col">
                    <h2>About Me❤️</h2>
                    <p>
                        I hold a B.Tech in Computer Science, which fuels my passion for technology 
                        and problem-solving. While my academic background is rooted in this field, 
                        my true enthusiasm lies in frontend development. I'm also venturing into 
                        the realm of UI/UX design, aiming to merge aesthetics with functionality. 
                        Alongside, I have a solid foundation in Data Structures and Algorithms, 
                        particularly in Java. Together, these elements define my journey as a tech
                        enthusiast committed to creating user-centric digital experiences.  
                    </p>
                    <CallToAction
                        text="Portfolio"
                        icon={<AiFillProject />}
                        action={() => {
                        scrollToSection("portfolio");
                        }}
                    />
                </div>
            </div>
        </Section>
    );
};

export default About;
