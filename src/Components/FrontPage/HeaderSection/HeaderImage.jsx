import {Col, Row} from "react-bootstrap";
import React from "react";
import "./HeaderImage.css";

function HeaderImage() {
    return(
        <div className="header">
            <Row className="header-img-text-row">
                <Col md={{ span: 4, offset: 2}} xs={{span:10, offset: 1}} align="middle">
                    <div className="header-img-text-box">
                        <h3>My Name is <strong>Logan Gunn</strong></h3>
                        <h4>I am a full stack developer from London Ontario, Canada </h4>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
export default HeaderImage;
