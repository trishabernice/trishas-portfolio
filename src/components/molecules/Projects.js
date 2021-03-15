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
import portfolio3 from '../../assets/images/portfolio3.png';
import portfolio4 from '../../assets/images/portfolio4.png';

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
              You’re looking at it right now! This is a single page web application that is also mobile-friendly, developed to showcase what I have to offer, and also to give people easier access to me. This web application was first designed on a prototyping tool — Figma, and was then translated into this using React and CSS. This application is also deployed on Github for better access! 
              </Card.Text>
              <Button variant="dark" href="https://github.com/trishabernice/trishas-portfolio" target="_blank">Go to project Github</Button>
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
                <Carousel.Item>
                    <img src={portfolio3} alt="Third slide" className="cards-img"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={portfolio4} alt="Fourth slide" className="cards-img"/>
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
              A mobile application designed to give patients better, faster and easier access to doctors and hospital information, as well as to facilitate communication between patients and doctor. This mobile application was built mainly using React Native, with React-Redux implemented to manage global application state, and Firebase Storage, Authentication and Realtime DB was used as the application's database to manage, store, and sync user data in realtime. 
              </Card.Text>
              <Button variant="dark" href="https://github.com/trishabernice/MyDoctorApp" target="_blank">Go to project Github</Button>
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
              A mobile application for a local animal shelter in Madison, WI, built to present customers with a user friendly interface as well as to facilitate communication between customers and the organisation. This application is built with Scrum for the development and delivery framework, Flutter for the software development kit, Dart for the language, and Firebase’s Cloud FireStore for the database. Some features of this application include: a calendar, a notifications tab, a gated admin access that allows for data modification, etc. 
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