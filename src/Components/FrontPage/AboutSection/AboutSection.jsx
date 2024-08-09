import React from 'react';
import './AboutSection.css';

import {Col, Image, Row} from "react-bootstrap";

function AboutSection(){
    const ageDifMs = Date.now() - new Date('1998-11-23').getTime();
    const ageDate = new Date(ageDifMs);
    const yearsAlive = Math.abs(ageDate.getUTCFullYear() - 1970);

    return(
        <div className="about-section">
            <Row>
                <Col xs={{span: 10, offset: 1}} md={{span: 6, offset: 1}}>
                    <h2>About Me</h2>
                    <h5>
                        I am a {yearsAlive} year old full stack developer with an honours double major
                        in Computer Science and Global Commerce from Western University.
                    </h5>

                    <h5>
                        Since a very early age I have been interested in technology and have always wanted to
                        know how software, apps, and the internet worked.
                    </h5>
                    <h5>
                        I am a self-starter and an entrepreneur. I successfully created and ran my own business
                        when I was 18.
                    </h5>

                    <h5>
                        I love to learn and chase new opportunities as well as explore my own talents. I do this
                        through programming, making music, and meditation.
                    </h5>
                </Col>
                <Col className="about-image" md={{span: 2, offset: 1}}>
                    <Image roundedCircle width={250} height={250} src="https://res.cloudinary.com/ddtorekqd/image/upload/q_auto/v1700508074/thumbnail_ryrqu4.jpg" />
                </Col>

            </Row>
            <p><strong>Learn More About My Experience and Skills</strong></p>
        </div>
    );
}
export default AboutSection;