import React from 'react'
import { AttentionSeeker } from 'react-awesome-reveal';
import jecrcImg from '../media/456.avif';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button'

const Home = ({ darkMode }) => {
    return (
        <div style={{
            backgroundImage: `url(${darkMode ? jecrcImg : jecrcImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh'  // Adjust the height as needed
        }}>
            <AttentionSeeker shakeX>
                <Row>
                    <Col lg={12} xs={12}>
                        <h1 className="display-3 hello" align="center" ><code style={{ color: 'darkturquoise', fontSize: 'smaller' }}>Pratap Nagar Cricket League</code></h1>
                        <h2 className="lead" align="center" style={{ color: 'antiquewhite', fontSize: 'revert-layer' }}>Join
                            <span
                                class="txt-rotate"
                                data-period="2000"
                                data-rotate='[" our exciting cricket league!", " with the best in our cricket league.", " the thrill of our cricket league.", " your favorite team in our cricket league.", " a part of the action in our cricket league."]'>
                            </span>
                        </h2>
                    </Col>
                </Row>
                <h2 className="lead" align="center" style={{ color: 'antiquewhite', fontSize: 'revert-layer', marginTop: '18%' }}>
                    <span
                        class="txt-rotate"
                        data-period="2000"
                    ><Button>Registration soon...</Button>
                    </span>
                </h2>
            </AttentionSeeker>
            <br></br>
            <hr></hr>
        </div >
    )
}

export default Home
