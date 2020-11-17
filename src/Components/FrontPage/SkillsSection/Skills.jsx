import React from 'react';
import { Progress } from 'antd';
import 'antd/dist/antd.css'
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faLinux, faDocker, faReact, faGitAlt, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

function Skills() {
    const customOrange = '#f89820';
    const customBlue = '#5382a1';

    const javaIcon = (<div><FontAwesomeIcon icon={ faJava }/> Java</div>);
    const pythonIcon = (<div><FontAwesomeIcon icon={ faPython }/> Python</div>);
    const mysqlIcon = (<div><FontAwesomeIcon icon={ faDatabase }/> MySQL</div>);
    const linuxIcon = (<div><FontAwesomeIcon icon={ faLinux }/> Linux</div>);
    const dockerIcon = (<div><FontAwesomeIcon icon={ faDocker }/> Docker</div>);
    const reactIcon = (<div><FontAwesomeIcon icon={ faReact }/> React</div>);
    const gitIcon = (<div><FontAwesomeIcon icon={ faGitAlt }/> Git</div>);
    const htmlIcon = (<div><FontAwesomeIcon icon={ faHtml5 }/> HTML</div>);
    const cssIcon = (<div><FontAwesomeIcon icon={ faCss3Alt }/> CSS</div>);

    return(
        <div className="skillSection">
            <div>
                <br/>
                <Row className="align-items-center" style={ { height: 'inherit' } }>
                    <Col md={ { span:8, offset: 2 } } >
                        <h5>Languages</h5>

                        <Progress percent={ 80 } format={ () => javaIcon } strokeColor={ customOrange }  />
                        <Progress percent={ 80 } format={ () => pythonIcon } strokeColor={ customBlue } />
                        <Progress percent={ 60 } format={ () => mysqlIcon }  strokeColor={ customOrange } />
                        <Progress percent={ 90 } format={ () => htmlIcon }  strokeColor={ customBlue } />
                        <Progress percent={ 75 } format={ () => cssIcon }  strokeColor={ customOrange } />
                        <Progress percent={ 40 } format={ () =>  'C++' }  strokeColor={ customBlue } />
                        <Progress percent={ 30 } format={ () => 'C' }  strokeColor={ customOrange } />

                        <p></p>
                        <br/>
                        <h5>Technologies</h5>
                        <Progress percent={ 85 } format={ () => gitIcon } strokeColor={ customBlue }  />
                        <Progress percent={ 70 } format={ () => linuxIcon } strokeColor={ customOrange }  />
                        <Progress percent={ 30 } format={ () => dockerIcon }  strokeColor={ customBlue } />
                        <Progress percent={ 65 } format={ () => reactIcon } strokeColor={ customOrange }  />
                        <Progress percent={ 60 } format={ () => 'Java Spring' }  strokeColor={ customBlue } />
                    </Col>
                </Row>
                <br/>

            </div>
        </div>
    );
}

export default Skills;