import {Col, Row} from "react-bootstrap";
import React from "react";
import {Button} from "antd";
import {Link} from "react-router-dom";

function HeaderImage() {
    return(
        <Row className="headerImgTextBoxRow">
            <Col md={{ span: 5, offset: 1}} align="middle">
                <div className="headerImgTextBox">
                    <h2>My Name is <strong>Logan Gunn</strong></h2>
                    <h3>I am a full stack developer from London Ontario, Canada </h3>
                    <Link to="/blog">
                    <Button type="primary" shape="round">
                        Visit My Blog
                    </Button>
                    </Link>
                </div>
            </Col>
        </Row>
    );
}
export default HeaderImage;
