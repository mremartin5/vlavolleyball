import React from 'reactn';
import { Carousel } from 'react-bootstrap';

import ascension from '../../assets/images/vla_team_ascension.png';
import icemen from '../../assets/images/vla_team_icemen.png';
import lvc from '../../assets/images/vla_team_lvc.png';
import pineapple from '../../assets/images/vla_team_pineapple.png';
import risingtide from '../../assets/images/vla_team_risingtide.png';

// TODO - Make slides dymanic in _slide.js
    
const SlideShow = () => {

    return (
        <Carousel className='slideShow carousel-fade' data-interval={500}>
            
            <Carousel.Item>
                <img className="d-block mx-auto img-fluid" src={ascension} alt='' height='400'/>
                <Carousel.Caption>
                    <h3>Ascension</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block mx-auto img-fluid" src={icemen} alt='' height='400'/>
                <Carousel.Caption>
                    <h3>Icemen</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block mx-auto img-fluid" src={lvc} alt='' height='400'/>
                <Carousel.Caption>
                    <h3>Team LVC</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block mx-auto img-fluid" src={pineapple} alt='' height='400'/>
                <Carousel.Caption>
                    <h3>Pinapple</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block mx-auto img-fluid" src={risingtide} alt='' height='400'/>
                <Carousel.Caption>
                    <h3>Rising Tide</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}
export default SlideShow;