import React from "react";
import {GIT_HUB_URL, githubIcon, LINKED_IN_URL, linkedinIcon} from "../../Assets/Constants";
import "./FooterSection.css";
import {Col, Row} from "react-bootstrap";

function FooterSection() {
    return(
        <div className="footer-section-container">
            <div className="footer-section">
                <Row>
                    <Col md={4}>
                        <h4>Links</h4>
                        <a href={GIT_HUB_URL}>{githubIcon}</a>
                        <a href={LINKED_IN_URL}>{linkedinIcon}</a>
                    </Col>
                </Row>
            </div>
            <div className="designed-by">
                <p>Designed by Logan Gunn</p>
            </div>
        </div>
    )

}

export default FooterSection;