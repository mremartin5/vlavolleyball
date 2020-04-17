import React, { useState, useEffect, Fragment } from 'reactn';
import { Row } from 'react-bootstrap';

const useFetch = (url) => {

    const [data, updateData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                updateData(json);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, [url]);
  
    return { data, error };
}

const Instagram = () => {
    const url = 'https://www.instagram.com/vlavolleyball/?__a=1';
    const data = useFetch(url, {});
    console.log(data);

    return (
        // <Col>{JSON.stringify(result)}</Col>
        <Fragment>
            <Row>
                <h2 className='hd-body'>@vlavolleyball</h2>
            </Row>
            
            <div className="powr-instagram-feed" id="374e129d_1586924050"></div>
        </Fragment>
    )
}
export default Instagram;