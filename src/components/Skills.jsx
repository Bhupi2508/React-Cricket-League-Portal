import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import images from './your-images-file'; // Update the path to your images file
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/esm/Card';
import { slideData } from './cardsData';

const Skills = ({ darkMode }) => {
    // const imageKeys = Object.keys(images);
    // const selectedImages = imageKeys.map((key) => images[key]);

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br />
            <Container>
                <Row style={{ display: 'flex', flexWrap: 'wrap', marginRight: '-15px', marginLeft: '-15px', justifyContent: 'center' }}>
                    <Col lg={5} xs={8}>
                        <Slide autoplay={true} duration={2000} style={{ height: '456px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {slideData.map((data, index) => (
                                <div key={index} style={{ height: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
                                    <img
                                        src={data.image}
                                        alt={`Slide ${index}`}
                                        className="skills-img img-fluid animated"
                                        style={{ height: '456px', objectFit: 'cover' }}
                                    />
                                </div>
                            ))}
                        </Slide>
                    </Col>
                    <Col lg={6} xs={12}>
                        <br />
                        <Card className="skill-nbcard">
                            <Card.Body>
                                <Card.Title>Point Table and Player Stats</Card.Title>
                                <Card.Text> Displaying the current standings of teams, as well as individual player statistics such as runs scored, wickets taken, etc.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="skill-nbcard">
                            <Card.Body >
                                <Card.Title>Matches and Score Card</Card.Title>
                                <Card.Text>Showing the schedule of matches, live scores, and detailed scorecards for completed matches.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="skill-nbcard">
                            <Card.Body >
                                <Card.Title>Rules, Team and Players Information</Card.Title>
                                <Card.Text> This section provides detailed profiles of players, including their stats and roles (batsman, bowler, all-rounder), as well as pages dedicated to each team, showcasing the team roster, captain, coach, and team history.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br />
            <hr />
        </div >
    );
};

export default Skills;
