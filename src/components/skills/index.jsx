import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BsTools } from "react-icons/bs";

import CallToAction from "../shared/CallToAction";
import TechIcons from "../../images/tech-icons.png";
import Section from "../shared/section";
import Resume from "../../download/Resume.pdf";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="light"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JavaScript, React, CSS, HTML, SASS, Photoshop, Figma"
                    />
                </div>
                <div className="right-col">
                    <h2><BsTools/>&nbsp;Skills</h2>
                    <p>
                        Proficient in <span style={{fontWeight : "bolder", fontSize : "20px", textDecoration : "underline"}}>HTML5</span> and <span style={{fontWeight : "bolder", fontSize : "20px", textDecoration : "underline"}}>CSS</span>, ensuring the foundation of every 
                        project is solid. My expertise extends to <span style={{fontWeight : "bolder", fontSize : "20px", textDecoration : "underline"}}>SCSS</span> for efficient 
                        styling, <span style={{fontWeight : "bolder", fontSize : "20px", textDecoration : "underline"}}>Javascript</span> for dynamic interactivity, and <span style={{fontWeight : "bolder", fontSize : "20px", textDecoration : "underline"}}>React.js</span> for 
                        building interactive user interfaces. I'm a beginner level in server-side 
                        development using <span style={{fontWeight : "bolder", fontSize : "20px", textDecoration : "underline"}}>Node.js</span> and <span style={{fontWeight : "bolder", fontSize : "20px", textDecoration : "underline"}}>Express.js</span>, and I also excel in <span style={{fontWeight : "bolder", fontSize : "20px", textDecoration : "underline"}}>DSA</span> with <span style={{fontWeight : "bolder", fontSize : "20px", textDecoration : "underline"}}>Java</span>. With a strong grasp of 
                        <span style={{fontWeight : "bolder", fontSize : "20px", textDecoration : "underline"}}> Object-Oriented Programming</span> principles. Additionally, I am a<span style={{fontWeight : "bolder", fontSize : "20px", textDecoration : "underline"}}> UI/UX </span>
                        starter and trying my hands on <span style={{fontWeight : "bolder", fontSize : "20px", textDecoration : "underline"}}>Python</span> development as well.
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open(Resume)}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
