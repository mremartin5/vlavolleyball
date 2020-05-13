import React, { useGlobal, Fragment } from 'reactn';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Teams = () => {

    const [teams] = useGlobal('teams');

    return (
        <Fragment>
            <Row>
                <h2 className='hd-body'>VLA Teams</h2>
            </Row>
            <Row>
                { !teams &&
                    <Col className='center'>No Data at this time.</Col>
                }
                { teams &&
                    teams.map( (t, key) => (
                        <Col key={key} className='center'>
                            <Link to={'/teams/' + t.linkName}>
                                <img src={require('../../assets/images/vla_team_' + t.linkName + '.png')} alt={t.fullName} height='100'/>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
        </Fragment>
    )
}
export default Teams;