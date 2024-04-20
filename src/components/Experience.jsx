// import { useState } from 'react';
import { Zoom, Fade } from 'react-awesome-reveal';
import LazyLoad from 'react-lazyload';
import { players } from './cardsData';
// import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';
import Batsman from '../media/batting.webp';
import Bowler from '../media/bowling.jpg';

const Experience = ({ darkMode }) => {


    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Fade>
                <Container>
                    <br></br>
                    <h2 className="lead" align="center"><b>- Player Details -</b></h2>
                    <br></br>
                    <Zoom>
                        <Row>
                            {players.map((card, index) => (
                                <Col lg={4} sm={12} key={index}>
                                    <LazyLoad height={10} offset={100}>
                                        <Card align="center" style={{    marginTop: '5%'}} className="exp" data-theme={darkMode ? "dark" : "light"}>
                                            <br></br>
                                            <center>
                                                <div class="flip-card">
                                                    <div class="flip-card-inner">
                                                        <div className="flip-card-front">
                                                            <div style={{ position: 'relative', maxHeight: '336px' }}>
                                                                <Card.Img
                                                                    variant="top"
                                                                    src={card.role === 'Batsman' || card.role === 'All-Rounder' ? Batsman : Bowler}
                                                                    style={{ maxHeight: '336px' }}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="flip-card-back">
                                                            <p>{card.name}, {card.role}</p>
                                                            <br></br>{card.description}
                                                        </div>

                                                    </div>
                                                </div>
                                            </center>
                                            <br></br>
                                            <div>
                                                <a href={card.projectLink} target="_blank" rel="noreferrer noopener" style={{ display: 'inline-block', padding: '8px 16px', backgroundColor: '#f8f9fa', color: '#212529', fontWeight: 'bold', textDecoration: 'none', border: '1px solid #6c757d', borderRadius: '5px', marginRight: '10px', marginBottom: '10px', transition: 'background-color 0.3s, color 0.3s, border-color 0.3s' }}>
                                                    {card.name}, {card.role}
                                                </a>
                                            </div>
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
