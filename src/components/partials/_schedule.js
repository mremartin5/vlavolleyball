import React, { useGlobal, Fragment } from 'reactn';
import { Container, Row, Col, Button, Table, TabContainer, TabContent, TabPane, Nav, NavLink, Accordion } from 'react-bootstrap';

const Schedule = () => {

    const [events] = useGlobal('events');

    const setLocalDateTime = (dt) => {
        let dateTime = new Date(dt).toDateString().split(' ').slice(0,3).join(' ');
        return dateTime;
    }

    const toggleClass = (event) => {
        event.target.classList.toggle('toggleArrow');
    }

    const mappedEvents = events.map( (me,key) => {

        const mappedMatches = me.matches.map( (mm,key) => {

            const mappedTimes = mm.times.map( (mt,key) => {

                const mappedTeams = mt.teams.map( (t,key) => {
                    return (
                        <Fragment key={key}>
                            <tr>
                                <td><img alt={t.name} src={ require('../../assets/images/vla_team_' + t.imgName + '.png') } width='50'/></td>
                                <td>{t.name}</td>
                                <td>Set Score</td>
                                <td>W/L</td>
                            </tr>
                        </Fragment>
                    )
                });

                return (
                    <Fragment key={key}>
                        <TabPane eventKey={key}>
                            <Row className='matchInfo'>
                                <Table>
                                    <tbody>
                                        {mappedTeams}
                                    </tbody>
                                </Table>
                            </Row>
                            <Row className='matchInfo'>
                                <Col className='text-center'>
                                    <Button variant='outline-primary'>Details</Button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <Button variant='outline-danger'>Watch</Button>
                                </Col>
                            </Row>
                        </TabPane>    
                    </Fragment>
                )
            });

            return (
                <Accordion defaultActiveKey={key} key={key}>
                    <Accordion.Toggle as={Row} eventKey={key} onClick={ (e) => toggleClass(e) }>
                        <Col className='subHd dateHd'>
                            {setLocalDateTime(mm.date)}
                        </Col>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={key}>
                        <Row>
                            <TabContainer defaultActiveKey={0}>
                                <Col className='subHd timeHd'>
                                    <Nav className="mr-auto">
                                        {
                                            mm.times.map( (t,k) => (
                                                <Col key={k}><NavLink eventKey={k}>{t.time}</NavLink></Col>
                                            ))
                                        }
                                    </Nav>
                                </Col>
                                <TabContent animation='true' className='container'>
                                    {mappedTimes}
                                </TabContent>
                            </TabContainer>
                        </Row>   
                    </Accordion.Collapse>       
                </Accordion>
            )
        });

        return (
            <Container className='event' key={key}>
                <Row>
                    <Col className='hd eventHd'>
                        {me.name} - {me.location}
                        <br></br>
                        <span className='eventDates'>{me.dates}</span>
                    </Col>
                </Row>
                {mappedMatches}
            </Container>
        )
    });

    return (
        <Fragment>
            {mappedEvents}
        </Fragment>
    )
}
export default Schedule;