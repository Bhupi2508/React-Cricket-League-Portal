import React from 'react'
import { Slide } from "react-awesome-reveal";
import skillsLight from '../media/9998.jpg';
import skillsDark from '../media/9998.jpg';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/esm/Card';

const Skills = ({ darkMode }) => {
    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Slide>
                <Container>
                    <Row style={{ display: 'flex', flexWrap: 'wrap', marginRight: '-15px', marginLeft: '-15px', justifyContent: 'space-between' }}>
                        <Col lg={4} xs={8}>
                            <img src={darkMode ? skillsDark : skillsLight} alt="skills" className="skills-img img-fluid animated" />
                            <p style={{ marginLeft: '70px', marginTop: '10px' }}><b>THE ANUJ CAPTAIN</b></p>
                        </Col>
                        <Col lg={6} xs={12}>
                            <br></br>
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
                                    <Card.Title>Team and Players Information</Card.Title>
                                    <Card.Text> This section provides detailed profiles of players, including their stats and roles (batsman, bowler, all-rounder), as well as pages dedicated to each team, showcasing the team roster, captain, coach, and team history.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br></br>
                    <hr></hr>
                </Container>
            </Slide>
        </div>
    )
}

export default Skills
