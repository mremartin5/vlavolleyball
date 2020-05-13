import React from "reactn";
import { Spinner } from 'react-bootstrap';

const Loading = (props) => {
    return (
        <Spinner animation="border" role="status" className='spinner-details'>
            <span className="sr-only">Loading...</span>
        </Spinner>
    )
}
export default Loading;