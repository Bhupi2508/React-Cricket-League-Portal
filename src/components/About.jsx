import React from 'react'
import { Fade } from "react-awesome-reveal";
import './styles.css';
import introductionImage from '../media/Menaria_Tushar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const About = ({ darkMode }) => {

  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  return (
    <div>
      <br></br>
      <br></br>
      <Fade>
        <Container align='center'>
          <Row>
            <Col lg={8} align='center'>
              <Card className="nbcard">
                <Card.Body>
                  <Card.Title><h2 className="lead">Let's have an introduction!</h2></Card.Title>
                  <br></br>
                  <Card.Text>
                    <p>Welcome to the <span style={{ color: 'green' }}>Pratap Nagar Cricket League (PNCL)!</span> The PNCL is a prestigious cricket tournament held in <span style={{ color: 'green' }}>Pratap Nagar, Sector 10</span>. Teams are selected through an exciting auction process.</p>
                    <p>The <span style={{ color: 'green' }}>winning and runner-up teams</span> receive trophies, medals, and prize money. Individual awards include <span style={{ color: 'green' }}>best batsman, best bowler, and Man of the Series</span>. <span style={{ color: 'teal' }}>Captain Shab (Anuj Faujdar)</span> leads the teams.</p>
                    <p>Team owners build their dream teams through the auction. Entry fees apply for each player, contributing to the prize pool. The league schedule will be announced soon.</p>
                    <p>For more information, connect with the management team. Get ready for exciting cricket action!</p>
                  </Card.Text>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <a style={{ marginRight: '13px' }} href="https://www.instagram.com/the____anuj_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer noopener">
                      <Button style={{ background: 'border-box', fontWeight: '600' }} variant={darkMode ? "outline-light" : "outline-dark"} className='a'>
                        <FontAwesomeIcon className="dark" size="lg" icon={faInstagram} /> Anuj
                      </Button>
                    </a>
                    <a style={{ marginRight: '13px' }} href="https://www.instagram.com/imohit_98?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer noopener">
                      <Button style={{ background: 'border-box', fontWeight: '600' }} variant={darkMode ? "outline-light" : "outline-dark"} className='a'>
                        <FontAwesomeIcon className="dark" size="lg" icon={faInstagram} /> Mohit
                      </Button>
                    </a>
                    <a style={{ marginRight: '13px' }} href="https://www.instagram.com/tushar.choudhary_17?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer noopener">
                      <Button style={{ background: 'border-box', fontWeight: '600' }} variant={darkMode ? "outline-light" : "outline-dark"} className='a'>
                        <FontAwesomeIcon className="dark" size="lg" icon={faInstagram} /> Tushar
                      </Button>
                    </a>
                    < a style={{ marginRight: '13px' }} href="https://www.instagram.com/puneet_pooniya_jaat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer noopener">
                      <Button style={{ background: 'border-box', fontWeight: '600' }} variant={darkMode ? "outline-light" : "outline-dark"} className='a'>
                        <FontAwesomeIcon className="dark" size="lg" icon={faInstagram} /> Puneet
                      </Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} align='center'>
              <Card className="nbcard">
                <Card.Body>
                  <img src={darkMode ? introductionImage : introductionImage} alt="connect" className="connect-img img-fluid animated" />
                  <p><b>Anuj paltan Vs निर्दयी Menaria</b></p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br></br>
          <hr></hr>
          <br></br>
        </Container>
      </Fade>
    </div >
  )
}

export default About
