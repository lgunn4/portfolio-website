import React from 'react';
import './AboutSection.css';

import {Col, Image, Row} from "react-bootstrap";

function AboutSection(){

    return(
        <div className="about-section">
            <br/>
            <h2>About Me</h2>
            <Row>
                <Col md={{span: 2, offset: 1}}>
                    <Image roundedCircle width={200} height={200} src="thumbnail.png" />
                </Col>
                <Col md={{span: 6, offset: 1}}>
                    <br/>
                    <h5>I am a 22 year old university student currently pursuing an honours double major
                        in Computer Science and Global Commerce at Western University.
                        <br/>
                        I am a self starter and an entrepreneur and have successfully created and ran my own business
                        when I was 18.
                        <br/>
                        I love to learn and chase new opportunities as well as explore my own talents. I love doing this
                        through programming, making music, and meditation.
                    </h5>
                </Col>

            </Row>
        </div>
    );
}
export default AboutSection;