import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import './FrontPage.css';
import HeaderImage from "./HeaderSection/HeaderImage";
import AboutSection from "./AboutSection/AboutSection";
import DropDownSection from "./DropDownSection/DropDownSection";
import ProjectTimeLine from "./TimeLineSection/ProjectTimeLine";
import Skills from "./SkillsSection/Skills";

function FrontPage() {
    return (
        <Container fluid className="frontPage" >
            <div>
                <HeaderImage />
                <AboutSection />
                <br/>
                <DropDownSection>
                    <Row>
                        <Col md={6}>
                            <ProjectTimeLine/>
                        </Col>
                        <Col md={6}>
                            <Skills/>
                        </Col>
                    </Row>
                </DropDownSection>
            </div>
        </Container>
    )
}

export default FrontPage;