import React from "react";
import "./ProjectSection.css";
import {Card, Col, Row} from "react-bootstrap";
import {projects, NUM_PROJECT_ROWS} from "../../../Assets/Constants";


function ProjectSection() {

    const cards = projects.map(project => {
        return (
          <Col className="project-section-col" md={4}>
                  <Card>
                      <a className="project-card-anchor" href={project.url}>
                          <Card.Img alt="project-image" src={project.image}/>
                          <Card.Body>
                              <h4>{project.title}</h4>
                              {project.description}
                              <div className="project-skills">
                                  <br/>
                                  {project.skills}
                              </div>
                          </Card.Body>
                      </a>
                  </Card>
          </Col>

        )
    });
    const numCardDecks = Math.ceil(projects.length/NUM_PROJECT_ROWS);
    let cardDecks = [];

    for (let i = 0; i < numCardDecks; i++) {
        const cardDeck = (
            <Row>
                {cards[i * NUM_PROJECT_ROWS]}
                {cards[i * NUM_PROJECT_ROWS + 1] ? cards[i * NUM_PROJECT_ROWS + 1] : <Card className="empty-card"/>}
                {cards[i * NUM_PROJECT_ROWS + 2] ? cards[i * NUM_PROJECT_ROWS + 2] : <Card className="empty-card"/>}
            </Row>);
        cardDecks.push(cardDeck);
    }



    return (
        <div className="project-section-container">
            <Row className="project-section">
                <Col md={{span: 10, offset: 1}}>
                    <br/>
                    <h1>My Projects</h1>
                    <br/>
                    {cardDecks}
                </Col>
            </Row>
        </div>
    )

}

export default ProjectSection;