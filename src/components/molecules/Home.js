import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

import Carousel from 'react-bootstrap/Carousel';

import Carousel1 from '../../assets/images/carousel-1.jpg';
import Carousel2 from '../../assets/images/carousel-2.jpg';

const Home = () => {
    return(
        <div id="home" className="home">
           <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={Carousel1} alt="First slide"/>                    
                    <Carousel.Caption>
                    <p className="carousel-title">Hello, I'm Trisha</p>
                    <p className="carousel-subtitle">Nulla vitae elit libero, a pharetra augue mollis.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img className="d-block w-100" src={Carousel2} alt="Second slide"/>
                    <Carousel.Caption>
                    <p className="carousel-title">Second slide label</p>
                    <p className="carousel-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={Carousel3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <p className="carousel-title">Third slide label</p>
                    <p className="carousel-subtitle">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </div>
    );
}

export default Home;