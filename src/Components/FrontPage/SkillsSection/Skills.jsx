import React from 'react';
import {Progress} from "antd";
import 'antd/dist/antd.css'
import {Col, Row} from "react-bootstrap";
import "./Skills.css";
import {
    cIcon, cppIcon, cSharpIcon,
    cssIcon,
    dockerIcon,
    gitIcon,
    htmlIcon,
    javaIcon, jsIcon,
    linuxIcon,
    mysqlIcon,
    pythonIcon, reactIcon, springIcon
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

                              <Progress className="primary" percent={80} format={() => javaIcon} />
                              <Progress className="secondary" percent={70} format={() => pythonIcon} />
                              <Progress className="primary" percent={75} format={() => cSharpIcon} />
                              <Progress className="secondary" percent={60} format={() => mysqlIcon} />
                              <Progress className="primary" percent={85} format={() => htmlIcon} />
                              <Progress className="secondary" percent={75} format={() => cssIcon} />
                              <Progress className="primary" percent={60} format={() => jsIcon} />
                              <Progress className="secondary" percent={40} format={() =>  cIcon} />
                              <Progress className="primary" percent={30} format={() => cppIcon} />

                              <p/>
                              <br/>
                              <h5>Technologies</h5>
                              <Progress className="primary" percent={85} format={() => gitIcon}/>
                              <Progress className="secondary" percent={70} format={() => linuxIcon}/>
                              <Progress className="primary" percent={50} format={() => dockerIcon} />
                              <Progress className="secondary" percent={65} format={() => reactIcon}/>
                              <Progress className="primary" percent={60} format={() => springIcon} />
                          </Col>
                      </Row>
                      <br/>

                  </div>
       </div>
    );
}

export default Skills;