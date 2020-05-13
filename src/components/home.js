import React, { Fragment } from 'reactn';
import { Container, Row, Col } from 'react-bootstrap';
import NewsFlash from './partials/_newsflash';
import SlideShow from './partials/_slideshow';
import Schedule from './partials/_schedule';
import Teams from './partials/_teams';
import Partners from './partials/_partners';
import Sponsors from './partials/_sponsors';
import Instagram from './partials/_instagram';
import Footer from './footer';

const Home = () => {

    return (
        <Fragment>
            <NewsFlash />
            <Container className='body'>
                <Row>
                    <Col className='main-section'>
                        <div className='row-container'><SlideShow /></div>
                        <div className='row-container'><Teams /></div>
                        <div className='row-container'><Partners /></div>
                        <div className='row-container'><Sponsors /></div>
                        <div className='row-container'><Instagram /></div>
                    </Col>
                    <Col md={4} className='bg-schedule'>
                        <Schedule />
                    </Col>
                </Row>
                <Footer />
            </Container>
        </Fragment>
    )
}
export default Home;