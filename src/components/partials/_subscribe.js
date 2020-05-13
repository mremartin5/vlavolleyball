import React, { useState, useGlobal, Fragment } from 'reactn';
import Reaptcha from 'reaptcha';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Subscribe = (props) => {

    const [recaptchaKey] = useGlobal('recaptchaKeyV2');
    const [secretRecaptchaKeyV2] = useGlobal('secretRecaptchaKeyV2');
    const [verified, setVerified] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState('');

    const toggleEditing = () => {
        setEditing(true);
    };
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        // TODO - send to subscribe mailing list
        console.log(event.target.subscribeEmail.value);
        event.preventDefault();
        event.stopPropagation();
    }

    const onVerify = (recaptchaToken) => {
        console.log(recaptchaToken);
        // TODO - Fix CORS issue, stop using proxyurl
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        // POST request using fetch with error handling
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch(proxyurl + 'https://www.google.com/recaptcha/api/siteverify?secret=' + secretRecaptchaKeyV2 + '&response=' +  recaptchaToken, requestOptions)
            .then(async response => {
                const data = await response.json();
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                console.log('Recaptcha success', data);
                setVerified(true);
            })
            .catch(error => {
                // setError(JSON.stringify(error));
                console.error('There was an error!', error);
            });
    }

    return (
        <Fragment>
            <Container className='subscribe'>
                <Row>
                    <h2 className='hd-body'>Subscribe to VLA</h2>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col md={8} className='text-center'>Want to learn more and stay in the loop? Are you a volley fan? Interested athlete? Sign up to learn more about upcoming matches, and special events!</Col>
                </Row>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Row className='justify-content-md-center'>
                        <Col md={3}></Col>
                        <Col>
                            <Row>
                                <Col md={9}>
                                    <Form.Control type='email' name='subscribeEmail' placeholder='Email' required onFocus={toggleEditing}/>
                                </Col>
                                <Col md={3}>
                                    
                                    <Button
                                        type='submit'
                                        className='submit-subscribe'
                                        disabled={!verified}
                                    >
                                        Subscribe
                                    </Button>
                                </Col>
                            </Row>
                            { isEditing &&
                                <Row className='justify-content-md-center'>
                                    <Col>
                                        <Reaptcha sitekey={recaptchaKey} onVerify={onVerify} />
                                    </Col>
                                </Row>
                            }
                            { error &&
                                <Row className='justify-content-md-center'>
                                    <Col>
                                        {error}
                                    </Col>
                                </Row>
                            }
                        </Col>
                        <Col md={3}></Col>
                    </Form.Row>
                </Form>
            </Container>
        </Fragment>
    )
}
export default Subscribe;