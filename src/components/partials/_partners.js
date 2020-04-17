import React, { useGlobal, Fragment } from 'reactn';
import { Row, Col } from 'react-bootstrap';

const Partners = () => {

    const [partners] = useGlobal('partners');

    return (
        <Fragment>
            <Row>
                <h2 className='hd-body'>VLA Partners</h2>
            </Row>
            <Row>
                {
                    partners.map( (p, key) => (
                        <Col key={key} className='center'>
                            <img src={require('../../assets/images/vla_partner_' + p.name + '.png')} alt={p.fullName} height='100'/>
                        </Col>
                    ))
                }
            </Row>
        </Fragment>
    )
}
export default Partners;