import React from 'react';
import {Button, Timeline} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAward,
    faBook, faBriefcase, faBug, faBusinessTime, faChartBar, faCode,
    faGraduationCap,
    faLaptopCode, faLayerGroup,
    faSchool,
    faTrophy,
    faUserGraduate, faVials
} from "@fortawesome/free-solid-svg-icons";

import {faFileCode} from '@fortawesome/free-regular-svg-icons'
import TimelineItem from "antd/es/timeline/TimelineItem";
import './ProjectTimeLine.css';
import {
    faAmazon,
    faDocker,
    faGitAlt,
    faGitlab,
    faJava,
    faLinux,
    faPython,
    faReact
} from "@fortawesome/free-brands-svg-icons";

function ProjectTimeLine() {
    return (
        <div>
            <br/>
            <br/>
            <Timeline mode="left">
                <TimelineItem
                    dot={<FontAwesomeIcon icon={faSchool} />}
                    color="black"
                    label="2016 - Present"
                >
                    <h4>University Student</h4>
                    <h6>Western University</h6>
                    <div><FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon> - Honours Double Major in Computer Science and Global Commerce</div>
                    <div><FontAwesomeIcon icon={faAward} width={"1.5em"}/>  - 2017 Dean's Honour Roll</div>
                    <div><FontAwesomeIcon icon={faTrophy} /> - 2020 Recipient of Lynne Cram Student Award</div>
                    <p></p>
                    <div><FontAwesomeIcon icon={faUserGraduate} /> - Expected Graduation May 2021</div>

                    <br/>
                </TimelineItem>
                <TimelineItem
                    dot={<FontAwesomeIcon icon={faCode} />}
                    color="black"
                    label="2019 - 2020"
                >
                    <h4>Software Developer Intern</h4>
                    <h6>Autodata Solutions</h6>
                    Responsible For:
                    <div><FontAwesomeIcon icon={faLayerGroup} /> - Designing</div>
                    <div><FontAwesomeIcon icon={faFileCode} /> - Coding</div>
                    <div><FontAwesomeIcon icon={faVials} /> - Testing</div>
                    <div><FontAwesomeIcon icon={faChartBar} /> - Analyzing</div>
                    <div><FontAwesomeIcon icon={faBug} /> - Debugging</div>
                    <p>Software for some of the world’s largest automotive companies</p>
                </TimelineItem>
                <TimelineItem
                    dot={<FontAwesomeIcon icon={faBriefcase} />}
                    color="black"
                    label="2017"
                >
                    <h4>Entrepreneur and Sole Proprietor</h4>
                    <h6>Real World Textbooks</h6>
                    <p>Buying and selling inventory, marketing/promoting the business, overseeing financials, and analyzing customer behavior</p>
                    <div><FontAwesomeIcon icon={faAmazon}/> - Amazon FBA business</div>
                    <a href="https://realworldtextbooks.wixsite.com/realworldtextbooks"><Button>Go To Website</Button></a>

                </TimelineItem>

            </Timeline>


        </div>

    )

}

export default ProjectTimeLine;