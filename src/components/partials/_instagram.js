import React, { Fragment, useEffect, useGlobal } from 'reactn';
import { Row } from 'react-bootstrap';
import { useFetch } from '../../actions';

const Instagram = () => {
    const url = 'https://www.instagram.com/vlavolleyball/?__a=1';
    const [data] = useFetch(url);
    const [isLoading] = useGlobal('isLoading');
    
    useEffect(() => {
        console.log(data.graphql);
        console.log(isLoading);
    }, [data, isLoading]);

    return (
        <Fragment>
            <Row>
                <h2 className='hd-body'>@vlavolleyball</h2>
            </Row>
            { isLoading &&
                <h1>Loading...</h1>
            }
            { !isLoading &&
                <iframe src="https://snapwidget.com/embed/816278" allowtransparency="true" frameBorder='0' scrolling='no' className='snapwidget-widget instagram' title='instagram'></iframe>
            }
        </Fragment>
    )
}
export default Instagram;