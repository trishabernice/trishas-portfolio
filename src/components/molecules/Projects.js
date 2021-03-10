import React from 'react';
import '../../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel'

import dchs1 from '../../assets/images/dchs1.png';
import dchs2 from '../../assets/images/dchs2.png';
import dchs3 from '../../assets/images/dchs3.png';
import dchs4 from '../../assets/images/dchs4.png';
import docapp1 from '../../assets/images/docapp1.png';
import docapp2 from '../../assets/images/docapp2.png';
import docapp3 from '../../assets/images/docapp3.png';
import docapp4 from '../../assets/images/docapp4.png';
import docapp5 from '../../assets/images/docapp5.png';
import portfolio1 from '../../assets/images/portfolio1.png';
import portfolio2 from '../../assets/images/portfolio2.png';

//import { dummy1, dummy2, dchs1, dchs2, dchs3, dchs4 } from '../../assets/images/images';

const Projects = () => {
    return(
        <div id="projects" className="projects">
        <h1 className="section-titles">Projects</h1>

        <Card className="cards">
          <div>
            <div style={{float: 'left'}}>
            <Card.Body className="cards-body">
              <Card.Title >Portfolio Web Application</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lectus urna, ultricies et massa ut, eleifend rhoncus nulla. Maecenas venenatis magna metus, a vulputate 
              ligula ornare sed. Praesent malesuada ex id enim pellentesque pellentesque. Mauris sit amet metus in ante fringilla sagittis. Ut eleifend ligula quis porttitor lobortis. 
              Curabitur in dolor est. In scelerisque, sem ut vulputate varius, odio lacus pretium urna. 
              </Card.Text>
              <Button variant="dark" href="https://github.com/" target="_blank">Go to project Github</Button>
            </Card.Body>
            </div>
            <div style={{float: 'right'}}>
              <Carousel slide={false}>
                <Carousel.Item>
                    <img src={portfolio1} alt="First slide" className="cards-img"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={portfolio2} alt="Second slide" className="cards-img"/>
                </Carousel.Item>
            </Carousel>
            </div>
          </div>
        </Card>
        
        <Card className="cards">
          <div>
            <div style={{float: 'left'}}>
            <Card.Body className="cards-body">
              <Card.Title>MyDoctor Mobile Application</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lectus urna, ultricies et massa ut, eleifend rhoncus nulla. Maecenas venenatis magna metus, a vulputate 
              ligula ornare sed. Praesent malesuada ex id enim pellentesque pellentesque. Mauris sit amet metus in ante fringilla sagittis. Ut eleifend ligula quis porttitor lobortis. 
              Curabitur in dolor est. In scelerisque, sem ut vulputate varius, odio lacus pretium urna. 
              </Card.Text>
              <Button variant="dark" href="https://github.com/" target="_blank">Go to project Github</Button>
            </Card.Body>
            </div>
            <div style={{ float: 'right'}}>
              <Carousel slide={false}>
                  <Carousel.Item>
                      <img src={docapp1} alt="First slide" className="cards-img"/>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img src={docapp2} alt="Second slide" className="cards-img"/>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img src={docapp3} alt="Third slide" className="cards-img"/>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img src={docapp4} alt="Fourth slide" className="cards-img"/>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img src={docapp5} alt="Fifth slide" className="cards-img"/>
                  </Carousel.Item>
              </Carousel>            
            </div>
          </div>
        </Card>

        <Card className="cards">
          <div>
            <div style={{float: 'left'}}>
            <Card.Body className="cards-body">
              <Card.Title>Dane County Humane Society Mobile Application</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lectus urna, ultricies et massa ut, eleifend rhoncus nulla. Maecenas venenatis magna metus, a vulputate 
              ligula ornare sed. Praesent malesuada ex id enim pellentesque pellentesque. Mauris sit amet metus in ante fringilla sagittis. Ut eleifend ligula quis porttitor lobortis. 
              Curabitur in dolor est. In scelerisque, sem ut vulputate varius, odio lacus pretium urna. 
              </Card.Text>
              <Button variant="dark" href="https://github.com/trishabernice/DCHS" target="_blank">Go to project Github</Button>
            </Card.Body>
            </div>
            <div style={{ float: 'right'}}>
            <Carousel slide={false}>
                <Carousel.Item>
                    <img src={dchs1} alt="First slide" className="cards-img"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={dchs2} alt="Second slide" className="cards-img"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={dchs3} alt="Third slide" className="cards-img"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={dchs4} alt="Fourth slide" className="cards-img"/>
                </Carousel.Item>
            </Carousel>
            </div>
          </div>
        </Card>
        </div>
    );
}

export default Projects;