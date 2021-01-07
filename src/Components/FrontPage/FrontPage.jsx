import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import './FrontPage.css';
import HeaderImage from "./HeaderSection/HeaderImage";
import AboutSection from "./AboutSection/AboutSection";
import DropDownSection from "./DropDownSection/DropDownSection";
import ProjectTimeLine from "./TimeLineSection/ProjectTimeLine";
import Skills from "./SkillsSection/Skills";
import ProjectSection from "./ProjectSection/ProjectSection";

function FrontPage() {
    return (
        <Container fluid className="frontPage" >
            <div>
                <HeaderImage />
                <AboutSection />
                <br/>
                <DropDownSection>
                    <div>
                        <Row>
                            <Col md={{span: 6, offset: 0}} xs={{span: 10, offset:1}}>
                                <ProjectTimeLine/>
                            </Col>
                            <Col md={{span:6, offset:0}} xs={{span: 8, offset:2}}>
                                <Skills/>
                            </Col>
                        </Row>
                    </div>
                </DropDownSection>
                <ProjectSection />
            </div>
        </Container>
    )
}

export default FrontPage;