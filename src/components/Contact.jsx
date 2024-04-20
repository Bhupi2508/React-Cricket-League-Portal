import { useState, React } from 'react';
// import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import contactLight from '../media/contact-light.svg';
import contactDark from '../media/contact-dark.svg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'

const Contact = ({ darkMode }) => {

    const [templateParams, setTemplateParams] = useState({
        from_name: '',
        message: ''
    });

    const onInputChange = e => {
        setTemplateParams({ ...templateParams, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const endpoint = window.location.hostname === 'localhost' ?
            'http://localhost:8888/.netlify/functions/sendEmail' :
            '/.netlify/functions/sendEmail';

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
                templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                userId: process.env.REACT_APP_EMAILJS_USER_ID,
                templateParams,
            }),
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
            swal({
                title: 'Sent Successfully!',
                text: 'Glad to hear from you! We will get back to you as soon as possible',
                icon: 'success',
            });
            setTemplateParams({ from_name: '', message: '' });
        } else {
            swal({
                title: 'Failed to Send',
                text: 'There was an error sending your message. Please try again later.',
                icon: 'error',
            });
        }
    };


    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Container>
                <Row>
                    <Col lg={4}>
                        <br></br>
                        <h2 className="lead">Contact us!</h2>
                        <p className="contact-text">Share your cricket ideas, feedback, or collaboration opportunities. Include your contact details for a reply.</p>
                        <br></br>
                        <img src={darkMode ? contactDark : contactLight} alt="contact" className="contact-img img-fluid" />
                    </Col>
                    <Col lg={8}>
                        <br></br>
                        <Form onSubmit={e => onSubmit(e)}>
                            <Form.Group>
                                <Form.Control onChange={e => onInputChange(e)} value={templateParams.from_name} name="from_name" className="ph name" type="name" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control onChange={e => onInputChange(e)} value={templateParams.message} name="message" as="textarea" rows={8} className="ph msg" placeholder="Enter your message" />
                            </Form.Group>
                            <div >
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} type="submit" style={{ marginRight: '10px' }}>
                                    Submit
                                </Button>
                            </div>

                        </Form>
                    </Col>
                </Row>
            </Container>
            <br></br>
        </div>
    )
}

export default Contact
