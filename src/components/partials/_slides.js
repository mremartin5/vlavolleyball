import React, { useGlobal, Fragment } from 'reactn';
import { Carousel } from 'react-bootstrap';

const Slides = (props) => {

    const [slides] = useGlobal('slides');
    
    return (
        <Fragment>
            {
                slides.map( (s,k) => (
                    <Carousel.Item key={k}>
                        <img className="d-block" src={'../../assets/images/vla_team_' + s.imgName + '.png'} alt={s.hd} width='300'/>
                        <Carousel.Caption>
                            <h3>{s.hd}</h3>
                            <p>{s.subHd}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            } 
        </Fragment>
    )
}
export default Slides;