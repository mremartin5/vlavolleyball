import React, { useGlobal, Fragment } from 'reactn';
import { Row, Col } from 'react-bootstrap';

const Sponsors = () => {

    const [sponsors] = useGlobal('sponsors');

    return (
        <Fragment>
            <Row>
                <h2 className='hd-body'>VLA Sponsors</h2>
            </Row>
            <Row>
                { !sponsors &&
                    <Col className='hd eventHd'>No Data at this time.</Col>
                }
                { sponsors &&
                    sponsors.map( (s, key) => (
                        <Col key={key} className='center'>
                            <img src={require('../../assets/images/vla_sponsor_' + s.name + '.png')} alt={s.fullName} width='200'/>
                        </Col>
                    ))
                }
            </Row>
        </Fragment>
    )
}
export default Sponsors;