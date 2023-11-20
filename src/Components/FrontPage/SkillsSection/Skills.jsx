import React from 'react';
import {Progress} from "antd";
import {Col, Row} from "react-bootstrap";
import "./Skills.css";
import {
    cSharpIcon,
    cssIconText,
    dockerIconText,
    gitIconText,
    htmlIconText,
    javaIconText, jsIconText,
    linuxIconText,
    pythonIconText, railsIconText, reactIconText, rubyIconText,
} from "../../../Assets/Constants";

function Skills() {

    return(
       <div className="skill-section">
                  <div>
                      <br/>
                      <h3>Skills</h3>
                      <br/>
                      <Row className="align-items-center" style={{height: "inherit"}}>
                          <Col md={{span:8, offset: 2}} >
                              <h5>Languages</h5>

                            <Progress className="secondary" percent={85} format={() => rubyIconText} />
                              <Progress className="primary" percent={65} format={() => javaIconText} />
                              <Progress className="secondary" percent={70} format={() => pythonIconText} />
                              <Progress className="primary" percent={65} format={() => cSharpIcon} />
                              <Progress className="secondary" percent={85} format={() => htmlIconText} />
                              <Progress className="primary" percent={75} format={() => cssIconText} />
                              <Progress className="secondary" percent={80} format={() => jsIconText} />

                              <p/>
                              <br/>
                              <h5>Technologies</h5>
                              <Progress className="secondary" percent={90} format={() => railsIconText} />
                              <Progress className="primary" percent={90} format={() => gitIconText}/>
                              <Progress className="secondary" percent={70} format={() => linuxIconText}/>
                              <Progress className="primary" percent={50} format={() => dockerIconText} />
                              <Progress className="secondary" percent={65} format={() => reactIconText}/>
                          </Col>
                      </Row>
                      <br/>

                  </div>
       </div>
    );
}

export default Skills;