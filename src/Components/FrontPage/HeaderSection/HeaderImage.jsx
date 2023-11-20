import {Col, Row} from "react-bootstrap";
import React from "react";
import "./HeaderImage.css";
import {HEADER_IMAGE_URL} from "../../../Assets/Constants";

function HeaderImage() {
    return(
        <div className="header">
            <Row className="header-img-text-row" style={{backgroundImage: `url(${HEADER_IMAGE_URL})`}}>
                <Col md={{ span: 4, offset: 6}} xs={{span:10, offset: 1}} align="middle">
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
