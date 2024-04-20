// import { useState } from 'react';
import { Zoom, Fade } from 'react-awesome-reveal';
import LazyLoad from 'react-lazyload';
import { cardsData } from './cardsData';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';

const Experience = ({ darkMode }) => {

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Fade>
                <Container>
                    <br></br>
                    <h2 className="lead" align="center"><b>- Players and Stats -</b></h2>
                    <br></br>
                    <Zoom>
                        <Row>
                            {cardsData.map((card, index) => (
                                <Col lg={4} sm={12} key={index}>
                                    <LazyLoad height={200} offset={100}>
                                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                            <br></br>
                                            <center>
                                                <div class="flip-card">
                                                    <div class="flip-card-inner">
                                                        <div className="flip-card-front">
                                                            <Card.Img variant="top" src={card.image} style={{ maxHeight: "336px" }} />
                                                            <Card.Body>
                                                                {/* <Card.Title align="center">{card.title}</Card.Title> */}
                                                                {/* <Card.Text>
                                                                    <p align="center">{card.description}</p>
                                                                </Card.Text> */}
                                                            </Card.Body>
                                                        </div>
                                                        <div className="flip-card-back">
                                                            <p>Coming Soon...</p>
                                                            {/* <br></br>{card.details} */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </center>
                                            <br></br>
                                            {/* <div>
                                                <a href={card.projectLink} target="_blank" rel="noreferrer noopener">
                                                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                                                </a>
                                                <a href={card.repoLink} target="_blank" rel="noreferrer noopener">
                                                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                                                </a>
                                            </div> */}
                                            <br></br>
                                        </Card>
                                    </LazyLoad>
                                </Col>
                            ))}
                        </Row>
                    </Zoom>
                    <br></br>
                </Container>
            </Fade>
            <br></br>
            <hr></hr>
            <br></br>
        </div>
    );

}

export default Experience;
