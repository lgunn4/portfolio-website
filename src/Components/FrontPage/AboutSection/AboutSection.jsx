import React from 'react';
import './AboutSection.css';

import {Col, Image, Row} from "react-bootstrap";

function AboutSection(){

    return(
        <div className="about-section">
            <Row>
                <Col className="about-image" md={{span: 2, offset: 1}}>
                    <Image roundedCircle width={250} height={250} src="thumbnail.JPG" />
                </Col>
                <Col xs={{span: 10, offset: 1}} md={{span: 6, offset: 1}}>
                    <h2>About Me</h2>
                    <h5>
                        I am a 22 year old university student pursuing an honours double major
                        in Computer Science and Global Commerce at Western University.
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

            </Row>
            <p><strong>Learn More About My Experience and Skills</strong></p>
        </div>
    );
}
export default AboutSection;