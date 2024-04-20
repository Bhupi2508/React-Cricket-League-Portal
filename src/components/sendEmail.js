// functions/sendEmail.js

const emailjs = require('emailjs-com');

exports.handler = async (event, context) => {
    const { serviceId, templateId, userId, templateParams } = JSON.parse(event.body);

    try {
        const response = await emailjs.send(serviceId, templateId, templateParams, userId);
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': 'YOUR_REACT_APP_DOMAIN',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST',
            },
            body: JSON.stringify({ message: 'Email sent successfully', response }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': 'YOUR_REACT_APP_DOMAIN',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST',
            },
            body: JSON.stringify({ message: 'Failed to send email', error }),
        };
    }
};
