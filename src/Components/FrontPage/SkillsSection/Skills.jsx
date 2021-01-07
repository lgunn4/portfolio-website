import React from 'react';
import {Progress} from "antd";
import 'antd/dist/antd.css'
import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJava, faPython, faLinux, faDocker, faReact, faGitAlt, faHtml5, faCss3Alt} from "@fortawesome/free-brands-svg-icons";
import {faDatabase} from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

function Skills() {
    const javaIcon = (<div><FontAwesomeIcon icon={faJava}/> Java</div>);
    const pythonIcon = (<div><FontAwesomeIcon icon={faPython}/> Python</div>);
    const mysqlIcon = (<div><FontAwesomeIcon icon={faDatabase}/> MySQL</div>);
    const linuxIcon = (<div><FontAwesomeIcon icon={faLinux}/> Linux</div>);
    const dockerIcon = (<div><FontAwesomeIcon icon={faDocker}/> Docker</div>);
    const reactIcon = (<div><FontAwesomeIcon icon={faReact}/> React</div>);
    const gitIcon = (<div><FontAwesomeIcon icon={faGitAlt}/> Git</div>);
    const htmlIcon = (<div><FontAwesomeIcon icon={faHtml5}/> HTML</div>);
    const cssIcon = (<div><FontAwesomeIcon icon={faCss3Alt}/> CSS</div>);


    return(
       <div className="skillSection">
                  <div>
                      <br/>
                      <h3>Skills</h3>
                      <br/>
                      <Row className="align-items-center" style={{height: "inherit"}}>
                          <Col md={{span:8, offset: 2}} >
                              <h5>Languages</h5>

                              <Progress className="primary" percent={80} format={() => javaIcon} />
                              <Progress className="secondary" percent={80} format={() => pythonIcon} />
                              <Progress className="primary" percent={60} format={() => mysqlIcon} />
                              <Progress className="secondary" percent={90} format={() => htmlIcon} />
                              <Progress className="primary" percent={75} format={() => cssIcon} />
                              <Progress className="secondary" percent={40} format={() =>  "C++"} />
                              <Progress className="primary" percent={30} format={() => "C"} />

                              <p/>
                              <br/>
                              <h5>Technologies</h5>
                              <Progress className="primary" percent={85} format={() => gitIcon}/>
                              <Progress className="secondary" percent={70} format={() => linuxIcon}/>
                              <Progress className="primary" percent={30} format={() => dockerIcon} />
                              <Progress className="secondary" percent={65} format={() => reactIcon}/>
                              <Progress className="primary" percent={60} format={() => 'Java Spring'} />
                          </Col>
                      </Row>
                      <br/>

                  </div>
       </div>
    );
}

export default Skills;