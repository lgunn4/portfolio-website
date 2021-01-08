import React from "react";
import "./ProjectSection.css";
import {Card, CardDeck, Col, Row} from "react-bootstrap";
import {projects, NUM_PROJECT_ROWS} from "../../../Assets/Constants";


function ProjectSection() {

    const cards = projects.map(project => {
        return (
            <Card>
                {project.url ? (<a href={project.url}><Card.Img alt="example" src={project.image}/></a>) : <Card.Img alt="example" src={project.image}/>}
                <Card.Body>
                    <h4>{project.title}</h4>
                    {project.description}
                    <div className="project-skills">
                        <br/>
                        {project.skills}
                    </div>
                </Card.Body>
            </Card>

        )
    });
    const numCardDecks = Math.ceil(projects.length/NUM_PROJECT_ROWS);
    let cardDecks = [];

    for (let i = 0; i < numCardDecks; i++) {
        const cardDeck = (
            <CardDeck>
                {cards[i * NUM_PROJECT_ROWS]}
                {cards[i * NUM_PROJECT_ROWS + 1] ? cards[i * NUM_PROJECT_ROWS + 1] : <Card className="empty-card"/>}
            </CardDeck>);
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