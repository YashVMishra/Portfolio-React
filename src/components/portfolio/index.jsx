import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "Recipe Adding App",
        tags: ["react"],
        link: "https://github.com/YashVMishra/Tasty---Trove",
        media: {
            thumbnail: require("../../images/portfolio/tasty-trove.jpg"),
        },
    },
    {
        id: 2,
        name: "Tic-Tac-Toe Game",
        tags: ["js"],
        link: "https://github.com/YashVMishra/Tic-Tac-Toe",
        media: {
            thumbnail: require("../../images/portfolio/tic-tac-toe.jpg"),
        },
    },
    {
        id: 3,
        name: "Movix - Movie Search App",
        tags: ["react"],
        link: "https://github.com/YashVMishra/Movix-Movie-DB",
        media: {
            thumbnail: require("../../images/portfolio/movix.png"),
        },
    },
    {
        id: 4,
        name: "To-Do React App",
        tags: ["react"],
        link: "https://github.com/YashVMishra/To-Do-App-React",
        media: {
            thumbnail: require("../../images/portfolio/todo.png"),
        },
    },
    {
        id: 5,
        name: "Text-Emoji Encrypt/Decrypt App",
        tags: ["js"],
        link: "https://github.com/YashVMishra/Text-to-Emoji-E-D",
        media: {
            thumbnail: require("../../images/portfolio/text-emoji.jpg"),
        },
    },
    {
        id: 6,
        name: "Pricing - Panel Template",
        tags: ["uiux"],
        link: "https://github.com/YashVMishra/Pricing-Panel-Template",
        media: {
            thumbnail: require("../../images/portfolio/pricing-panel.png"),
        },
    },
    {
        id: 7,
        name: "Weather App - API",
        tags: ["js"],
        link: "https://github.com/YashVMishra/Weather-App-CWH",
        media: {
            thumbnail: require("../../images/portfolio/weather.jpg"),
        },
    },
    {
        id: 8,
        name: "BS - Specific Webpage",
        tags: ["uiux"],
        link: "https://github.com/YashVMishra/WB-Using-BS-Essentials",
        media: {
            thumbnail: require("../../images/portfolio/wb-essentials.png"),
        },
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="dark"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
