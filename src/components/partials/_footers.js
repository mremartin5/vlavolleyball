import React, { useGlobal } from 'reactn';
import { Row, Col } from 'react-bootstrap';
import { Fragment } from 'react';

const Footer = () => {

    const[footer] = useGlobal('footer');

    return (
        <Fragment>
            <Row className='footer-icons justify-content-md-center'>
                <Col></Col>
                {
                    footer.map( (f,k) => (
                        <Col key={k}>
                            <a href={f.url} target='_blank' rel="noopener noreferrer"><i className={'fab fa-' + f.name}></i></a>
                        </Col>
                    ))
                }
                <Col></Col>
            </Row>
            <Row className='footer'><h4>Copyright © 2020 USAVLA - All Rights Reserved.</h4></Row>
        </Fragment>
    )
}
export default Footer;