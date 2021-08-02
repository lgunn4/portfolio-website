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

export const HEADER_IMAGE_URL = "https://res.cloudinary.com/ddtorekqd/image/upload/q_80/v1612041955/LoganGunnHeader_ygpvka.jpg";

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
export const cSharpIcon = (<div className="skill-icon">C#</div>);
export const cmakeIcon = (<div className="skill-icon">Cmake</div>);
export const apolloIcon = (<div className="skill-icon">Apollo</div>);
export const strapiIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faServer} /> Strapi</div>);
export const githubIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faGithubSquare} /> GitHub</div>);
export const linkedinIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</div>);

export const projects = [
    {
        title: "IOM",
        description: (
            <div>
                <p>IOM is software written in Java using the Spring framework consisting of several web applications, web services, and ETLs designed and managed by Autodata.</p>
            </div>
        ),
        url: "https://www.autodatasolutions.com/",
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/q_20/v1610131761/iom-project-image_gkaj1c.jpg",
        skills: [javaIcon, pythonIcon, mysqlIcon, dockerIcon]
    },
    {
        title: "The Shoppies",
        description: (
            <div>
                <p>The Shoppies is a web application designed and built by me that allows users to search for films and add them to a list of nominations.</p>
            </div>),
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/c_scale,q_10,w_1079/v1613152221/ShoppiesSite_hqnxyw.png",
        url: "https://shoppie-movie-awards.netlify.app/",
        skills: [reactIcon,htmlIcon, cssIcon, jsIcon]
    },
    {
        title: "Resourcing App",
        description: (
            <div>
                <p>The Resourcing App is a web-application that allows managers to keep track of and manage resources on different projects.</p>
            </div>),
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/q_20/v1610131939/resource-management-image_ngok87.jpg",
        url: "https://www.autodatasolutions.com/",
        skills: [javaIcon, mysqlIcon, kubeIcon, reactIcon]
    },
    {
        title: "BlackJack game",
        description: (
            <div>
                <p>The Black Jack game is a C++ application that follows the standard Black Jack Casino rules.</p>
                <p>The app implemented complex features such as customizing dealer's behaviour, game replays, and in-game suggestions for the best chances of winning.</p>
            </div>),
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/q_20/v1610135530/blackjack-project-image_jewbso.jpg",
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
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/c_scale,q_10,w_1079/v1613152221/Personal-Site_jj6m28.png",
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
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/c_scale,q_10,w_1079/v1613152221/old-gnaryly-site_eaftnp.png",
        url: "https://oldgnarly.com/",
        skills: [reactIcon, apolloIcon, strapiIcon]
    },

];
export const NUM_PROJECT_ROWS = 3;

export const GIT_HUB_URL = "https://github.com/lgunn4/";
export const LINKED_IN_URL = "https://www.linkedin.com/in/logan-gunn/";
