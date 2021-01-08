import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCss3Alt,
    faDocker,
    faGitAlt, faGithubSquare,
    faHtml5,
    faJava, faJsSquare, faLinkedin,
    faLinux,
    faPython,
    faReact
} from "@fortawesome/free-brands-svg-icons";
import {faDatabase, faDharmachakra, faServer} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const javaIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faJava}/> Java</div>);
export const springIcon = (<div className="skill-icon">Java Spring</div>);
export const pythonIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faPython}/> Python</div>);
export const mysqlIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faDatabase}/> MySQL</div>);
export const linuxIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faLinux}/> Linux</div>);
export const dockerIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faDocker}/> Docker</div>);
export const reactIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faReact}/> React</div>);
export const gitIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faGitAlt}/> Git</div>);
export const htmlIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faHtml5}/> HTML</div>);
export const cssIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faCss3Alt}/> CSS</div>);
export const jsIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faJsSquare}/> JavaScript</div>);
export const kubeIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faDharmachakra}/> Kubernetes</div>);
export const cIcon = (<div className="skill-icon">C</div>);
export const cppIcon = (<div className="skill-icon">C++</div>);
export const cmakeIcon = (<div className="skill-icon">Cmake</div>);
export const apolloIcon = (<div className="skill-icon">Apollo</div>);
export const strapiIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faServer} /> Strapi</div>);
export const githubIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faGithubSquare} /> GitHub</div>);
export const linkedinIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</div>);

export const projects = [
    {
        title: "IOM (Incentive Offer Management)",
        description: (
            <div>
                <p>IOM is software written in Java using the Spring framework consisting of several web applications, web services, and ETLs designed and managed by Autodata.</p>
                <p>This application is used by GM employees to create and manage incentives and offers related to GM Vehicles.</p>
                <p>IOM webservices can be used to retrieve vital information of incentives and offers related to customer type, region, and more.</p>
            </div>
        ),
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/v1610131761/iom-project-image_gkaj1c.jpg",
        skills: [javaIcon, pythonIcon, mysqlIcon, dockerIcon]
    },
    {
        title: "The Shoppies",
        description: (
            <div>
                <p>The Shoppies is a web application designed and built by me that allows users to search for films and add them to a list of nominations.</p>
                <p>This application was written with the React js library and uses the OMDB api to search and retrieve movies & films.</p>
            </div>),
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/v1609966144/shoppie-image_bbmafb.png",
        url: "https://shoppie-movie-awards.netlify.app/",
        skills: [reactIcon,htmlIcon, cssIcon, jsIcon]
    },
    {
        title: "Resourcing App",
        description: (
            <div>
                <p>The Resourcing App is a web-application that allows managers to keep track of and manage resources on different projects.</p>
                <p>This application is a full-stack app that was designed and developed by the GM development team at Autodata.</p>
                <p>The app provides graphs and tables, allowing the company to easily manage projects or resources that are either under-allocated or over-allocated.</p>
            </div>),
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/v1610131939/resource-management-image_ngok87.jpg",
        skills: [javaIcon, mysqlIcon, kubeIcon, reactIcon]
    },
    {
        title: "BlackJack game",
        description: (
            <div>
                <p>The Black Jack game is a C++ application that follows the standard Black Jack Casino rules.</p>
                <p>The app implemented complex features such as customizing dealer's behaviour, game replays, and in-game suggestions for the best chances of winning.</p>
            </div>),
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/v1610135530/blackjack-project-image_jewbso.jpg",
        url: "https://github.com/lgunn4/Black-Jack-Project-cs3307",
        skills: [cppIcon, cmakeIcon]
    },
    {
        title: "logangunn.com",
        description: (
            <div>
                <p>logangunn.com is a portfolio website designed and built by me to showcase my personal programming skills and abilities.</p>
                <p>This website also features projects I have worked on in order to highlight my abilities as a software developer.</p>
            </div>
        ),
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/v1609966240/personal-site-image_ejipc5.png",
        url: "/",
        skills: [reactIcon,htmlIcon, cssIcon, jsIcon]
    },
    {
        title: "Art Site - Old Gnarly",
        description: (
            <div>
                <p>This is a website I designed and built for the artist Old Gnarly in order to showcase and help sell their artwork.</p>
                <p>It was built using the React Js library along with a <a href="https://strapi.io/">Strapi headless CMS backend</a> for easily managing and uploading artwork.</p>
            </div>
        ),
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/v1609966362/old-gnarly-art-image_amehzr.png",
        url: "https://oldgnarly.com/",
        skills: [reactIcon, apolloIcon, strapiIcon]
    },

];
export const NUM_PROJECT_ROWS = 2;

export const GIT_HUB_URL = "https://github.com/lgunn4/";
export const LINKED_IN_URL = "https://www.linkedin.com/in/logan-gunn/";
