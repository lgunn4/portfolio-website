import React from "react";
import "./ProjectSection.css";
import {Card, CardDeck} from "react-bootstrap";


function ProjectSection() {

    const projects = [
        {
            title: "Shoppie Movie Nomination App",
            description: "React application that allows the user to search for films in order to add them to a list of nominations for an award",
            image: "https://res.cloudinary.com/ddtorekqd/image/upload/v1609966144/shoppie-image_bbmafb.png",
            url: "https://shoppie-movie-awards.netlify.app/",
        },
        {
            title: "Personal Website",
            description: "React application for showcasing my projects as well as highlighting my skills and abilities",
            image: "https://res.cloudinary.com/ddtorekqd/image/upload/v1609966240/personal-site-image_ejipc5.png",
            url: "https://logan-gunn.netlify.app/",
        },
        {
            title: "Old Gnarly Art Website",
            description: "React application built for artist Old Gnarly in order to showcase and help sell their artwork",
            image: "https://res.cloudinary.com/ddtorekqd/image/upload/v1609966362/old-gnarly-art-image_amehzr.png",
            url: "https://oldgnarly.com/",
        },
        {
            title: "Personal Site - Old",
            description: "Website I created to showcase who I am and as well as my talents and projects",
            image: "https://res.cloudinary.com/ddtorekqd/image/upload/v1609966610/old-personal-site-image_g46sq0.png",
            url: "https://logangunn.com/",
        },
    ];
    const NUM_ROWS = 2;

    const cards = projects.map(project => {
        return (
            <Card>
                <a href={project.url}><Card.Img alt="example" src={project.image}/></a>
                <Card.Body>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                </Card.Body>
            </Card>

        )
    });
    const numCardDecks = Math.ceil(projects.length/NUM_ROWS);
    let cardDecks = [];

    for (let i = 0; i < numCardDecks; i++) {
        const cardDeck = (
            <CardDeck>
                {cards[i * NUM_ROWS]}
                {cards[i * NUM_ROWS + 1] ? cards[i * NUM_ROWS + 1] : <Card className="empty-card"/>}
            </CardDeck>);
        cardDecks.push(cardDeck);
    }



    return (
        <div className="project-section-container">
            <div className="project-section">
                <h2>Project Showcase</h2>
                {cardDecks}
            </div>
        </div>
    )

}

export default ProjectSection;