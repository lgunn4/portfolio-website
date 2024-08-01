import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCss3Alt,
    faDocker,
    faGitAlt, faGithubSquare,
    faHtml5,
    faJava, faJsSquare, faLinkedin,
    faLinux,
    faPython,
    faReact,
    faShopify,
    faWindows
} from "@fortawesome/free-brands-svg-icons";
import {faDatabase, faDharmachakra, faGem, faTrain} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const HEADER_IMAGE_URL = "https://res.cloudinary.com/ddtorekqd/image/upload/v1700508066/cover_divxjz.jpg?w=auto&h=auto";

export const javaIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faJava}/></div>);
export const javaIconText = (<div className="skill-icon"><FontAwesomeIcon icon={faJava}/> Java</div>);

export const rubyIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faGem}/></div>);
export const rubyIconText = (<div className="skill-icon"><FontAwesomeIcon icon={faGem}/> Ruby</div>);

export const springIcon = (<div className="skill-icon">Java Spring</div>);

export const pythonIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faPython}/></div>);
export const pythonIconText = (<div className="skill-icon"><FontAwesomeIcon icon={faPython}/> Python</div>);

export const mysqlIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faDatabase}/></div>);
export const mysqlIconText = (<div className="skill-icon"><FontAwesomeIcon icon={faDatabase}/> MySQL</div>);

export const linuxIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faLinux}/></div>);
export const linuxIconText = (<div className="skill-icon"><FontAwesomeIcon icon={faLinux}/> Linux</div>);

export const dockerIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faDocker}/></div>);
export const dockerIconText = (<div className="skill-icon"><FontAwesomeIcon icon={faDocker}/> Docker</div>);

export const reactIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faReact}/></div>);
export const reactIconText = (<div className="skill-icon"><FontAwesomeIcon icon={faReact}/> React</div>);

export const gitIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faGitAlt}/></div>);
export const gitIconText = (<div className="skill-icon"><FontAwesomeIcon icon={faGitAlt}/> Git</div>);

export const htmlIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faHtml5}/></div>);
export const htmlIconText = (<div className="skill-icon"><FontAwesomeIcon icon={faHtml5}/> HTML</div>);

export const cssIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faCss3Alt}/></div>);
export const cssIconText = (<div className="skill-icon"><FontAwesomeIcon icon={faCss3Alt}/> CSS</div>);

export const jsIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faJsSquare}/></div>);
export const jsIconText = (<div className="skill-icon"><FontAwesomeIcon icon={faJsSquare}/> JavaScript</div>);

export const kubeIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faDharmachakra}/></div>);
export const kubeIconTexts = (<div className="skill-icon"><FontAwesomeIcon icon={faDharmachakra}/> Kubernetes</div>);

export const cIcon = (<div className="skill-icon">C</div>);
export const cppIcon = (<div className="skill-icon">C++</div>);
export const cSharpIcon = (<div className="skill-icon">C#</div>);
export const cmakeIcon = (<div className="skill-icon">Cmake</div>);

export const githubIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faGithubSquare} /></div>);
export const githubIconText = (<div className="skill-icon"><FontAwesomeIcon icon={faGithubSquare} /> GitHub</div>);

export const linkedinIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faLinkedin} /></div>);
export const linkedinIconText = (<div className="skill-icon"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</div>);

export const railsIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faTrain} /></div>);
export const railsIconText = (<div className="skill-icon"><FontAwesomeIcon icon={faTrain} /> Rails</div>);

export const shopifyIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faShopify} /></div>);

export const microsoftIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faWindows} /></div>);


export const projects = [
    {
        title: "Translate and Adapt",
        description: (
            <div>
                <p>Translate and Adapt is a first party Shopify App that allows merchants to translate their store content manually as well as automatically through Google Translation API. </p>
            </div>
        ),
        url: "https://apps.shopify.com/translate-and-adapt",
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/v1700504918/maxresdefault_s6vjmz.jpg?w=auto&h=auto",
        skills: [shopifyIcon, rubyIcon, reactIcon, htmlIcon, jsIcon, cssIcon]
    },
    {
        title: "EVSA",
        description: (
            <div>
                <p>Electric vehicle suitability assessment tool (EVSA) built and managed by Geotab gives you recommendations based on real world driven data how your fleet could benefit from converting to electric vehicles.</p>
            </div>
        ),
        url: "https://www.geotab.com/fleet-management-solutions/evsa/",
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/v1700505559/Screen_Shot_2023-11-20_at_1.42.59_PM_hudahv.png?w=auto&h=auto",
        skills: [pythonIcon, mysqlIcon]
    },
    {
        title: "IOM",
        description: (
            <div>
                <p>IOM is software written in Java using the Spring framework consisting of several web applications, web services, and ETLs designed and managed by Autodata.</p>
            </div>
        ),
        url: "https://www.autodatasolutions.com/",
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/q_20/v1610131761/iom-project-image_gkaj1c.jpg?w=auto&h=auto",
        skills: [javaIcon, pythonIcon, mysqlIcon, dockerIcon]
    },
    {
        title: "The Shoppies",
        description: (
            <div>
                <p>The Shoppies is a web application designed and built by me that allows users to search for films and add them to a list of nominations.</p>
            </div>),
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/c_scale,q_10,w_1079/v1613152221/ShoppiesSite_hqnxyw.png?w=auto&h=auto",
        url: "https://shoppie-movie-awards.netlify.app/",
        skills: [reactIcon,htmlIcon, cssIcon, jsIcon]
    },
    {
        title: "Image Repository",
        description: (
            <div>
                <p>Image repository is a project I designed and built in C# using the .NET framework.</p>
                <p>It is an API that allows clients to upload, view, and manage images.</p>
            </div>),
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/v1700924656/jon-tyson-P2aOvMMUJnY-unsplash_zatxn2.jpg?w=auto&h=auto",
        url: "https://github.com/lgunn4/shopify-image-repository",
        skills: [cSharpIcon, microsoftIcon]
    },
    {
        title: "Resourcing App",
        description: (
            <div>
                <p>The Resourcing App is a web-application that allows managers to keep track of and manage resources on different projects.</p>
            </div>),
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/q_20/v1610131939/resource-management-image_ngok87.jpg?w=auto&h=auto",
        url: "https://www.autodatasolutions.com/",
        skills: [javaIcon, mysqlIcon, kubeIcon, reactIcon]
    },
    {
        title: "Blog Site",
        description: (
            <div>
                <p>blog.logangunn.com is a blog website designed and built by me in Ruby on Rails to allow me to blog about what is happening in my life. </p>
            </div>
        ),
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/v1700924416/Screen_Shot_2023-11-25_at_10.03.15_AM_bcxazg.png?w=auto&h=auto",
        url: "https://blog.logangunn.com",
        skills: [rubyIcon, htmlIcon, jsIcon, cssIcon]
    },
    {
        title: "Portfolio Website",
        description: (
            <div>
                <p>logangunn.com is a portfolio website designed and built by me to showcase my personal programming skills and abilities.</p>
                <p>This website also features projects I have worked on in order to highlight my abilities as a software developer.</p>
            </div>
        ),
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/v1700507209/Screen_Shot_2023-11-20_at_2.10.26_PM_sogptt.png?w=auto&h=auto",
        url: "/",
        skills: [reactIcon,htmlIcon, cssIcon, jsIcon]
    },
    {
        title: "Portfolio Site - Original",
        description: (
            <div>
                <p>This is my first ever front end project written in HTML JS and CSS.</p>
                <p>It was a portfolio website to showcase my interests and talents.</p>
            </div>
        ),
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/v1700504046/g9wtrjlvnqug1vywu21z.png?w=auto&h=auto",
        url: "https://old.logangunn.com",
        skills: [htmlIcon, jsIcon, cssIcon]
    },
    {
        title: "The Dahee",
        description: (
            <div>
                <p>This is my first ever front end project written in HTML JS and CSS.</p>
                <p>It was a portfolio website to showcase my interests and talents.</p>
            </div>
        ),
        image: "https://res.cloudinary.com/ddtorekqd/image/upload/v1700506959/Screen_Shot_2023-11-20_at_2.05.25_PM_dfuq0x.png?w=auto&h=auto",
        url: "https://dahee.logangunn.com/",
        skills: [htmlIcon, jsIcon, cssIcon]
    },

];
export const NUM_PROJECT_ROWS = 2;

export const GIT_HUB_URL = "https://github.com/lgunn4/";
export const LINKED_IN_URL = "https://www.linkedin.com/in/logan-gunn/";
