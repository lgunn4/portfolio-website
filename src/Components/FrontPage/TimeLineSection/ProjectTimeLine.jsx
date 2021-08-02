import React from 'react';
import {Button, Timeline} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAward, faBriefcase, faCode,
    faLaptopCode, faLayerGroup,
    faSchool,
    faTrophy,
    faScroll,
    faUserGraduate
} from "@fortawesome/free-solid-svg-icons";

import {faFileCode} from '@fortawesome/free-regular-svg-icons'
import TimelineItem from "antd/es/timeline/TimelineItem";
import './ProjectTimeLine.css';
import {
    faAmazon,
} from "@fortawesome/free-brands-svg-icons";

function ProjectTimeLine() {
    return (
        <div className="project-timeline">
            <br/>
            <h3>Timeline</h3>
            <br/>
            <Timeline mode="left">
                <TimelineItem
                    dot={<FontAwesomeIcon icon={faLaptopCode} />}
                    color="black"
                    label="2021 - Present"
                >   
                    <h4>Software Developer</h4>
                    <h6>Geotab - Telematics</h6>

                    Responsible For:
                    <div><FontAwesomeIcon icon={faLayerGroup} /> - Designing Robust Solutions</div>
                    <div><FontAwesomeIcon icon={faFileCode} /> - Developing Clean Code</div>
                </TimelineItem>

                <TimelineItem
                    dot={<FontAwesomeIcon icon={faSchool} />}
                    color="black"
                    label="2016 - 2021"
                >
                    <h4>University Student</h4>
                    <h6>Western University</h6>
                    <div><FontAwesomeIcon icon={faScroll}></FontAwesomeIcon> - Honours Double Major</div>
                    <div>Computer Science / Global Commerce</div>
                    <p></p>
                    <div><FontAwesomeIcon icon={faUserGraduate} /> - Graduation June 2021</div>
                    <div><FontAwesomeIcon icon={faTrophy} /> - 2020 Recipient of Lynne Cram Award</div>
                    <div><FontAwesomeIcon icon={faAward} width={"1.5em"}/>  - 2017 Dean's Honour Roll</div>

                    <br/>
                </TimelineItem>
                <TimelineItem
                    dot={<FontAwesomeIcon icon={faCode} />}
                    color="black"
                    label="2019 - 2020"
                >
                    <h4>Software Developer Intern</h4>
                    <h6>Autodata Solutions</h6>
                    <p>Worked on Software for some of the world’s largest automotive companies</p>
                </TimelineItem>
                <TimelineItem
                    dot={<FontAwesomeIcon icon={faBriefcase} />}
                    color="black"
                    label="2017"
                >
                    <h4>Entrepreneur and Sole Proprietor</h4>
                    <h6>Real World Textbooks</h6>
                    <p>Buying and selling inventory, marketing/promoting business, overseeing financials, and analyzing customer behavior</p>
                    <div><FontAwesomeIcon icon={faAmazon}/> - Amazon FBA business</div>
                    <p></p>
                    <a href="https://realworldtextbooks.wixsite.com/realworldtextbooks"><Button>Go To Website</Button></a>

                </TimelineItem>

            </Timeline>


        </div>

    )

}

export default ProjectTimeLine;